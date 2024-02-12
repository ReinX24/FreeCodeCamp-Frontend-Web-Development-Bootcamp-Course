<?php

// Loops

// while
$i = 0;

// while ($i <= 15) {
// while ($i > 10) {
//     break 2; // breaks this loop and the loop above it
// }

// if ($i >= 15) {
//     break;
// }

// Skip if i is an even number
// if ($i % 2 == 0) {
//     $i++;
//     continue; // skips current iteration and all code below
// }

// echo $i++ . ' ';
// }

// while ($i <= 15) {
//     echo $i++ . ' ';
// }

// do - while
// $i = 25;
// do {
//     echo $i . ' '; // prints 25 only
// } while ($i <= 15);

// for
// $text = 'Hello World';
// for ($i = 0; $i < strlen($text); $i++) {
//     echo $text[$i] . '<br>';
// }

// $text = ['a', 'b', 'c', 'd', 'e'];
// for ($i = 0; $i < count($text); $i++) {
//     echo $text[$i] . '<br>';
// }

// Assigning a length variable in our for loop, this helps with performance
// because it only calls the count function one time rather than for every
// iteration of the loop.
// for ($i = 0, $length = count($text); $i < $length; $i++) {
//     echo $text[$i] . '<br>';
// }

// for each
// $programmingLanguages = ['php', 'java', 'c++', 'go', 'rust'];
// foreach ($programmingLanguages as $key => $language) {
//     echo $key . ': ' . $language . '<br>';
// }
// unset($language); // destroys the variable so that it can't be used anymore
// echo $language;

$user = [
    'name' => 'Rein',
    'email' =>  'rein@gmail.com',
    'skills' => ['python', 'php', 'javascript'],
];

// foreach ($user as $key => $value) :
//     echo $key . ': ';

// Checks if the current element is an array
// if (is_array($value)) {
//     foreach ($value as $skill) {
//         echo $skill . ' - ';
//     }
//     $value = implode(', ', $value);
// } else {
//     echo $value;
// }

// echo '<br>';

// echo $key . ': ' . json_encode($value) . '<br>';
// echo $key . ': ' . $value . '<br>';
// endforeach;

// Alternative syntax for a for loop
for ($i = 0; $i < 10; $i++) :
    echo $i . '<br>';
endfor;
