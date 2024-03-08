<?php
echo $_SERVER['REQUEST_URI'];

if ($_SERVER['REQUEST_URI'] == '/bro-code-php/hyperlink_test/about') {
    require 'about.php';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hyperlink Test</title>
</head>
<body>

<ul>
    <li><a href="index.php">Index</a></li>
    <li><a href="/bro-code-php/hyperlink_test/about.php">About</a></li>
</ul>
    
</body>
</html>