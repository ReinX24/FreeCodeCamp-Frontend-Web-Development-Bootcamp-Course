<?php

// OPERATORS

// Arithmetic operators
// $x = 10.5;
// $x = '10';
// $y = 2.9;

// var_dump($x + $y);
// var_dump($x - $y);
// var_dump($x / $y);
// var_dump($x * $y);
// var_dump($x ** $y);
// var_dump(+$x); // + converts string into an integer
// var_dump(fdiv($x, $y)); // returns INF if the divisor is 0
// var_dump($x % $y);
// var_dump(fmod($x, $y)); // finds the remainder of float values

// String operators
// $x = 'Hello';
// $x = $x . ' World'; // concatenating strings
// $x .= ' There'; // another way of concatenating strings

// echo $x;

// Comparison operators
$x = 5;
$y = '5';

// var_dump($x == $y); // does type conversion
// var_dump($x === $y); // checks if data types are the same

// var_dump($x != $y);
// var_dump($x <> $y); // same with !=
// var_dump($x !== $y);

// var_dump($x > $y);
// var_dump($x < $y);
// var_dump($x >= $y);
// var_dump($x <= $y);
// var_dump($x <=> $y); // return 0 if equal, return -1 if x is less than y, and 1 if x is greater than y

// var_dump(0 == 'hello'); // converts the number into a string
// $x = 'Hello World';
// $y = strpos($x, 'H');

// Ternary operator
// $result = $y === false ? 'H Not Found' : 'H Found at index ' . $y;
// echo $result;

// if ($y === false) {
//     echo 'H Not Found';
// } else {
//     echo 'H Found at index ' . $y;
// }

// Null coalescing operator
$x = null;
$y = $x ?? 'hello'; // returns 'hello' if $x is null
var_dump($y); // prints 'hello'