<?php

// Null

// null constant
// $x = null;

// var_dump($x);
// var_dump(is_null($x));
// var_dump($x == null);

// echo $x; // prints nothing

// $x = 123;
// var_dump($x);
// unset($x); // destroys the specified variable
// var_dump($x);

$x = null;

// var_dump((string) $x); // empty string
// var_dump((int) $x); // 0
// var_dump((bool) $x); // false
var_dump((array) $x); // empty array