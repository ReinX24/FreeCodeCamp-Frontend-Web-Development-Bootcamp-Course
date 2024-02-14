<?php

// php.ini & configuration

// error_reporting, error_log, display_errors
// var_dump(ini_get('error_reporting'));
// var_dump(E_ALL & ~E_DEPRECATED & ~E_STRICT);

// var_dump(ini_get('display_errors')); // set to 1
// ini_set('display_errors', 0); // set to 0, does not show errors

// ini_set('error_reporting', E_ALL & ~E_WARNING); // removes warnings, not recommended

// $array = [1];
// echo $array[3];

// Setting max_execution time
// ini_set('max_execution_time', 1); // sets max execution time to 3 seconds
// var_dump(ini_get('max_execution_time'));
// set_time_limit(3);

// sleep(5); // not counted as execution time in linux but us counted in windows
// https://stackoverflow.com/questions/740954/does-sleep-time-count-for-execution-time-limit

// echo 'Hello World!';

var_dump(ini_get('memory_limit'));

// $string = "X";

// for ($i = 0; $i < 1000; $i++) {
//     $string .= $string;
// }

// echo $string;
