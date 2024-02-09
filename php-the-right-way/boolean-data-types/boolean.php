<?php

// Booleans
$isComplete = 'false'; // evaluates to true

// var_dump($isComplete);
var_dump(is_bool($isComplete)); // checks if the variable is a boolean

if ($isComplete) {
    // do something
    echo "Is complete!";
} else {
    // do something else
    // echo "Not complete!";
}
