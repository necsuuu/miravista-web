// Genera assets/img/estilos/*.webp abriendo herramientas/render.html en Chromium (requiere playwright).
import { mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { chromium } from 'playwright';

const navegador = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const pagina = await navegador.newPage({ viewport: { width: 900, height: 640 }, deviceScaleFactor: 1 });
pagina.on('pageerror', (e) => console.error(e.message));
await pagina.goto(pathToFileURL(resolve('herramientas/render.html')).href);
await pagina.waitForFunction(() => document.title === 'listo', null, { timeout: 120000 });
const fotos = await pagina.evaluate(() => window.__fotos);
await mkdir('assets/img/estilos', { recursive: true });
for (const [nombre, url] of Object.entries(fotos)) {
  await writeFile(`assets/img/estilos/${nombre}.webp`, Buffer.from(url.split(',')[1], 'base64'));
}
await navegador.close();
console.log(`${Object.keys(fotos).length} imágenes en assets/img/estilos`);
