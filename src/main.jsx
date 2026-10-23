import { createRoot } from 'react-dom/client';
import { Probador } from './islas/Probador.jsx';
import { Comparador } from './islas/Comparador.jsx';
import { GuiaCara } from './islas/GuiaCara.jsx';
import { Estilos } from './islas/Estilos.jsx';
import { iniciarEstado, iniciarMenu } from './estado.js';

document.documentElement.classList.remove('sin-js');

// PHP deja el contenedor de cada isla con sus datos en atributos data-*.
const islas = {
  'isla-probador': (el) => <Probador whatsapp={el.dataset.whatsapp} foto={el.dataset.foto} />,
  'isla-estilos': (el) => <Estilos base={el.dataset.base} />,
  'isla-cara': () => <GuiaCara />,
  'isla-cristales': () => <Comparador />,
};

for (const [id, crear] of Object.entries(islas)) {
  const el = document.getElementById(id);
  if (el) createRoot(el).render(crear(el));
}

iniciarMenu();
iniciarEstado();
