<?php

declare(strict_types=1);

function hypotenuse(float $a, float $b) {
    $c = sqrt($a ** 2 + $b ** 2);
    return $c;
}

// echo hypotenuse(3 ,4);
echo hypotenuse(4, 5);

function isEven(int $numArg) {
    return $numArg % 2 == 0;
}

// echo isEven(10);

function happyBirthday(String $firstName, int $age) {
    echo "Happy Birthday dear {$firstName}! <br>";
    echo "Happy Birthday to you! <br>";
    echo "Happy Birthday dear {$firstName}! <br>";
    echo "You are {$age} years old! <br><br>";
}

// happyBirthday(firstName:"Spongebob", age:30);
// happyBirthday(firstName:"Patrick", age:35);
// happyBirthday(firstName:"Squidward", age:45);