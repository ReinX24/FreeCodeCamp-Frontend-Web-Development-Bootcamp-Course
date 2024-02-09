<?php

declare(strict_types=1);
function sum(float $x, float $y)
{
    return $x + $y;
}
// echo sum(2, '3'); // throws an error
$sum = sum(2, 3);
// $sum = sum(2.5, 3.5); // 6.0
var_dump($sum);
