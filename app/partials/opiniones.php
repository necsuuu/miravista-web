<section class="seccion seccion--opiniones" id="opiniones" aria-labelledby="opiniones-titulo">
  <div class="contenedor opiniones">
    <div class="opiniones__nota">
      <h2 id="opiniones-titulo">Lo que cuentan nuestros clientes</h2>
      <p class="opiniones__puntaje"><span class="opiniones__numero"><?= number_format($c['rating'], 1, ',', '') ?></span><span>de 5, con <?= (int) $c['resenas'] ?> opiniones</span></p>
      <a class="enlace" href="<?= e($c['maps']) ?>" target="_blank" rel="noopener">Ver en el mapa</a>
    </div>
    <ul class="opiniones__lista">
      <?php foreach ($c['opiniones'] as $texto): ?>
        <li class="cita"><blockquote><p><?= e($texto) ?></p></blockquote><span>Cliente de la óptica</span></li>
      <?php endforeach; ?>
    </ul>
  </div>
</section>
