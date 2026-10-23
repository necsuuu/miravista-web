<?php $dias = [1 => 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']; ?>
<section class="seccion seccion--visitanos" id="visitanos" aria-labelledby="visitanos-titulo">
  <div class="contenedor visitanos">
    <div class="visitanos__texto">
      <span class="titular__regla" aria-hidden="true"></span>
      <h2 id="visitanos-titulo">Te esperamos en <?= e($c['direccion']) ?></h2>
      <p>Traé tu receta y probate los armazones en persona. Si querés saber si tenemos un modelo antes de venir, escribinos.</p>
      <div class="visitanos__acciones">
        <a class="boton boton--wa" href="<?= e(waLink($c)) ?>" target="_blank" rel="noopener"><?php include __DIR__ . '/icono-wa.php'; ?>Escribinos por WhatsApp</a>
        <a class="boton boton--linea" href="<?= e($c['maps']) ?>" target="_blank" rel="noopener">Cómo llegar</a>
      </div>
      <dl class="datos">
        <div><dt>Dirección</dt><dd><?= e($c['direccion']) ?>, <?= e($c['ciudad']) ?></dd></div>
        <div><dt>Teléfono</dt><dd><a href="tel:<?= e(preg_replace('/[^+\d]/', '', $c['telefono'])) ?>"><?= e($c['telefono']) ?></a></dd></div>
      </dl>
    </div>
    <table class="horarios">
      <caption>Horarios</caption>
      <tbody>
        <?php foreach ($dias as $n => $nombre): ?>
          <tr<?= $n === $hoy ? ' class="hoy" aria-current="date"' : '' ?>>
            <th scope="row"><?= $nombre ?><?= $n === $hoy ? ' <span>hoy</span>' : '' ?></th>
            <td><?= turnosLegibles($c['horarios'][$n]) ?></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</section>
