<?php
    // echo "Hello World";
    
    // echo print "Hello World"; // prints 'Hello World' and appends 1
    // print "Hello World";
    // echo "Hello World";
    // print echo "Hello World"; // does not work

    // Concatenating strings
    // echo "Hello", " ", "World";

    // echo 'Joe\'s Invoice';
    // echo "Joe's Invoice";

    // Variables
    // $_123name = 'Rein';
    // echo $_123name;

    // Assigning by value
    // $x = 1;
    // $y = $x;
    // $x = 3;
    // echo $y; // prints 1

    // Assigning by reference
    // $x = 1;
    // $y = &$x;
    // $x = 3; // anytime x changes, y also changes
    // echo $y; // prints 3

    $firstName = 'Rein';
    echo "Hello {$firstName}"; // double quotes to include variable names
    echo "Hello " . $firstName; // using . to concatenate strings