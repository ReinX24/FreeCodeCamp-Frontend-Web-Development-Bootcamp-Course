<?php

// variable, anonymous, and arrow functions

// variable functions
// function sum(int|float ...$numbers): int|float
// {
//     return array_sum($numbers);
// }

// $x = 'sum';

// if (is_callable($x)) {
//     echo $x(1, 2, 3, 4);
// } else {
//     echo 'Not Callable';
// }

// Anonymous functions
// $x = 1;
// $sum = function (int|float ...$numbers) use (&$x): int|float {
//     $x = 15;
//     echo $x . '<br>';
//     return array_sum($numbers);
// };

// echo $sum(1, 2, 3, 4);
// echo '<br>' . $x;

// Callback functions
// $array = [1, 2, 3, 4];

// function foo($element)
// {
//     return $element * 2;
// }

// $array2 = array_map('foo', $array);

// echo '<pre>';
// print_r($array);
// print_r($array2);
// echo '</pre>';

// function foo($element)
// {
//     return $element * 2;
// }
// $sum = function (callable $callback, int|float ...$numbers): int|float {
//     return $callback(array_sum($numbers));
// };

// // echo $sum('foo', 1, 2, 3, 4);
// echo $sum(function ($element) {
//     return $element * 2;
// }, 1, 2, 3, 4);

// Arrow functions
$array = [1, 2, 3, 4];
$y = 5;

// Can only have single line expressions
$array2 = array_map(fn ($number) => $number * $number * ++$y, $array);

echo '<pre>';
print_r($array2);
echo '</pre>';

echo $y;
