<?php

function e(string $s): string
{
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

function waLink(array $c, ?string $texto = null): string
{
    return 'https://wa.me/' . $c['whatsapp'] . '?text=' . rawurlencode($texto ?? $c['mensaje_wa']);
}

function aMinutos(string $hhmm): int
{
    [$h, $m] = array_map('intval', explode(':', $hhmm));
    return $h * 60 + $m;
}

function estaAbierto(array $horarios, DateTimeImmutable $ahora): bool
{
    $min = (int) $ahora->format('G') * 60 + (int) $ahora->format('i');
    foreach ($horarios[(int) $ahora->format('N')] as [$abre, $cierra]) {
        if ($min >= aMinutos($abre) && $min < aMinutos($cierra)) return true;
    }
    return false;
}

function turnosLegibles(array $turnos): string
{
    if (!$turnos) return 'Cerrado';
    return implode(' y ', array_map(fn($t) => ltrim($t[0], '0') . ' a ' . ltrim($t[1], '0'), $turnos));
}
