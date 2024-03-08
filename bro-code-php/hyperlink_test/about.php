<?php
echo $_SERVER['REQUEST_URI'];

if ($_SERVER['REQUEST_URI'] == '/bro-code-php/hyperlink_test/about') {
    require 'about.php';
}
?>

<h1>About</h1>
