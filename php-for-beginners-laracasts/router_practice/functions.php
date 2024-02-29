<?php

function displayDelete($value)
{
    // Dumps information about passed in value and terminates script.
    echo '<pre>';
    var_dump($value);
    echo '</pre>';

    die(); // terminates the php script
}

function urlIs($value)
{
    // Checks if the current page URI is the same with the passed in value.
    return $_SERVER['REQUEST_URI'] === $value;
}

function abort($code = 404)
{
    // Show an error page and terminate the php script
    http_response_code(404);

    require "views/$code.php";

    die();
}

function routeToController($uri, $routes)
{
    // Checks if the uri exists within the routes
    if (array_key_exists($uri, $routes)) {
        require $routes[$uri];
    } else {
        abort();
    }
}
