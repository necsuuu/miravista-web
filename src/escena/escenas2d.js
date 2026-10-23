// Escenas dibujadas en canvas para comparar cristales. Son ilustrativas, no fotos.
import { contorno } from './contornos.js';

function semillero(n) {
  let s = n;
  return () => ((s = (s * 16807) % 2147483647) / 2147483647);
}

// Costanera de día: cielo, arboleda, río con reflejos del sol.
export function costanera(g, w, h, { brillo = 1 } = {}) {
  const cielo = g.createLinearGradient(0, 0, 0, h * 0.5);
  cielo.addColorStop(0, '#6fa9d6');
  cielo.addColorStop(1, '#d9ecf5');
  g.fillStyle = cielo;
  g.fillRect(0, 0, w, h * 0.5);

  g.fillStyle = '#fff6d6';
  g.beginPath();
  g.arc(w * 0.52, h * 0.16, h * 0.07, 0, Math.PI * 2);
  g.fill();

  const rnd = semillero(11);
  g.fillStyle = '#2f5a3a';
  g.beginPath();
  g.moveTo(0, h * 0.5);
  for (let x = 0; x <= w; x += w / 24) g.lineTo(x, h * (0.4 + rnd() * 0.06));
  g.lineTo(w, h * 0.5);
  g.fill();

  const agua = g.createLinearGradient(0, h * 0.5, 0, h);
  agua.addColorStop(0, '#4b86a8');
  agua.addColorStop(1, '#1f4d66');
  g.fillStyle = agua;
  g.fillRect(0, h * 0.5, w, h * 0.5);

  if (brillo > 0) {
    const r2 = semillero(5);
    g.save();
    g.globalAlpha = brillo;
    const reflejo = g.createLinearGradient(w * 0.32, 0, w * 0.72, 0);
    reflejo.addColorStop(0, 'rgba(255,255,255,0)');
    reflejo.addColorStop(0.5, 'rgba(255,255,255,0.75)');
    reflejo.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = reflejo;
    g.fillRect(w * 0.32, h * 0.5, w * 0.4, h * 0.5);
    g.fillStyle = '#ffffff';
    for (let i = 0; i < 220; i++) {
      const y = h * 0.52 + r2() * h * 0.46;
      const x = w * 0.52 + (r2() - 0.5) * w * (0.2 + (y / h) * 0.5);
      g.globalAlpha = brillo * (0.4 + r2() * 0.6);
      g.beginPath();
      g.ellipse(x, y, 4 + r2() * 14, 1 + r2() * 2, 0, 0, Math.PI * 2);
      g.fill();
    }
    g.restore();
  }

  // Baranda de la costanera en primer plano.
  g.fillStyle = '#d7d2c4';
  g.fillRect(0, h * 0.86, w, h * 0.03);
  for (let x = w * 0.03; x < w; x += w / 14) g.fillRect(x, h * 0.86, w * 0.008, h * 0.14);
}

