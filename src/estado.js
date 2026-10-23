const aMin = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

export function estaAbierto(horarios, fecha) {
  const min = fecha.getHours() * 60 + fecha.getMinutes();
  return (horarios[fecha.getDay() || 7] || []).some(([a, c]) => min >= aMin(a) && min < aMin(c));
}

function ahoraEnLocal() {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Argentina/Cordoba', hour12: false,
      year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',
    }).formatToParts(new Date()).map(({ type, value }) => [type, value]),
  );
  return new Date(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute);
}

export function iniciarEstado() {
  const el = document.querySelector('[data-estado]');
  if (!el) return;
  let horarios;
  try {
    horarios = JSON.parse(el.dataset.horarios);
  } catch {
    return;
  }
  const texto = el.querySelector('[data-estado-texto]');
  const actualizar = () => {
    const abierto = estaAbierto(horarios, ahoraEnLocal());
    el.classList.toggle('estado--abierto', abierto);
    el.classList.toggle('estado--cerrado', !abierto);
    texto.textContent = abierto ? 'Abierto ahora' : 'Cerrado ahora';
  };
  actualizar();
  setInterval(actualizar, 60_000);
}

export function iniciarMenu() {
  const boton = document.querySelector('[data-menu-toggle]');
  const nav = document.getElementById('nav-principal');
  if (!boton || !nav) return;
  const cerrar = () => {
    nav.classList.remove('is-abierta');
    boton.setAttribute('aria-expanded', 'false');
  };
  boton.addEventListener('click', () => {
    const abierta = nav.classList.toggle('is-abierta');
    boton.setAttribute('aria-expanded', String(abierta));
    if (abierta) nav.querySelector('a')?.focus();
  });
  nav.addEventListener('click', (e) => e.target.closest('a') && cerrar());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-abierta')) {
      cerrar();
      boton.focus();
    }
  });
}
