<?php

declare(strict_types=1);

function formatDollarAmount(float $amount): string
{
    // Format a float number to have a dollar sign and be rounded off by 2
    $isNegative = $amount < 0;

    return ($isNegative ? '-' : '') . '$' . number_format(abs($amount));
}
