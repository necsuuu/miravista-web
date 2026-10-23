import { useEffect, useRef, useState } from 'react';
import { costanera, noche, pantalla, cristalesSobre } from '../escena/escenas2d.js';

const MODOS = {
  polarizado: {
    nombre: 'Polarizado',
    titulo: 'Polarizado: menos encandilamiento',
    texto: 'Filtra la luz que rebota en superficies planas como el agua, el asfalto mojado o el capó del auto. Se ve con menos destellos y más contraste. Es para anteojos de sol.',
    etiquetas: ['Cristal de sol común', 'Cristal polarizado'],
  },
  antirreflejo: {
    nombre: 'Antirreflejo',
    titulo: 'Antirreflejo: menos halos de noche',
    texto: 'Es una capa que evita que la luz rebote en las caras del cristal. De noche se notan menos los halos y los reflejos fantasma de faroles y autos, y de frente se te ven mejor los ojos.',
    etiquetas: ['Sin antirreflejo', 'Con antirreflejo'],
  },
  azul: {
    nombre: 'Filtro azul',
    titulo: 'Filtro de luz azul: imagen apenas más cálida',
    texto: 'Bloquea parte de la luz azul de las pantallas, por eso la imagen se ve un poco más cálida. Hoy no hay pruebas firmes de que la luz azul de las pantallas dañe la vista: hay quienes lo eligen por comodidad. Preguntanos si te conviene.',
    etiquetas: ['Sin filtro', 'Con filtro'],
  },
  fotocromatico: {
    nombre: 'Fotocromático',
    titulo: 'Fotocromático: se oscurece con el sol',
    texto: 'Es transparente adentro y se oscurece con los rayos UV del sol, aunque esté nublado. Dentro del auto casi no se oscurece, porque el parabrisas frena la mayor parte de los rayos UV.',
  },
};

export function Comparador() {
  const [modo, setModo] = useState('polarizado');
  const [corte, setCorte] = useState(50);
  const [sol, setSol] = useState(70);
  const [auto, setAuto] = useState(false);
  const lienzo = useRef(null);
  const marco = useRef(null);
  const arrastrando = useRef(false);

  useEffect(() => {
    const dibujar = () => {
      const c = lienzo.current;
      const { clientWidth: w } = marco.current;
      const h = Math.round(w * 0.56);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = w * dpr;
      c.height = h * dpr;
      c.style.height = `${h}px`;
      const g = c.getContext('2d');
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (modo === 'fotocromatico') {
        costanera(g, w, h, { brillo: 0.6 });
        if (auto) {
          g.fillStyle = 'rgba(13,27,36,0.35)';
          g.fillRect(0, 0, w, h * 0.12);
          g.fillRect(0, h * 0.88, w, h * 0.12);
        }
        cristalesSobre(g, w, h, (sol / 100) * (auto ? 0.12 : 1));
        return;
      }

      const x = (corte / 100) * w;
      const pintar = (con) => {
        if (modo === 'polarizado') {
          costanera(g, w, h, { brillo: con ? 0.1 : 1 });
          g.fillStyle = con ? 'rgba(30,40,30,0.28)' : 'rgba(40,40,40,0.22)';
          g.fillRect(0, 0, w, h);
        } else if (modo === 'antirreflejo') {
          noche(g, w, h, { reflejos: !con });
        } else {
          pantalla(g, w, h, { filtro: con });
        }
      };
      pintar(false);
      g.save();
      g.beginPath();
      g.rect(x, 0, w - x, h);
      g.clip();
      pintar(true);
      g.restore();
    };
    dibujar();
    const ro = new ResizeObserver(dibujar);
    ro.observe(marco.current);
    return () => ro.disconnect();
  }, [modo, corte, sol, auto]);

  const moverDesde = (e) => {
    const r = marco.current.getBoundingClientRect();
    setCorte(Math.round(Math.min(95, Math.max(5, ((e.clientX - r.left) / r.width) * 100))));
  };

  const m = MODOS[modo];
  const dividido = modo !== 'fotocromatico';

  return (
    <div className="comparador">
      <div className="comparador__modos" role="group" aria-label="Tipo de cristal">
        {Object.entries(MODOS).map(([clave, d]) => (
          <button
            key={clave}
            type="button"
           
            aria-pressed={modo === clave}
            className={`chip${modo === clave ? ' is-elegido' : ''}`}
            onClick={() => setModo(clave)}
          >
            {d.nombre}
          </button>
        ))}
      </div>

      <div className="comparador__cuerpo">
        <figure className="comparador__visor">
          <div
            className="comparador__marco"
            ref={marco}
            onPointerDown={(e) => {
              if (!dividido) return;
              arrastrando.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              moverDesde(e);
            }}
            onPointerMove={(e) => arrastrando.current && moverDesde(e)}
            onPointerUp={() => (arrastrando.current = false)}
          >
            <canvas ref={lienzo} aria-hidden="true" />
            {dividido && (
              <>
                <span className="comparador__linea" style={{ left: `${corte}%` }} aria-hidden="true" />
                <span className="comparador__etiqueta comparador__etiqueta--izq">{m.etiquetas[0]}</span>
                <span className="comparador__etiqueta comparador__etiqueta--der">{m.etiquetas[1]}</span>
              </>
            )}
          </div>
          <figcaption>Simulación ilustrativa, no es una foto real.</figcaption>
        </figure>

        <div className="comparador__texto">
          <h3>{m.titulo}</h3>
          <p>{m.texto}</p>
          {dividido ? (
            <label className="deslizador">
              <span>Mové la división para comparar</span>
              <input type="range" min="5" max="95" value={corte} onChange={(e) => setCorte(+e.target.value)} />
            </label>
          ) : (
            <>
              <label className="deslizador">
                <span>Cantidad de sol: {sol}%</span>
                <input type="range" min="0" max="100" value={sol} onChange={(e) => setSol(+e.target.value)} />
              </label>
              <label className="interruptor">
                <input type="checkbox" checked={auto} onChange={(e) => setAuto(e.target.checked)} />
                <span>Dentro del auto</span>
              </label>
            </>
          )}
          <p className="comparador__nota">Consultanos qué opciones tenemos para tu receta.</p>
        </div>
      </div>
    </div>
  );
}
