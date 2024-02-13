<?php

// Static variables
function getValue()
{
    // $value = null; // this will make 'Processing' print 3 times
    static $value = null; // only prints 'Processing' 1 time

    if ($value == null) {
        // This is only ran once because the value of $value is saved rather 
        // than being resetted for each function call
        $value = someVeryExpensiveFunction();
    }

    return $value;
}

function someVeryExpensiveFunction()
{
    sleep(2);

    echo 'Processing'; // this is only printed one time

    return 10;
}

echo getValue() . '<br>';
echo getValue() . '<br>';
echo getValue() . '<br>';

// Variable scopes

// $x = 5; // global scope

// function foo()
// {
// global $x; // imports the variables from the global scope to the local 
// scope of this function

// $x = 10; // modifies the original variable

// echo $x;

// x is stored in an associative array called GLOBALS
//     $GLOBALS['x'] = 10;
//     echo $GLOBALS['x'];
// }

// foo();
// echo $x;

// include('script1.php');

// echo '<br>';
// echo $x;
