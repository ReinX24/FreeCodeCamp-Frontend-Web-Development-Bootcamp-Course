<?php

include("User.php");
include("AdminUser.php");

$userOne = new User('mario', 'mario@thenetninja.co.uk');
$userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
$userThree = new AdminUser("yoshi", "yoshi@thenetninja.co.uk", 5);

$userFour = clone $userOne;
echo $userFour->getName();

// unset($userOne); // runs the destruct method in User class

// echo $userOne->getRole() . "<br>";
// echo $userThree->getRole() . "<br>";

// echo $userOne->message() . "<br>";
// echo $userTwo->message() . "<br>";
// echo $userThree->message() . "<br>";

// echo $userThree->getName() . "<br>";
// echo $userThree->getEmail() . "<br>";
// echo $userThree->level . "<br>";
