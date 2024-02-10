<?php

// $x = 13.5;
// $x = 13.5e3; // 13500
// $x = 13.5e-3; // 0.0135
// $x = 13_000.5e3; // 13_000_500
// $x = 13_000.5;
// $x = floor((0.1 + 0.7) * 10); // returns 7 because of lossy computation in binary
// $x = ceil((0.1 + 0.7) * 10); // 8
// $x = ceil((0.1 + 0.2) * 10); // returns 4 because of lossy computation

// Because of these inaccuracies, it is not recommeded to compare float values

// var_dump($x);
// echo $x;

// $x = 0.23;
// $y = 1 - 0.77;

// var_dump($x, $y);

// Not the same values, prints no
// if ($x == $y) {
//     echo 'Yes';
// } else {
//     echo 'No';
// }

// echo NAN;
// echo log(-1); // returns NAN
// echo INF;
// echo PHP_FLOAT_MAX * 2; // returns INF

// $x = PHP_FLOAT_MAX * 2;

// var_dump(is_finite($x)); // returns false because x equals to INF or infinity
// var_dump(is_nan($x)); // returns false because INF is still considered a number
// var_dump(is_nan(log(-1))); // returns true because log(-1) returns NAN
// var_dump($x);

// echo PHP_FLOAT_MAX . "<br>";
// echo PHP_FLOAT_MIN . "<br>";

// Casting
$x = 5;
$y = 'Rein';
$z = '15.5a';

// var_dump((float) $x);
// var_dump(floatval($x));

// var_dump((float) $y); // returns 0 because string cannot be converted
var_dump((float) $z); // returns 15.5