<?php

// Array operators
// $x = ['a', 'b', 'c'];
// $y = ['d', 'e', 'f', 'g', 'h'];

// $x = ['a' => 1, 'b' => 2, 'c' => 3];
// $y = ['a' => 4, 'e' => 5, 'f' => 6, 'g' => 7, 'h' => 8];

// $z = $x + $y; // adds elements in $y if indexes in $x are empty
// print_r($z);

// $x = ['a' => 1, 'b' => 2, 'c' => 3];
// $y = ['a' => 1, 'b' => '2', 'c' => 3];

// $z = $x == $y; // true because the value of key b is converted to an int
// var_dump($z);

// $z = $x === $y; // false because it also checks the data types
// var_dump($z);

// Bitwise operators
// $x = 6; // 110
// $y = 3; // 011

// & operator, returns 1 if both of them are 1
// 110
// 011
// ---
// 010, the binary representation of 2

// var_dump($x & $y); // returns 2

// | operator, returns 1 if either numbers are one
// 110
// 011
// ---
// 111, binary representation of 7

// var_dump($x | $y); // returns 7

// ^ operator, returns 1 if either are 1, if not return 0
// 110
// 011
// ---
// 101, binary representation of 5

// var_dump($x ^ $y); // returns 5

// ~ operator, negates the binary representation of a number
// 110
// ~
// 001
// &
// 011
// ---
// 001, the binary representation of 1

// var_dump(~$x & $y); // returns 1

// Shifting bits
// 110
// << shifting 3 times since $y is equal to 3
// 110000 = 48, multiply 6 by 2 three times

// var_dump($x << $y);

// 110
// >>
// 110 into 0 since it discarded 3 bits

// $y = 1; // makes 110 into 11
// var_dump($x >> $y);


// Error Control Operators (@)
// $x = @file('foo.txt'); // @ sign suppresses operator
