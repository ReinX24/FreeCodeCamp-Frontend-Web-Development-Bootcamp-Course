<?php

// Functions

declare(strict_types=1);

// Named arguments
function foo(int $x, int $y): int
{
    var_dump($x, $y);
    if ($x % $y == 0) {
        return $x / $y;
    }

    return $x;
}

// Passing in an associative array, uses the key as the named arguments
// $arr = ['y' => 2, 'x' => 1];
// Positional arguments
$arr = [2, 1];

echo foo(...$arr);

// $x = 6;
// $y = 3;

// echo foo(y: $y, x: $x); // using named arguments

// setcookie(name: 'foo', value: '', httponly: false); // using named arguments

// Variadic functions
// function sum(int|float $x, int|float $y, int|float ...$numbers): int|float
// {
//     // $sum = 0;
//     // foreach ($numbers as $number) {
//     //     $sum += $number;
//     // }
//     // return $sum;

//     return $x + $y + array_sum($numbers);
// }

// $a = 6.0;
// $b = 7;
// $numbers = [50, 100, 25.90, 8, 9];

// Splat, ellipsis, or unpacking operator
// echo sum($a, $b, ...$numbers) . '<br>';

// Pass by value in functions
// function foo(int|float &$x, int|float $y)
// {
//     if ($x % 2 == 0) {
//         $x /= 2;
//     }
//     return $x * $y;
// }

// $a = 6.0;
// $b = 7;

// echo foo($a, $b) . '<br>'; // 21
// var_dump($a, $b); // 6, 7 if passed by value, 3, 7 if passed by referece

// function foo(int|float $x, int|float $y = 10) // parameters
// {
//     return $x * $y;
// }

// echo foo(5); // the two numbers passed in are arguments