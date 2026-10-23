// Opciones del probador. Las medidas son típicas de cada forma: cada armazón real trae las suyas grabadas en la patilla.
export const FORMAS = {
  redondo: { nombre: 'Redondo', medidas: { lente: 48, puente: 21, patilla: 145 } },
  rectangular: { nombre: 'Rectangular', medidas: { lente: 54, puente: 18, patilla: 145 } },
  aviador: { nombre: 'Aviador', medidas: { lente: 58, puente: 14, patilla: 140 } },
  gato: { nombre: 'Ojo de gato', medidas: { lente: 53, puente: 17, patilla: 140 } },
};

export const ARMAZONES = {
  negro: { nombre: 'Negro', color: '#08090a', metal: false, rugosidad: 0.35 },
  carey: { nombre: 'Carey', color: '#6b3a1c', metal: false, rugosidad: 0.25, carey: true },
  dorado: { nombre: 'Dorado', color: '#c9a35a', metal: true, rugosidad: 0.22 },
  cristal: { nombre: 'Transparente', color: '#dfe7ea', metal: false, rugosidad: 0.08, translucido: true },
  oliva: { nombre: 'Verde oliva', color: '#4d5a3a', metal: false, rugosidad: 0.4 },
};

export const CRISTALES = {
  receta: { nombre: 'Transparente', uso: 'receta', color: '#e8f4f6', opacidad: 0.14, espejo: false },
  gris: { nombre: 'Sol gris', uso: 'sol', color: '#2b2f33', opacidad: 0.82, espejo: false },
  verde: { nombre: 'Sol verde', uso: 'sol', color: '#2f4a33', opacidad: 0.8, espejo: false },
  marron: { nombre: 'Sol marrón', uso: 'sol', color: '#5a3a22', opacidad: 0.75, espejo: false },
  espejado: { nombre: 'Espejado azul', uso: 'sol', color: '#2a6fb0', opacidad: 0.9, espejo: true },
};

export const INICIAL = { forma: 'redondo', armazon: 'carey', cristal: 'receta' };

export function textoConsulta({ forma, armazon, cristal }) {
  const c = CRISTALES[cristal];
  const tipo = c.uso === 'sol' ? `de sol con cristal ${c.nombre.replace('Sol ', '').toLowerCase()}` : 'para receta';
  return `¡Hola Miravista! Vi su página y me gustaron unos anteojos ${tipo}, forma ${FORMAS[forma].nombre.toLowerCase()} y armazón ${ARMAZONES[armazon].nombre.toLowerCase()}. ¿Tienen algo parecido?`;
}

export const ESTILOS = [
  { id: 'clasico-carey', titulo: 'Redondo carey', uso: 'receta', forma: 'redondo', armazon: 'carey', cristal: 'receta' },
  { id: 'ejecutivo', titulo: 'Rectangular negro', uso: 'receta', forma: 'rectangular', armazon: 'negro', cristal: 'receta' },
  { id: 'gato-cristal', titulo: 'Ojo de gato transparente', uso: 'receta', forma: 'gato', armazon: 'cristal', cristal: 'receta' },
  { id: 'aviador-verde', titulo: 'Aviador dorado, cristal verde', uso: 'sol', forma: 'aviador', armazon: 'dorado', cristal: 'verde' },
  { id: 'redondo-espejo', titulo: 'Redondo dorado, espejado', uso: 'sol', forma: 'redondo', armazon: 'dorado', cristal: 'espejado' },
  { id: 'gato-sol', titulo: 'Ojo de gato carey, cristal marrón', uso: 'sol', forma: 'gato', armazon: 'carey', cristal: 'marron' },
  { id: 'rect-oliva', titulo: 'Rectangular oliva, cristal gris', uso: 'sol', forma: 'rectangular', armazon: 'oliva', cristal: 'gris' },
  { id: 'redondo-negro', titulo: 'Redondo negro', uso: 'receta', forma: 'redondo', armazon: 'negro', cristal: 'receta' },
];

// Guía resumida de All About Vision (en español): qué armazón equilibra cada forma de cara.
export const CARAS = {
  ovalada: {
    nombre: 'Ovalada',
    consejo: 'Tiene proporciones equilibradas, así que le quedan bien casi todas las formas. Buscá un armazón igual o un poco más ancho que la parte más ancha de tu cara.',
    formas: ['rectangular', 'redondo', 'aviador', 'gato'],
  },
  redonda: {
    nombre: 'Redonda',
    consejo: 'Los armazones angulosos, más anchos que altos, estilizan la cara y suman líneas rectas a las curvas.',
    formas: ['rectangular', 'gato'],
  },
  cuadrada: {
    nombre: 'Cuadrada',
    consejo: 'Con mandíbula marcada, los armazones curvos o redondeados suavizan los ángulos.',
    formas: ['redondo', 'aviador'],
  },
  corazon: {
    nombre: 'Corazón',
    consejo: 'Frente ancha y mentón angosto: van bien los armazones más anchos abajo, como el aviador, o los livianos y transparentes.',
    formas: ['aviador', 'redondo'],
  },
  alargada: {
    nombre: 'Alargada',
    consejo: 'Los armazones más altos que angostos acortan visualmente la cara, y los detalles en los costados le dan ancho.',
    formas: ['redondo', 'gato', 'aviador'],
  },
};
