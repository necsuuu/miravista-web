<?php
// Datos ficticios de demostración: nombre, dirección, teléfono y reseñas son inventados.

return [
    'nombre'    => 'Miravista',
    'nombre_largo' => 'Óptica Miravista',
    'direccion' => 'Av. Siempreviva 742',
    'ciudad'    => 'Villa Ejemplo',
    'telefono'  => '+54 11 5555-0142',
    'whatsapp'  => '5491155550142',
    'mensaje_wa' => '¡Hola Miravista! Quería hacer una consulta.',
    'maps'      => 'https://www.google.com/maps',
    'zona_horaria' => 'America/Argentina/Cordoba',

    // Día ISO (1 = lunes) => lista de turnos [abre, cierra]. Domingo cerrado.
    'horarios' => [
        1 => [['08:00', '13:00'], ['17:30', '21:00']],
        2 => [['08:00', '13:00'], ['17:30', '21:00']],
        3 => [['08:00', '13:00'], ['17:30', '21:00']],
        4 => [['08:00', '13:00'], ['17:30', '21:00']],
        5 => [['08:00', '13:00'], ['17:30', '21:00']],
        6 => [['09:00', '13:00']],
        7 => [],
    ],

    'rating'  => 4.8,
    'resenas' => 120,

    // Reseñas inventadas para la demo.
    'opiniones' => [
        'Me ayudaron a elegir un armazón que me queda perfecto. Los cristales estuvieron listos en pocos días.',
        'Muchos modelos para elegir y precios razonables. Me atendieron con mucha paciencia.',
        'Les llevé la receta de toda la familia y resolvieron todo en una sola visita. Muy recomendable.',
        'Buena atención, local cómodo y anteojos de buena calidad. Vuelvo seguro.',
    ],
];
