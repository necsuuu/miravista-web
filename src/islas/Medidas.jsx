import { useState } from 'react';
import { FORMAS } from '../datos/opciones.js';
import { contorno, aPathSvg, limites } from '../escena/contornos.js';

const PARTES = {
  lente: 'Ancho de cada cristal, en milímetros.',
  puente: 'Distancia entre los dos cristales, donde apoya la nariz.',
  patilla: 'Largo de la patilla, desde la bisagra hasta la punta.',
};

// Ficha técnica: las tres medidas que trae grabadas cada armazón, con el plano frontal que las señala.
export function Medidas({ forma }) {
  const [activa, setActiva] = useState('lente');
  const { lente, puente, patilla } = FORMAS[forma].medidas;
  const esc = 2;
  const pts = contorno(forma, lente);
  const lim = limites(pts);
  const ancho = (lim.maxX - lim.minX) * 50 * esc;
  const alto = (lim.maxY - lim.minY) * 50 * esc;
  const mitadPuente = puente * esc / 2;
  const centro = 170;
  const cxIzq = centro - mitadPuente - ancho / 2;
  const cxDer = centro + mitadPuente + ancho / 2;
  const cy = 30 + (lim.maxY * 50 * esc);
  const s = 50 * esc;
  const yCota = cy + (-lim.minY) * s + 22;

  return (
    <div className="medidas">
      <p className="medidas__titulo">Así se leen las medidas</p>
      <p className="medidas__codigo" aria-label={`Medidas de referencia: cristal ${lente}, puente ${puente}, patilla ${patilla} milímetros`}>
        {['lente', 'puente', 'patilla'].map((p, i) => (
          <button
            key={p}
            type="button"
            className={`medidas__num${activa === p ? ' is-activa' : ''}`}
            aria-pressed={activa === p}
            onClick={() => setActiva(p)}
            onMouseEnter={() => setActiva(p)}
            onFocus={() => setActiva(p)}
          >
            {{ lente, puente, patilla }[p]}
            {i === 0 && <span className="medidas__sep" aria-hidden="true">□</span>}
          </button>
        ))}
      </p>
      <svg className="medidas__plano" viewBox="0 0 340 200" role="img" aria-label={`Plano frontal: ${PARTES[activa]}`}>
        <path className="medidas__contorno" d={aPathSvg(pts, s, cxIzq - ((lim.maxX + lim.minX) / 2) * s, cy)} />
        <path className="medidas__contorno" d={aPathSvg(pts, s, cxDer + ((lim.maxX + lim.minX) / 2) * s, cy, true)} />
        <g className={`medidas__cota${activa === 'lente' ? ' is-activa' : ''}`}>
          <line x1={cxIzq - ancho / 2} x2={cxIzq + ancho / 2} y1={yCota} y2={yCota} />
          <line x1={cxIzq - ancho / 2} x2={cxIzq - ancho / 2} y1={yCota - 6} y2={yCota + 6} />
          <line x1={cxIzq + ancho / 2} x2={cxIzq + ancho / 2} y1={yCota - 6} y2={yCota + 6} />
          <text x={cxIzq} y={yCota + 20} textAnchor="middle">{lente} mm</text>
        </g>
        <g className={`medidas__cota${activa === 'puente' ? ' is-activa' : ''}`}>
          <line x1={centro - mitadPuente} x2={centro + mitadPuente} y1={20} y2={20} />
          <line x1={centro - mitadPuente} x2={centro - mitadPuente} y1={14} y2={26} />
          <line x1={centro + mitadPuente} x2={centro + mitadPuente} y1={14} y2={26} />
          <text x={centro} y={12} textAnchor="middle">{puente} mm</text>
        </g>
        <g className={`medidas__cota${activa === 'patilla' ? ' is-activa' : ''}`}>
          <line x1={cxDer + ancho / 2 + 6} x2={336} y1={cy - alto * 0.2} y2={cy - alto * 0.2} />
          <text x={334} y={cy - alto * 0.2 - 8} textAnchor="end">{patilla} mm</text>
        </g>
      </svg>
      <p className="medidas__ayuda" aria-live="polite">{PARTES[activa]} Son medidas típicas de esta forma: cada armazón trae las suyas grabadas en la patilla.</p>
    </div>
  );
}
