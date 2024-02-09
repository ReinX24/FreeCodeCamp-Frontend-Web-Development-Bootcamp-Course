<?php

// Normal variables
// $firstName = 'Rein';
// $firstName = 'Reinne';
// echo $firstName;

// Constants
// define('STATUS_PAID', 'paid');
// define('STATUS_PAID', 'not paid'); // gives an error

// echo defined('STATUS_PAID'); // checks if the constant is defined, prints 1 if true
// echo defined('STATUS_VOID'); // returns nothing

// echo STATUS_PAID; // returns 'paid'

// Can only create const variables on compile time, cannot be created by if statements
// const STATUS_PAID = 'paid';
// echo STATUS_PAID;

// if (true) {
//     define('STATUS_PAID', 9); // works
// const STATUS_PAID = 9; // does not work
// }

// $paid = 'PAID';
// define('STATUS_' . $paid, $paid);
// define('STATUS_' . $paid, 4);
// echo STATUS_PAID; // prints 'PAID' event if its showing an error

// echo PHP_VERSION; // built-in php constants
// echo __LINE__; // magic constants, prints line number
// echo __FILE__; // prints path of php file

// Variable Variables
$foo = 'bar';
$$foo = 'baz'; // $bar = 'baz', 
// Takes the value of the variable of foo and make that value point to another value

// echo $foo, $bar; // prints 'barbaz' even though we did not create a $bar variable
// echo $foo, $$foo; // prints 'barbaz' too
// echo "$foo, {$$foo}";
// echo "$foo, ${$foo}";
