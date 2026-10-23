export const menosMovimiento = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function waUrl(numero, texto) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}

// Las islas se comunican por este evento: catálogo y guía de cara le piden al probador que cargue un modelo.
export function probarEnProbador(config) {
  window.dispatchEvent(new CustomEvent('gafas:probar', { detail: config }));
  document.getElementById('probador')?.scrollIntoView({ behavior: menosMovimiento() ? 'auto' : 'smooth' });
}
