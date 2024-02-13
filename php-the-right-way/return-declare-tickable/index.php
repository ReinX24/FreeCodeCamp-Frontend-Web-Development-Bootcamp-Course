<?php

// declare - ticks
// function onTick()
// {
//     echo 'Tick<br>';
// }

// register_tick_function('onTick');

// declare(ticks=1); // how many ticks for the onTick func to be called

// $i = 0; // tick
// $length = 10; // tick

// while ($i < $length) { // tick
//     echo $i++ . '<br>';
// }

// $x = 3; // this is a tick
// $y = 5; // this is another tick
// $z = $x + $y; // 2 ticks, multiple and assign

// declare - strict_types
declare(strict_types=1); // checks if variable types being used are correct

function sum(int $x, int $y)
{
    $z = $x + $y;
    return $z;
}

// echo sum(5, 10);
// echo sum('5', 10); // throws an error

// function sum(int $x, int $y)
// {
//     $z = $x + $y;
//     return $z;
// }
// $x = sum(5, 10);
// echo $x;

// return; // terminates script
// echo '<br> Hello World';
