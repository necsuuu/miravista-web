import { useEffect, useRef, useState } from 'react';
import { Visor, hayWebGL } from '../escena/visor.js';
import { FORMAS, ARMAZONES, CRISTALES, INICIAL, textoConsulta } from '../datos/opciones.js';
import { waUrl } from '../util.js';
import { Medidas } from './Medidas.jsx';
import { IconoWA } from './IconoWA.jsx';

function Grupo({ titulo, nombre, opciones, valor, alCambiar, muestra }) {
  return (
    <fieldset className="opciones">
      <legend>{titulo}</legend>
      <div className="opciones__lista">
        {Object.entries(opciones).map(([clave, o]) => (
          <label key={clave} className={`opcion${valor === clave ? ' is-elegida' : ''}`}>
            <input type="radio" name={nombre} value={clave} checked={valor === clave} onChange={() => alCambiar(clave)} />
            {muestra && <span className={`opcion__muestra opcion__muestra--${nombre}-${clave}`} aria-hidden="true" />}
            <span>{o.nombre}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function Probador({ whatsapp, foto }) {
  const [config, setConfig] = useState(INICIAL);
  const [estado, setEstado] = useState('cargando');
  const caja = useRef(null);
  const visor = useRef(null);

  useEffect(() => {
    if (!hayWebGL()) {
      setEstado('error');
      return undefined;
    }
    try {
      visor.current = new Visor(caja.current, { alPrimerCuadro: () => setEstado('listo') });
      visor.current.configurar(config);
    } catch {
      setEstado('error');
    }
    return () => visor.current?.destruir();
  }, []);

  useEffect(() => {
    visor.current?.configurar(config);
  }, [config]);

  useEffect(() => {
    const cargar = (e) => setConfig((c) => ({ ...c, ...e.detail }));
    window.addEventListener('gafas:probar', cargar);
    return () => window.removeEventListener('gafas:probar', cargar);
  }, []);

  const teclas = (e) => {
    const giros = { ArrowLeft: [-0.25, 0], ArrowRight: [0.25, 0], ArrowUp: [0, -0.12], ArrowDown: [0, 0.12] };
    if (!giros[e.key] || !visor.current) return;
    e.preventDefault();
    visor.current.girar(...giros[e.key]);
  };

  const cambiar = (campo) => (valor) => setConfig((c) => ({ ...c, [campo]: valor }));
  const resumen = `${FORMAS[config.forma].nombre}, armazón ${ARMAZONES[config.armazon].nombre.toLowerCase()}, cristal ${CRISTALES[config.cristal].nombre.toLowerCase()}`;

  return (
    <div className="probador">
      <div className="probador__escenario">
        <div
          className="probador__lienzo"
          ref={caja}
          tabIndex={estado === 'listo' ? 0 : -1}
          role="img"
          aria-label={`Anteojos en 3D: ${resumen}. Arrastrá o usá las flechas del teclado para girarlos.`}
          onKeyDown={teclas}
        />
        {estado === 'cargando' && <p className="probador__aviso" role="status">Preparando el probador 3D…</p>}
        {estado === 'error' && (
          <div className="probador__aviso probador__aviso--error" role="status">
            <img src={foto} alt="Anteojos redondos de carey" width="450" height="320" />
            <p>Tu navegador no puede mostrar el modelo 3D. Igual podés elegir las opciones y consultarnos por WhatsApp.</p>
          </div>
        )}
        {estado === 'listo' && (
          <div className="probador__vistas" role="group" aria-label="Cambiar la vista">
            <button type="button" onClick={() => visor.current.vista('frente')}>Frente</button>
            <button type="button" onClick={() => visor.current.vista('tresCuartos')}>3/4</button>
            <button type="button" onClick={() => visor.current.vista('perfil')}>Perfil</button>
          </div>
        )}
        <p className="probador__pista" aria-hidden="true">Arrastrá para girar</p>
      </div>

      <div className="probador__panel">
        <Grupo titulo="Forma" nombre="forma" opciones={FORMAS} valor={config.forma} alCambiar={cambiar('forma')} />
        <Grupo titulo="Armazón" nombre="armazon" opciones={ARMAZONES} valor={config.armazon} alCambiar={cambiar('armazon')} muestra />
        <Grupo titulo="Cristal" nombre="cristal" opciones={CRISTALES} valor={config.cristal} alCambiar={cambiar('cristal')} muestra />
        <Medidas forma={config.forma} />
        <a className="boton boton--wa probador__consultar" href={waUrl(whatsapp, textoConsulta(config))} target="_blank" rel="noopener">
          <IconoWA />
          Consultar por estos anteojos
        </a>
        <p className="probador__nota">Son modelos de referencia. En el local te mostramos los armazones reales que se parecen a tu elección.</p>
      </div>
    </div>
  );
}
