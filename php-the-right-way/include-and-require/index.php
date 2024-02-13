<?php

// include 'file.php'; // throws a warning if file not found does not terminate
// require 'file.php'; // terminates program if file is not found
// require 'file.php';

// Prints the file.php echo once, unlike require which prints the echo twice
// if we require it two times
// require_once 'file.php';
// require_once 'file.php';

// $x++;
// echo $x . '<br>';

// require 'file.php'; // overwrites the value of $x
// echo $x . '<br>';

// echo 'Hello World';

ob_start();
include 'partials/nav.php';
$nav = ob_get_clean(); // getting and storing the contents of our nav.php file

$nav = str_replace('About', 'About Us', $nav);

// var_dump($nav); // prints data type and renders nav bar
echo $nav; // prints and renders the nav bar
