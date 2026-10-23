// Herramienta de desarrollo: genera las imágenes del catálogo con el mismo modelo 3D del probador.
import { Visor } from './escena/visor.js';
import { ESTILOS } from './datos/opciones.js';

const caja = document.getElementById('lienzo');
const visor = new Visor(caja, { autoGiro: false });
const fotos = {};

for (const e of ESTILOS) {
  visor.configurar(e);
  for (const vista of ['tresCuartos', 'frente']) {
    visor.vista(vista);
    fotos[`${e.id}-${vista}`] = visor.capturar('image/webp');
  }
}
visor.destruir();
window.__fotos = fotos;
document.title = 'listo';
