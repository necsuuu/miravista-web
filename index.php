<?php
declare(strict_types=1);

$c = require __DIR__ . '/app/config.php';
require __DIR__ . '/app/helpers.php';

$ahora   = new DateTimeImmutable('now', new DateTimeZone($c['zona_horaria']));
$abierto = estaAbierto($c['horarios'], $ahora);
$hoy     = (int) $ahora->format('N');
$ver     = fn(string $f) => @filemtime(__DIR__ . '/' . $f) ?: 1;
$fotos   = 'assets/img/estilos';
?>
<!doctype html>
<html lang="es-AR" class="sin-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= e($c['nombre_largo']) ?> · Anteojos de receta y de sol en <?= e($c['ciudad']) ?></title>
  <meta name="description" content="Óptica en <?= e($c['direccion']) ?>, <?= e($c['ciudad']) ?>. Probá formas, colores y cristales en 3D y consultanos por WhatsApp.">
  <meta name="theme-color" content="#0D1B24">
  <link rel="preload" href="assets/fonts/unbounded.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="assets/css/main.css?v=<?= $ver('assets/css/main.css') ?>">
</head>
<body>
  <a class="saltar" href="#probador">Ir al probador 3D</a>
  <?php include __DIR__ . '/app/partials/header.php'; ?>
  <main>
    <?php include __DIR__ . '/app/partials/probador.php'; ?>
    <?php include __DIR__ . '/app/partials/estilos.php'; ?>
    <?php include __DIR__ . '/app/partials/cara.php'; ?>
    <?php include __DIR__ . '/app/partials/cristales.php'; ?>
    <?php include __DIR__ . '/app/partials/opiniones.php'; ?>
    <?php include __DIR__ . '/app/partials/visitanos.php'; ?>
  </main>
  <?php include __DIR__ . '/app/partials/footer.php'; ?>
  <a class="wa-flotante" href="<?= e(waLink($c)) ?>" target="_blank" rel="noopener" aria-label="Escribir a <?= e($c['nombre_largo']) ?> por WhatsApp">
    <?php include __DIR__ . '/app/partials/icono-wa.php'; ?><span>WhatsApp</span>
  </a>
  <script src="assets/js/app.js?v=<?= $ver('assets/js/app.js') ?>" defer></script>
</body>
</html>
