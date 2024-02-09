<?php

// Data Types & Type Casting

# Scalar Types
# bool - true / false
$completed = true;
# int - 1, 2, 3, 0, -5 (no decimal)
$score = 75;
# float - 1.5, 0.1, 0.005, -15.8
$price = 0.99;
# string "Rein", 'Hello World'
$greeting = 'Hello Rein';

// echo $completed . '<br>'; // prints 1 if true, blank if false
// echo $score . '<br>';
// echo $price . '<br>';
// echo $greeting . '<br>';

// Getting types of variables
// echo gettype($completed) . '<br>'; // boolean
// echo gettype($score) . '<br>'; // integer
// echo gettype($price) . '<br>'; // double
// echo gettype($greeting) . '<br>'; // string

// var_dump($completed); // prints type and value
// var_dump($score);
// var_dump($price);
// var_dump($greeting);

# Compound Types
# array
$companies = [1, 2, 3, 0.5, -4.2, 'A', 'b', true];
// echo $companies; // prints 'array'
// print_r($companies); // prints array indexes and corresponding elements

# object
# callable
# iterable

# Special Types
# resource
# null

// function sum($x, $y)
// {
//     var_dump($x, $y); // prints data types and values
//     echo '<br>';
//     return $x + $y;
// }

// echo sum(2, 3); // 5
// $sum = sum(2, '3'); // converts 3 into an integer
// $sum = sum(2.5, '3'); // 5.5
// echo $sum . '<br>';
// var_dump($sum); // int

// Type conversion
$x = (int)'5'; // converts string into an integer
var_dump($x);