// Calle de noche: faroles y autos, con halos y reflejos fantasma si el cristal no tiene antirreflejo.
export function noche(g, w, h, { reflejos = true } = {}) {
  const cielo = g.createLinearGradient(0, 0, 0, h);
  cielo.addColorStop(0, '#0b1420');
  cielo.addColorStop(1, '#1a2533');
  g.fillStyle = cielo;
  g.fillRect(0, 0, w, h);

  const rnd = semillero(3);
  g.fillStyle = '#05090f';
  for (let x = 0; x < w; x += w / 9) {
    const alto = h * (0.25 + rnd() * 0.3);
    g.fillRect(x, h * 0.62 - alto, w / 9 - 4, alto);
  }
  g.fillStyle = '#20262e';
  g.fillRect(0, h * 0.62, w, h * 0.38);

  const luces = [];
  for (let i = 0; i < 6; i++) luces.push([w * (0.08 + i * 0.17), h * 0.3, '#ffc46b', 1]);
  luces.push([w * 0.42, h * 0.78, '#fff4d8', 1.6], [w * 0.52, h * 0.78, '#fff4d8', 1.6]);

  for (const [x, y, color, t] of luces) {
    const r = (reflejos ? 46 : 16) * t * (w / 800);
    const halo = g.createRadialGradient(x, y, 0, x, y, r);
    halo.addColorStop(0, color);
    halo.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = halo;
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#ffffff';
    g.beginPath();
    g.arc(x, y, 3 * t, 0, Math.PI * 2);
    g.fill();
    if (reflejos) {
      // Reflejo fantasma: la luz rebota entre las caras del cristal y aparece corrida.
      g.globalAlpha = 0.28;
      g.fillStyle = color;
      g.beginPath();
      g.arc(w - x * 0.92, h - y * 0.85, 6 * t, 0, Math.PI * 2);
      g.fill();
      g.globalAlpha = 1;
    }
  }
  if (reflejos) {
    g.save();
    g.globalAlpha = 0.12;
    g.fillStyle = '#cfe3ff';
    g.translate(w * 0.5, h * 0.5);
    g.rotate(-0.5);
    g.fillRect(-w * 0.6, -h * 0.05, w * 1.2, h * 0.1);
    g.restore();
  }
}

// Escritorio de noche con pantalla encendida.
export function pantalla(g, w, h, { filtro = false } = {}) {
  g.fillStyle = '#141a22';
  g.fillRect(0, 0, w, h);
  const glow = g.createRadialGradient(w * 0.5, h * 0.42, 0, w * 0.5, h * 0.42, w * 0.6);
  glow.addColorStop(0, 'rgba(120,170,255,0.35)');
  glow.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = glow;
  g.fillRect(0, 0, w, h);

  const px = w * 0.2, py = h * 0.14, pw = w * 0.6, ph = h * 0.55;
  g.fillStyle = '#2a3038';
  g.fillRect(px - 10, py - 10, pw + 20, ph + 20);
  g.fillStyle = '#f4f8ff';
  g.fillRect(px, py, pw, ph);
  g.fillStyle = '#9aa7b6';
  for (let i = 0; i < 9; i++) g.fillRect(px + pw * 0.08, py + ph * (0.12 + i * 0.09), pw * (0.84 - (i % 3) * 0.18), ph * 0.03);
  g.fillStyle = '#2a3038';
  g.fillRect(px - 30, py + ph + 10, pw + 60, h * 0.05);
  g.fillStyle = '#3b2c20';
  g.fillRect(0, h * 0.82, w, h * 0.18);

  if (filtro) {
    // El filtro corta parte del azul: la imagen se ve apenas más cálida.
    g.save();
    g.globalCompositeOperation = 'multiply';
    g.fillStyle = 'rgba(255,226,170,0.55)';
    g.fillRect(0, 0, w, h);
    g.restore();
  }
}

// Par de cristales sobre la escena para el fotocromático.
export function cristalesSobre(g, w, h, oscuridad) {
  const pts = contorno('redondo', 48);
  const esc = Math.min(w, h * 1.6) * 0.17;
  const cy = h * 0.5;
  g.save();
  for (const lado of [-1, 1]) {
    const cx = w * 0.5 + lado * esc * 0.6;
    g.beginPath();
    pts.forEach(([x, y], i) => {
      const X = cx + (lado === -1 ? x : -x) * esc;
      const Y = cy - y * esc;
      i ? g.lineTo(X, Y) : g.moveTo(X, Y);
    });
    g.closePath();
    g.fillStyle = `rgba(48,40,32,${oscuridad * 0.78})`;
    g.fill();
    g.lineWidth = Math.max(3, esc * 0.06);
    g.strokeStyle = '#0d1b24';
    g.stroke();
  }
  g.beginPath();
  g.moveTo(w * 0.5 - esc * 0.12, cy - esc * 0.12);
  g.quadraticCurveTo(w * 0.5, cy - esc * 0.22, w * 0.5 + esc * 0.12, cy - esc * 0.12);
  g.stroke();
  g.restore();
}
