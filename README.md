# Óptica Miravista · sitio web

Página de demostración para una óptica ficticia (Óptica Miravista). Todos los datos del local son inventados.
PHP arma la página; React y three.js dan vida a las partes interactivas; los estilos están en SCSS; Node compila todo.

## Partes interactivas (src/islas)

- `Probador.jsx`: anteojos en 3D que se giran con el mouse, el dedo o las flechas. Forma, color de armazón y cristal; el botón de WhatsApp manda la elección.
- `Medidas.jsx`: explica el código 48□21 145 de la patilla con un plano que marca cada medida.
- `Estilos.jsx`: estilos de referencia con dos fotos (3/4 y frente) que se abren en el probador.
- `GuiaCara.jsx`: según la forma de cara, recomienda armazones y los dibuja sobre la silueta.
- `Comparador.jsx`: compara cristales (polarizado, antirreflejo, filtro azul, fotocromático) con una división deslizable.

El modelo 3D se arma por código en `src/escena` (no usa archivos 3D externos). Las fotos del catálogo salen de ese mismo modelo con `npm run fotos`.

## Comandos

```bash
npm install
npm run build      # fuentes + SCSS + JS
npm run serve      # http://localhost:8000
npm test           # horarios, mensaje de WhatsApp y geometría
npm run fotos      # regenera assets/img/estilos (usa Playwright)
npm run paquete    # deja en dist/htdocs lo que va al hosting
```

## Datos

Todo lo del local está en `app/config.php` (horarios, teléfono, reseñas). Las opciones del probador y la guía están en `src/datos/opciones.js`.

## Pendiente con el local

- Fotos reales de sus armazones para reemplazar los modelos de referencia.
- Logo: hoy la marca es el nombre escrito con dos lentes dibujados.
- Qué cristales y tratamientos trabajan, para ajustar la sección de cristales.
