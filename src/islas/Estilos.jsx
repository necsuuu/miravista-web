import { useState } from 'react';
import { ESTILOS } from '../datos/opciones.js';
import { probarEnProbador } from '../util.js';

const FILTROS = { todos: 'Todos', receta: 'Para receta', sol: 'De sol' };

function Tarjeta({ e, base }) {
  const [falla, setFalla] = useState(false);
  return (
    <li className="estilo">
      <div className="estilo__foto">
        {falla ? (
          <p className="estilo__falla">No se pudo cargar la imagen.</p>
        ) : (
          <>
            <img src={`${base}/${e.id}-tresCuartos.webp`} alt={`${e.titulo}, vista de tres cuartos`} width="900" height="640" loading="lazy" onError={() => setFalla(true)} />
            <img className="estilo__frente" src={`${base}/${e.id}-frente.webp`} alt="" width="900" height="640" loading="lazy" aria-hidden="true" />
          </>
        )}
      </div>
      <div className="estilo__pie">
        <h3>{e.titulo}</h3>
        <button type="button" className="boton boton--chico boton--linea" onClick={() => probarEnProbador({ forma: e.forma, armazon: e.armazon, cristal: e.cristal })}>
          Probar en 3D
        </button>
      </div>
    </li>
  );
}

export function Estilos({ base }) {
  const [filtro, setFiltro] = useState('todos');
  const lista = ESTILOS.filter((e) => filtro === 'todos' || e.uso === filtro);

  return (
    <div className="estilos">
      <div className="estilos__filtros" role="group" aria-label="Filtrar estilos">
        {Object.entries(FILTROS).map(([clave, nombre]) => (
          <button key={clave} type="button" aria-pressed={filtro === clave} className={`chip${filtro === clave ? ' is-elegido' : ''}`} onClick={() => setFiltro(clave)}>
            {nombre}
          </button>
        ))}
      </div>
      {lista.length ? (
        <ul className="estilos__grilla">{lista.map((e) => <Tarjeta key={e.id} e={e} base={base} />)}</ul>
      ) : (
        <p className="estilos__vacio">No hay estilos para este filtro.</p>
      )}
    </div>
  );
}
