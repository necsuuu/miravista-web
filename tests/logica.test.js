import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estaAbierto } from '../src/estado.js';
import { textoConsulta, ESTILOS, FORMAS, ARMAZONES, CRISTALES, CARAS } from '../src/datos/opciones.js';
import { contorno, desplazar, limites } from '../src/escena/contornos.js';

const horarios = {
  1: [['08:00', '13:00'], ['17:30', '21:00']], 2: [['08:00', '13:00'], ['17:30', '21:00']],
  3: [['08:00', '13:00'], ['17:30', '21:00']], 4: [['08:00', '13:00'], ['17:30', '21:00']],
  5: [['08:00', '13:00'], ['17:30', '21:00']], 6: [['09:00', '13:00']], 7: [],
};
const f = (dia, hh, mm = 0) => new Date(2026, 9, 11 + dia, hh, mm); // 12/10/2026 es lunes

test('horario cortado de lunes a viernes', () => {
  assert.equal(estaAbierto(horarios, f(1, 7, 59)), false);
  assert.equal(estaAbierto(horarios, f(1, 8, 0)), true);
  assert.equal(estaAbierto(horarios, f(1, 15, 0)), false);
  assert.equal(estaAbierto(horarios, f(1, 17, 30)), true);
  assert.equal(estaAbierto(horarios, f(1, 21, 0)), false);
});

test('sábado a la mañana y domingo cerrado', () => {
  assert.equal(estaAbierto(horarios, f(6, 10, 0)), true);
  assert.equal(estaAbierto(horarios, f(6, 18, 0)), false);
  assert.equal(estaAbierto(horarios, f(7, 10, 0)), false);
});

test('el mensaje de WhatsApp describe la elección', () => {
  const t = textoConsulta({ forma: 'aviador', armazon: 'dorado', cristal: 'verde' });
  assert.match(t, /de sol con cristal verde/);
  assert.match(t, /forma aviador/);
  assert.match(t, /armazón dorado/);
  assert.match(textoConsulta({ forma: 'redondo', armazon: 'carey', cristal: 'receta' }), /para receta/);
});

test('cada estilo y cada guía apuntan a opciones que existen', () => {
  for (const e of ESTILOS) {
    assert.ok(FORMAS[e.forma] && ARMAZONES[e.armazon] && CRISTALES[e.cristal], e.id);
  }
  for (const c of Object.values(CARAS)) c.formas.forEach((fo) => assert.ok(FORMAS[fo], fo));
});

test('el aro queda por fuera del cristal en todas las formas', () => {
  for (const [clave, { medidas }] of Object.entries(FORMAS)) {
    const pts = contorno(clave, medidas.lente);
    const a = limites(pts), b = limites(desplazar(pts, 0.05));
    assert.ok(b.maxX > a.maxX && b.minX < a.minX && b.maxY > a.maxY && b.minY < a.minY, clave);
  }
});
