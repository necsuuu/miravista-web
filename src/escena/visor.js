import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { crearAnteojos, liberar } from './anteojos.js';

export const VISTAS = {
  frente: { y: 0, x: 0.05 },
  tresCuartos: { y: -0.6, x: 0.12 },
  perfil: { y: -Math.PI / 2 + 0.05, x: 0.05 },
};

export function hayWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch {
    return false;
  }
}

// Escena 3D del probador: anteojos sobre fondo transparente, giro con arrastre o teclado.
export class Visor {
  constructor(contenedor, { autoGiro = true, alPrimerCuadro } = {}) {
    this.contenedor = contenedor;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    contenedor.appendChild(this.renderer.domElement);

    this.escena = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.escena.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    const luz = new THREE.DirectionalLight('#ffffff', 1.4);
    luz.position.set(2, 4, 5);
    this.escena.add(luz);

    this.camara = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
    this.camara.position.set(0, 0.25, 6);
    this.camara.lookAt(0, -0.1, -0.6);

    this.pivote = new THREE.Group();
    this.pivote.position.z = -0.4;
    this.escena.add(this.pivote);
    this.escena.add(this.sombra());

    this.rot = { ...VISTAS.tresCuartos };
    this.objetivo = { ...VISTAS.tresCuartos };
    this.autoGiro = autoGiro && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.ultimoToque = 0;
    this.alPrimerCuadro = alPrimerCuadro;

    this.ajustar = this.ajustar.bind(this);
    this.cuadro = this.cuadro.bind(this);
    this.ro = new ResizeObserver(this.ajustar);
    this.ro.observe(contenedor);
    this.ajustar();
    this.arrastre();
    this.raf = requestAnimationFrame(this.cuadro);
  }

  sombra() {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d');
    const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(0,0,0,0.45)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 128, 128);
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(4.2, 2.2),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }),
    );
    m.rotation.x = -Math.PI / 2;
    m.position.set(0, -1.05, -1);
    return m;
  }

  configurar(config) {
    if (this.anteojos) {
      this.pivote.remove(this.anteojos);
      liberar(this.anteojos);
    }
    this.anteojos = crearAnteojos(config);
    this.pivote.add(this.anteojos);
  }

  vista(nombre) {
    this.objetivo = { ...VISTAS[nombre] };
    this.ultimoToque = performance.now();
  }

  girar(dy, dx = 0) {
    this.objetivo.y += dy;
    this.objetivo.x = Math.max(-0.5, Math.min(0.6, this.objetivo.x + dx));
    this.ultimoToque = performance.now();
  }

  arrastre() {
    const el = this.renderer.domElement;
    let previo = null;
    el.style.touchAction = 'pan-y';
    el.addEventListener('pointerdown', (e) => {
      previo = { x: e.clientX, y: e.clientY };
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', (e) => {
      if (!previo) return;
      this.girar((e.clientX - previo.x) * 0.01, (e.clientY - previo.y) * 0.006);
      previo = { x: e.clientX, y: e.clientY };
    });
    const soltar = () => (previo = null);
    el.addEventListener('pointerup', soltar);
    el.addEventListener('pointercancel', soltar);
  }

  ajustar() {
    const { clientWidth: w, clientHeight: h } = this.contenedor;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camara.aspect = w / h;
    // En pantallas angostas alejamos la cámara para que entren las patillas.
    this.camara.position.z = 6 * Math.min(Math.max(1.45 / (w / h), 1), 2.2);
    this.camara.updateProjectionMatrix();
  }

  cuadro(t) {
    this.raf = requestAnimationFrame(this.cuadro);
    if (this.autoGiro && t - this.ultimoToque > 4000) this.objetivo.y += 0.004;
    this.rot.y += (this.objetivo.y - this.rot.y) * 0.12;
    this.rot.x += (this.objetivo.x - this.rot.x) * 0.12;
    this.pivote.rotation.set(this.rot.x, this.rot.y, 0);
    this.renderer.render(this.escena, this.camara);
    if (this.alPrimerCuadro) {
      this.alPrimerCuadro();
      this.alPrimerCuadro = null;
    }
  }

  capturar(tipo = 'image/webp') {
    this.rot = { ...this.objetivo };
    this.pivote.rotation.set(this.rot.x, this.rot.y, 0);
    this.renderer.render(this.escena, this.camara);
    return this.renderer.domElement.toDataURL(tipo, 0.9);
  }

  destruir() {
    cancelAnimationFrame(this.raf);
    this.ro.disconnect();
    if (this.anteojos) liberar(this.anteojos);
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
