// Arma la carpeta lista para subir a htdocs: solo lo que el servidor necesita.
import { cp, rm, mkdir } from 'node:fs/promises';

const destino = 'dist/htdocs';
await rm('dist', { recursive: true, force: true });
await mkdir(destino, { recursive: true });
for (const item of ['index.php', '.htaccess', 'app', 'assets']) await cp(item, `${destino}/${item}`, { recursive: true });
console.log(`Listo: subí el contenido de ${destino} a la carpeta htdocs del hosting.`);
