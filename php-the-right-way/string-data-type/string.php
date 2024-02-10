<?php

// Strings

$firstName = 'Rein';
$lastName = 'Solis';
// $fullName = "$firstName $lastName";
$fullName = $firstName . ' ' . $lastName;

// echo $fullName . '<br>';
// echo $fullName[1];
// echo $fullName[0];
// echo $fullName[-1];
// $fullName[-2] = 'I';
// $fullName[20] = 'I';

// var_dump($fullName);

$x = 1;
$y = 2;

// Heredoc
$text = <<<TEXT
 Hello World
<div>
    <p>Hello</p>
    <p>World</p>
</div>
Line 1 $x
Line 2 $y
Line 3
TEXT;

var_dump($text); // tabs are counted in the string length
echo nl2br($text); // nl2br adds linebreaks at the end of the lines

// Nowdow
$text = <<<'TEXT'
Line 1 $x
Line 2 $y
Line 3 ' "
TEXT;

echo '<br>';
echo nl2br($text); // does not print variable values
