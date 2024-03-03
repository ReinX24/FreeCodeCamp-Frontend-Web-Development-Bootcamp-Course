<?php

$name = "Rein";
$food = "pizza";
$quantity = 4;
$price = 5.99;
$total = null;

// echo "Hello {$name}<br>";
// echo "Your pizza is \${$price}<br>";

echo "You have ordered {$quantity} x {$food}s<br>";
$total = $quantity * $price;
echo "Your total is: {$total}";
