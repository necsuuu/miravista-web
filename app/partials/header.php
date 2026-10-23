<header class="cabecera">
  <div class="contenedor cabecera__fila">
    <a class="marca" href="#probador" aria-label="<?= e($c['nombre_largo']) ?>, ir al inicio">
      <span class="marca__lentes" aria-hidden="true"></span><?= e($c['nombre']) ?>
    </a>
    <button class="cabecera__menu" type="button" aria-expanded="false" aria-controls="nav-principal" data-menu-toggle>
      <span class="cabecera__menu-icono" aria-hidden="true"></span>Menú
    </button>
    <nav class="nav" id="nav-principal" aria-label="Secciones">
      <a href="#probador">Probador 3D</a>
      <a href="#estilos">Estilos</a>
      <a href="#tu-cara">Según tu cara</a>
      <a href="#cristales">Cristales</a>
      <a href="#visitanos">Visitanos</a>
      <a class="boton boton--wa boton--chico" href="<?= e(waLink($c)) ?>" target="_blank" rel="noopener"><?php include __DIR__ . '/icono-wa.php'; ?>Escribinos</a>
    </nav>
  </div>
</header>
