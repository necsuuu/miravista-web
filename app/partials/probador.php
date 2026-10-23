<section class="seccion-probador" id="probador" aria-labelledby="probador-titulo">
  <div class="contenedor">
    <div class="seccion-probador__intro">
      <p class="estado <?= $abierto ? 'estado--abierto' : 'estado--cerrado' ?>" data-estado data-horarios='<?= e(json_encode($c['horarios'])) ?>' role="status">
        <span class="estado__punto" aria-hidden="true"></span>
        <span data-estado-texto><?= $abierto ? 'Abierto ahora' : 'Cerrado ahora' ?></span>
        <span class="estado__lugar">· <?= e($c['direccion']) ?></span>
      </p>
      <h1 id="probador-titulo">Elegí tus anteojos girándolos en&nbsp;3D</h1>
      <p class="seccion-probador__bajada">Probá formas, colores de armazón y cristales antes de venir a la óptica. Cuando te guste uno, nos mandás tu elección por WhatsApp.</p>
    </div>

    <div id="isla-probador" data-whatsapp="<?= e($c['whatsapp']) ?>" data-foto="<?= e($fotos) ?>/clasico-carey-tresCuartos.webp">
      <div class="probador probador--estatico">
        <img src="<?= e($fotos) ?>/clasico-carey-tresCuartos.webp" alt="Anteojos redondos de carey" width="900" height="640">
        <p>Activá JavaScript para usar el probador 3D, o escribinos y te mostramos los modelos.</p>
      </div>
    </div>
  </div>
</section>
