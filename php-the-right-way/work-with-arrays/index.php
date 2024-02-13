<?php

require 'helpers.php';

// array_chunk(array $array, int $length, bool $preserveKey = false): array

// $items = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5];

// prettyPrintArray(array_chunk($items, 2, true));

// array_combine(array $keys, array $values): array

// $array1 = ['a', 'b', 'c', 'd']; // throws an error since we have more keys than
// values
// $array1 = ['a', 'b', 'c'];
// $array2 = [5, 10, 15];

// prettyPrintArray(array_combine($array1, $array2));

// array_filter(array $array, callable|null $callback = null, int $mode = 0): array

// $array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Only keep the even numbers in the array
// $even = array_filter($array, fn ($number, $key) => $number % 2 == 0, ARRAY_FILTER_USE_BOTH);
// $even = array_values($even); // resets the indexes of the array
// prettyPrintArray($even);

// $odd = array_filter($array, function ($eachNumber) {
//     return $eachNumber % 2 != 0;
// });
// prettyPrintArray($odd);

// array_keys(array $keys, mixed $search_value, bool $strict = false): array
// $array = ['a' => 5, 'b' => 10, 'c' => 15, 'd' => 5, 'e' => 10];

// $keys = array_keys($array);
// $keys = array_keys($array, 10); // returns keys and that have values of 10
// $keys = array_keys($array, 15); // returns keys and that have values of 15
// $keys = array_keys($array, '15', true); // does not return keys, strict comparison is on

// prettyPrintArray($keys);

// array_map(callable|null $callback, array $array, array ...$arrays): array
// $array = [1, 2, 3, 4, 5, 6];

// $array = array_map(fn ($number) => $number * 3, $array);

// prettyPrintArray($array);

// $array1 = ['a' => 1, 'b' => 2, 'c' => 3];
// $array2 = ['d' => 4, 'e' => 5, 'f' => 6];

// $array = array_map(fn ($number1, $number2) => $number1 * $number2, $array1, $array2);

// prettyPrintArray($array);

// array_merge(array ...$arrays): array

// $array1 = [1, 2, 3];
// $array2 = [4, 5, 6];
// $array3 = [7, 8, 9];

// $merged = array_merge($array1, $array2, $array3);

// prettyPrintArray($merged);

// array_reduce(array $array, callable $callback, mixed $initialValue = null): mixed

// $invoiceItems = [
//     ['price' => 9.99, 'qty' => 3, 'desc' => 'Item 1'],
//     ['price' => 29.99, 'qty' => 1, 'desc' => 'Item 2'],
//     ['price' => 149, 'qty' => 1, 'desc' => 'Item 3'],
//     ['price' => 14.99, 'qty' => 2, 'desc' => 'Item 4'],
//     ['price' => 4.99, 'qty' => 4, 'desc' => 'Item 5'],
// ];

// $total = array_reduce(
//     $invoiceItems,
//     fn ($sum, $item) => $sum + $item['qty'] * $item['price'],
//     500 // initial value of $sum
// );

// echo $total;

// array_search(mixed $needle, array $haystack, bool $strict = false): int|string|false

// $array = ['a', 'b', 'c', 'D', 'E', 'ab', 'bc', 'cd', 'b', 'd'];

// $key = array_search('b', $array);
// $key = array_search('D', $array);

// var_dump($key);
// if ($key == false) {
//     echo 'Letter not found';
// } else {
//     echo 'Letter found at index ' . $key;
// }

// if (in_array('Z', $array)) {
//     echo 'Letter found';
// } else {
//     echo 'Letter not found';
// }

// Finding differences in arrays
// $array1 = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5];
// $array2 = ['f' => 4, 'g' => 5, 'i' => 6, 'j' => 7, 'k' => 8];
// $array2 = ['d' => 4, 'g' => 5, 'i' => 6, 'j' => 7, 'k' => 8];
// $array3 = ['l' => 3, 'm' => 9, 'n' => 10];

// Return values that are present in $array1 but are not present in other arrays
// prettyPrintArray(array_diff($array1, $array2, $array3));

// Return key value pairs that are in $array1 but not in other arrays
// prettyPrintArray(array_diff_assoc($array1, $array2, $array3));

// Return key value pairs where the keys are only present in $array1
// prettyPrintArray(array_diff_key($array1, $array2, $array3));

// Sorting arrays
// $array = ['d' => 3, 'b' => 1, 'c' => 4, 'a' => 2];

// prettyPrintArray($array);

// asort($array); // sorts by values
// ksort($array); // sorts by keys

// Sorts the arrays but removes their keys
// usort($array, fn ($a, $b) => $a <=> $b); // sorts by lowest value to highest
// usort($array, fn ($a, $b) => $b <=> $a); // sorts by highest value to lowest

/* 
The spaceship operator (<=>):
    The spaceship operator returns 1 if the first variable is greater than the
    second one, returns -1 if the second variable is greater than the first
    one, and returns 0 if they are equal.
*/

// prettyPrintArray($array);

// Array destructuring
$array = [1, 2, 3, 4];

// [$a, $b, $c, $d] = $array; // each array element is assigned to a variable
// [$a,, $c,] = $array; // no b and d variables

// echo $a . ',  ' . $b . ', ' . $c . ', ' . $d . '<br>';

[1 => $a, 0 => $b, 2 => $c, 3 => $d] = $array; // assigns values based on their keys
// $a will have the value at index 1 in $array and $b will have the value at
// index 0.

echo $a . ',  ' . $b . ', ' . $c . ', ' . $d . '<br>';
