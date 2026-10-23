import { useState } from 'react';
import { CARAS, FORMAS } from '../datos/opciones.js';
import { contorno, aPathSvg, limites } from '../escena/contornos.js';
import { probarEnProbador } from '../util.js';

// Siluetas simples de cada forma de cara, en un lienzo de 200 x 240.
const SILUETAS = {
  ovalada: 'M100 22 C150 22 172 70 172 120 C172 178 140 222 100 222 C60 222 28 178 28 120 C28 70 50 22 100 22 Z',
  redonda: 'M100 30 C152 30 184 70 184 124 C184 182 148 216 100 216 C52 216 16 182 16 124 C16 70 48 30 100 30 Z',
  cuadrada: 'M44 28 H156 C172 28 178 40 178 56 V176 C178 202 160 216 136 218 H64 C40 216 22 202 22 176 V56 C22 40 28 28 44 28 Z',
  corazon: 'M100 24 C160 24 182 54 180 100 C178 150 142 196 100 224 C58 196 22 150 20 100 C18 54 40 24 100 24 Z',
  alargada: 'M100 10 C142 10 160 56 160 120 C160 190 134 232 100 232 C66 232 40 190 40 120 C40 56 58 10 100 10 Z',
};

function Anteojos({ forma }) {
  const { lente, puente } = FORMAS[forma].medidas;
  const pts = contorno(forma, lente);
  const lim = limites(pts);
  const s = 50 * 1.05;
  const medio = ((lim.maxX + lim.minX) / 2) * s;
  const desplaz = (puente * 1.05) / 2 + ((lim.maxX - lim.minX) / 2) * s;
  return (
    <g className="cara__anteojos">
      <path d={aPathSvg(pts, s, 100 - desplaz - medio, 112)} />
      <path d={aPathSvg(pts, s, 100 + desplaz + medio, 112, true)} />
    </g>
  );
}

export function GuiaCara() {
  const [cara, setCara] = useState('ovalada');
  const [forma, setForma] = useState('rectangular');
  const datos = CARAS[cara];

  return (
    <div className="guia">
      <fieldset className="guia__caras">
        <legend>¿Qué forma tiene tu cara?</legend>
        {Object.entries(CARAS).map(([clave, c]) => (
          <label key={clave} className={`guia__cara${cara === clave ? ' is-elegida' : ''}`}>
            <input
              type="radio"
              name="cara"
              value={clave}
              checked={cara === clave}
              onChange={() => {
                setCara(clave);
                setForma(c.formas[0]);
              }}
            />
            <svg viewBox="0 0 200 240" aria-hidden="true"><path d={SILUETAS[clave]} /></svg>
            <span>{c.nombre}</span>
          </label>
        ))}
      </fieldset>

      <div className="guia__resultado">
        <svg className="cara" viewBox="0 0 200 240" role="img" aria-label={`Cara ${datos.nombre.toLowerCase()} con anteojos ${FORMAS[forma].nombre.toLowerCase()}`}>
          <path className="cara__silueta" d={SILUETAS[cara]} />
          <circle className="cara__ojo" cx="70" cy="112" r="5" />
          <circle className="cara__ojo" cx="130" cy="112" r="5" />
          <path className="cara__boca" d="M84 176 Q100 186 116 176" />
          <Anteojos forma={forma} />
        </svg>

        <div className="guia__texto">
          <h3>Cara {datos.nombre.toLowerCase()}</h3>
          <p>{datos.consejo}</p>
          <div className="guia__formas" role="group" aria-label="Probar forma de armazón">
            {Object.entries(FORMAS).map(([clave, f]) => {
              const recomendada = datos.formas.includes(clave);
              return (
                <button
                  key={clave}
                  type="button"
                  aria-pressed={forma === clave}
                  className={`chip${forma === clave ? ' is-elegido' : ''}${recomendada ? ' chip--recomendado' : ''}`}
                  onClick={() => setForma(clave)}
                >
                  {f.nombre}
                  {recomendada && <span className="chip__marca">Recomendado</span>}
                </button>
              );
            })}
          </div>
          <button type="button" className="boton boton--linea" onClick={() => probarEnProbador({ forma })}>
            Ver el {FORMAS[forma].nombre.toLowerCase()} en 3D
          </button>
        </div>
      </div>
    </div>
  );
}
