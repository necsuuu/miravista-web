// Contorno de un cristal para cada forma, en unidades donde 1 = 50 mm.
// +x apunta hacia la nariz; el otro cristal se obtiene espejando x.

const N = 96;

function muestrear(f) {
  const pts = [];
  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 2;
    pts.push(f(t));
  }
  return pts;
}

const superelipse = (a, b, p) => (t) => {
  const c = Math.cos(t), s = Math.sin(t);
  return [a * Math.sign(c) * Math.abs(c) ** (2 / p), b * Math.sign(s) * Math.abs(s) ** (2 / p)];
};

export function contorno(forma, anchoMm) {
  const W = anchoMm / 50;
  const a = W / 2;
  switch (forma) {
    case 'rectangular':
      return muestrear(superelipse(a, a * 0.7, 4.2));
    case 'aviador':
      return muestrear((t) => {
        const c = Math.cos(t), s = Math.sin(t);
        if (s >= 0) {
          // Borde superior casi recto.
          return [a * Math.sign(c) * Math.abs(c) ** 0.8, a * 0.5 * s ** 1.4 + a * 0.12];
        }
        // La gota cae hacia la nariz, como en el aviador clásico.
        const x = a * c + a * 0.26 * -s * (0.5 + 0.5 * c);
        return [x, a * 1.12 * s + a * 0.12];
      });
    case 'gato':
      return muestrear((t) => {
        const [x, y] = superelipse(a, a * 0.6, 2.6)(t);
        const s = Math.sin(t);
        const externo = Math.max(0, -x / a);
        const interno = Math.max(0, x / a);
        if (s > 0) {
          // Esquina externa superior levantada, el rasgo del ojo de gato.
          return [x - a * 0.12 * externo ** 2 * s, y + a * 0.55 * externo ** 2.5 * s];
        }
        // Abajo se angosta hacia la nariz.
        return [x, y * (1 - 0.3 * interno)];
      });
    case 'redondo':
    default:
      return muestrear((t) => [a * Math.cos(t), a * 0.94 * Math.sin(t)]);
  }
}

// Desplaza el contorno hacia afuera (sentido antihorario => normal (dy, -dx)).
export function desplazar(pts, d) {
  const n = pts.length;
  return pts.map((p, i) => {
    const prev = pts[(i - 1 + n) % n];
    const next = pts[(i + 1) % n];
    const dx = next[0] - prev[0];
    const dy = next[1] - prev[1];
    const len = Math.hypot(dx, dy) || 1;
    return [p[0] + (dy / len) * d, p[1] - (dx / len) * d];
  });
}

export function limites(pts) {
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  return { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
}

export function aPathSvg(pts, escala = 1, dx = 0, dy = 0, espejo = false) {
  return (
    pts
      .map(([x, y], i) => `${i ? 'L' : 'M'}${((espejo ? -x : x) * escala + dx).toFixed(2)},${(-y * escala + dy).toFixed(2)}`)
      .join(' ') + ' Z'
  );
}
