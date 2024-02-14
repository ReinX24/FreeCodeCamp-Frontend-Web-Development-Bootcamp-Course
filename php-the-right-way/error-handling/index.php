<?php

// Error Handling

// error_reporting(E_ALL & ~E_WARNING); // reports everything except warnings

// trigger_error('Example error', E_USER_ERROR);
// trigger_error('Example error', E_USER_WARNING); // runs rest of the script
// trigger_error('Example error', E_WARNING); // throws a fatal error

// echo 1;

// var_dump(ini_get('display_errors'));

function errorHandler(int $type, string $msg, ?string $file = null, ?int $line = null)
{
    echo $type . ': ' . $msg . ' in ' . $file . ' on line ' . $line;

    exit; // stops the script
}

error_reporting(E_ALL & ~E_WARNING);

set_error_handler('errorHandler', E_ALL); // overrides default error handling

echo $x;
