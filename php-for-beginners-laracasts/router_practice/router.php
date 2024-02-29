<?php

$uri = $_SERVER['REQUEST_URI'];

$routes = [
    '/' => 'controllers/index.php',
    '/about' => 'controllers/about.php',
    '/contact' => 'controllers/contact.php',
];

routeToController($uri, $routes);
