<?php

$name = "Mario";

// function sayHello() {
//     global $name;
//     $name = "Yoshi"; // changes variable outside the function
//     echo "Hello $name";
// }

// sayHello();
// echo $name;

function sayBye(String &$name) {
    $name = "Wario";
    echo "Bye {$name}";
}

sayBye($name);
echo $name;