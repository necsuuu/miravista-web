import * as THREE from 'three';
import { contorno, desplazar, limites } from './contornos.js';
import { FORMAS, ARMAZONES, CRISTALES } from '../datos/opciones.js';

let texturaCarey = null;

// Textura de carey dibujada en canvas: manchas ámbar y marrón sobre fondo oscuro.
function carey() {
  if (texturaCarey) return texturaCarey;
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#3a1d0c';
  g.fillRect(0, 0, 256, 256);
  let semilla = 7;
  const rnd = () => ((semilla = (semilla * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 90; i++) {
    const x = rnd() * 256, y = rnd() * 256, r = 6 + rnd() * 26;
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    const tono = rnd() > 0.5 ? '196,120,48' : '120,60,22';
    grad.addColorStop(0, `rgba(${tono},${0.35 + rnd() * 0.3})`);
    grad.addColorStop(1, `rgba(${tono},0)`);
    g.fillStyle = grad;
    g.beginPath();
    g.ellipse(x, y, r, r * (0.5 + rnd()), rnd() * Math.PI, 0, Math.PI * 2);
    g.fill();
  }
  texturaCarey = new THREE.CanvasTexture(c);
  texturaCarey.colorSpace = THREE.SRGBColorSpace;
  texturaCarey.wrapS = texturaCarey.wrapT = THREE.RepeatWrapping;
  texturaCarey.repeat.set(0.7, 0.7);
  return texturaCarey;
}

function materialArmazon(clave) {
  const a = ARMAZONES[clave];
  const m = new THREE.MeshPhysicalMaterial({
    color: a.carey ? '#ffffff' : a.color,
    roughness: a.rugosidad,
    metalness: a.metal ? 1 : 0,
    clearcoat: a.metal ? 0 : 0.8,
    clearcoatRoughness: 0.15,
  });
  if (a.carey) m.map = carey();
  if (a.translucido) {
    m.transparent = true;
    m.opacity = 0.5;
    m.depthWrite = false;
  }
  return m;
}

function materialCristal(clave) {
  const c = CRISTALES[clave];
  return new THREE.MeshPhysicalMaterial({
    color: c.color,
    transparent: true,
    opacity: c.opacidad,
    roughness: 0.04,
    metalness: c.espejo ? 0.95 : 0,
    envMapIntensity: c.espejo ? 1.6 : 1,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
}

const forma2D = (pts) => new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, y)));
const espejar = (pts) => pts.map(([x, y]) => [-x, y]).reverse();

function aro(interior, grosor, prof, mat) {
  const exterior = desplazar(interior, grosor);
  const s = forma2D(exterior);
  s.holes.push(new THREE.Path(interior.map(([x, y]) => new THREE.Vector2(x, y))));
  const geo = new THREE.ExtrudeGeometry(s, {
    depth: prof,
    bevelEnabled: true,
    bevelThickness: prof * 0.25,
    bevelSize: grosor * 0.25,
    bevelSegments: 3,
    curveSegments: 4,
  });
  geo.translate(0, 0, -prof / 2);
  return new THREE.Mesh(geo, mat);
}

function tubo(puntos, radio, mat) {
  const curva = new THREE.CatmullRomCurve3(puntos.map((p) => new THREE.Vector3(...p)));
  return new THREE.Mesh(new THREE.TubeGeometry(curva, 48, radio, 12, false), mat);
}

// Arma el anteojo completo. El centro queda en el puente, mirando hacia +z.
export function crearAnteojos({ forma, armazon, cristal }) {
  const grupo = new THREE.Group();
  const { lente, puente, patilla } = FORMAS[forma].medidas;
  const metal = ARMAZONES[armazon].metal;
  const grosor = metal ? 0.032 : 0.058;
  const prof = metal ? 0.04 : 0.09;
  const matA = materialArmazon(armazon);
  const matC = materialCristal(cristal);

  const base = contorno(forma, lente);
  const lim = limites(base);
  const mitadPuente = puente / 100;
  const cx = mitadPuente + lim.maxX; // centro de cada cristal respecto del puente

  for (const lado of [-1, 1]) {
    // lado -1: cristal izquierdo en pantalla, con la nariz hacia +x.
    const pts = lado === -1 ? base : espejar(base);
    const g = new THREE.Group();
    g.position.x = lado * cx;
    g.add(aro(pts, grosor, prof, matA));
    const c = new THREE.Mesh(new THREE.ShapeGeometry(forma2D(pts), 6), matC);
    g.add(c);
    grupo.add(g);

    // Bisagra y patilla, desde el borde externo del aro.
    const xExt = lado * (cx + lim.maxX + grosor * 0.6);
    const yBis = lim.maxY * 0.55;
    const bisagra = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.14, 0.16), matA);
    bisagra.position.set(xExt, yBis, -0.04);
    grupo.add(bisagra);
    const largo = patilla / 50;
    grupo.add(
      tubo(
        [
          [xExt, yBis, -0.1],
          [xExt + lado * 0.04, yBis, -largo * 0.35],
          [xExt + lado * 0.06, yBis - 0.03, -largo * 0.8],
          [xExt + lado * 0.05, yBis - 0.3, -largo],
        ],
        metal ? 0.022 : 0.04,
        matA,
      ),
    );

    if (metal) {
      // Plaquetas sobre la nariz.
      const plaqueta = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 16, 12),
        new THREE.MeshPhysicalMaterial({ color: '#e9eef0', transparent: true, opacity: 0.6, roughness: 0.1 }),
      );
      plaqueta.scale.set(0.6, 1, 0.4);
      plaqueta.position.set(lado * (mitadPuente + 0.04), lim.minY * 0.15, 0.12);
      grupo.add(plaqueta);
    }
  }

  // Puente (doble en el aviador).
  const yP = lim.maxY * 0.42;
  const x0 = mitadPuente + 0.02;
  grupo.add(tubo([[-x0, yP, 0], [0, yP + 0.08, 0.02], [x0, yP, 0]], metal ? 0.024 : 0.05, matA));
  if (forma === 'aviador') {
    const yT = lim.maxY * 0.98;
    grupo.add(tubo([[-x0 - 0.2, yT, 0], [0, yT + 0.02, 0.02], [x0 + 0.2, yT, 0]], 0.02, matA));
  }

  return grupo;
}

export function liberar(obj) {
  obj.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m) => m.map !== texturaCarey && m.dispose());
    }
  });
}
