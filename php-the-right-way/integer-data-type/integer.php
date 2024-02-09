<?php
// Integers
// echo PHP_INT_MAX;
// echo PHP_INT_MIN;

// $x = 5; // decimal numbers
// $x = 0x2A; // hexadecimal number for 42
// $x = 055; // octal numbers, prints 45 since the octal num value of 45 is 55
// $x = 0b11; // 3
// $x = 0b110; // 6
// $x = PHP_INT_MAX + 1;
// $x = (int) true; // 1
// $x = (int) false; // 0
// $x = (int) 5.98; // converts to 5
// $x = (int) '5.9'; // converts to 5 too
// $x = (int) '87dadsdasd'; // converts to 87
// $x = (int) 'test'; // returns 0
// $x = (int) null; // returns 0
$x = 200_000_000_000;
$y = 500;
// var_dump($x);
// var_dump(is_int($x));
// echo $x;

// Checking if error reporting works
$a = 50;
$b = 20;
$result = $a + $b;
echo $result;
