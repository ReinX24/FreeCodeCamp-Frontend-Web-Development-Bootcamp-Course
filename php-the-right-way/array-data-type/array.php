<?php

// Arrays
// $programmingLanguages = ['PHP', 'Java', 'Python'];

// echo $programmingLanguages[0];
// echo $programmingLanguages[1];
// echo $programmingLanguages[2];

// echo $programmingLanguages[-1]; // throws an error
// echo $programmingLanguages[3]; // throws an error

// Checking if an element exists on a certain index
// var_dump(isset($programmingLanguages[0])); // returns true
// var_dump(isset($programmingLanguages[3])); // returns false

// $programmingLanguages[1] = 'C++';

// Printing the array
// echo $programmingLanguages[1];
// var_dump($programmingLanguages);

// echo '<pre>';
// print_r($programmingLanguages);
// echo '</pre>';

// echo count($programmingLanguages); // return number of elements in array

// $programmingLanguages[] = 'C++'; // adds element to our array
// array_push($programmingLanguages, 'C++', 'C', 'GO');

// echo '<pre>';
// print_r($programmingLanguages);
// echo '</pre>';

// echo count($programmingLanguages);

// $programmingLanguages = ['PHP', 'Java', 'Python'];

// Associative arrays
$programmingLanguages = [
    'php' => [
        'creator' => 'Rasmus Lerdorf',
        'extension' => '.php',
        'website' => 'www.php.net',
        'isOpenSource' => true,
        'versions' => [
            ['version' => 8, 'releaseDate' => 'Nov 26, 2020'],
            ['version' => 7.4, 'releaseDate' => 'Nov 28, 2019']
        ]
    ],
    'python' => [
        'creator' => 'Guido Van Rossum',
        'extension' => '.py',
        'website' => 'www.python.org',
        'isOpenSource' => true,
        'versions' => [
            ['version' => 3.9, 'releaseDate' => 'Oct 5, 2020'],
            ['version' => 3.8, 'releaseDate' => 'Oct 14, 2019'],
        ]
    ]
];

// echo "<pre>";
// print_r($programmingLanguages);
// echo "</pre>";

// Accessing nested keys
// echo $programmingLanguages['php']['website'];
// echo $programmingLanguages['php']['versions'][0]['releaseDate'];

// echo $programmingLanguages['php']; // prints 8.0
// echo $programmingLanguages['java']; // throws an error

// Adding a new key value pair
// $programmingLanguages['go'] = '1.15';
// echo $programmingLanguages['go'];

// $newLanguage = 'go';
// $programmingLanguages[$newLanguage] = '1.15';
// echo $programmingLanguages[$newLanguage];

// If the keys are the same, the latest key will be the one recorded
// $array = [0 => 'foo', 1 => 'bar', '1' => 'baz'];
// $array = [true => 'a', 1 => 'b', '1' => 'c', 1.8 => 'd', null => 'e'];
// 1 is equal to d since it casts 1.8 to an int, null is an empty string
// print_r($array);

// echo $array['']; // e
// echo $array[null]; // e

// $array = ['a', 'b', 50 => 'c', 'd', 'e'];

// echo array_pop($array); // prints and removes the last element from the array
// echo array_shift($array); // prints and removes first element
// unset($array); // deletes array and its elements
// unset($array[50], $array[1]); // deletes array elements

// echo "<pre>";
// print_r($array); // third index will start at 50 and fourth on 51 and so on
// echo "</pre>";

// Maximum integer index is retained when elements are removed
// $array = [1, 2, 3];
// unset($array[0], $array[1], $array[2]); // removes all elements in the array
// $array[] = 1; // will be stored in index 3
// print_r($array);

// Casting
// $x = 5;
// var_dump((array) $x); // variable value will be the first element in the array

$array = ['a' => 1, 'b' => null];
var_dump(array_key_exists('a', $array)); // true, checks if the key exists
var_dump(isset($array['b'])); // false, checks if the key exists and its value is not null