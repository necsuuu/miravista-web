// Copia las fuentes desde node_modules a assets/fonts para servirlas desde el mismo hosting.
import { copyFile, mkdir } from 'node:fs/promises';

const archivos = {
  'node_modules/@fontsource-variable/unbounded/files/unbounded-latin-wght-normal.woff2': 'unbounded.woff2',
  'node_modules/@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2': 'atkinson.woff2',
};

await mkdir('assets/fonts', { recursive: true });
for (const [origen, nombre] of Object.entries(archivos)) await copyFile(origen, `assets/fonts/${nombre}`);
console.log('Fuentes copiadas a assets/fonts');
