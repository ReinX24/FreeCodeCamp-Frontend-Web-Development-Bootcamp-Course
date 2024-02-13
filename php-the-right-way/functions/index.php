<?php

// Functions

declare(strict_types=1);
// Adding type hinting to functions
// function foo(): int
// {
//     return 1;
// }

// Function that returns either a null or int value
// function foo(): ?int
// {
//     return null;
// }

// Function that can return an int, float, or array
// function foo(): int|float|array
// {
//     // return 5;
//     // return 5.5;
//     return [5, 6];
// }

// Another way for a function to return multiple types
function foo(): mixed
{
    // return 5;
    // return 5.5;
    return [5, 6];
}

var_dump(foo());

// function foo()
// {
//     return 'Hello World';
// }

// echo foo();
// var_dump(foo());
