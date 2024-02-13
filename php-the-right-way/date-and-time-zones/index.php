<?php

// Date and Time
$currentTime = time();

// echo $currentTime . '<br>';

// Time in 5 days
// echo $currentTime + 5 * 24 * 60 * 60 . '<br>';

// Subtract by 1 day
// echo $currentTime - 60 * 60 * 24 . '<br>';

// Using date time format
// echo date('m/d/Y g:iA') . '<br>';
// echo date('m/d/Y g:iA', $currentTime + 5 * 24 * 60 * 60) . '<br>';
// echo date('m/d/Y g:iA', $currentTime - 60 * 60 * 24) . '<br>';

// echo date_default_timezone_get() . '<br>';
// date_default_timezone_set('UTC');

// echo date('m/d/Y g:iA') . '<br>';
// echo date('m/d/Y g:iA', $currentTime + 5 * 24 * 60 * 60) . '<br>';
// echo date('m/d/Y g:iA', $currentTime - 60 * 60 * 24) . '<br>';
// echo date_default_timezone_get() . '<br>';

// echo date('m/d/Y g:iA', mktime(0, 0, 0, 4, 10, null)); // 4th month, 10th day
// echo date('m/d/Y g:iA', strtotime('2021-01-18 07:00:00'));
// echo date('m/d/Y g:iA', strtotime('tomorrow'));
// echo date('m/d/Y g:iA', strtotime('first day of february'));
// echo date('m/d/Y g:iA', strtotime('last day of february'));
// echo date('m/d/Y g:iA', strtotime('last day of february 2020'));
// echo date('m/d/Y g:iA', strtotime('second friday of January'));

$date = date('m/d/Y g:iA', strtotime('second friday of January'));

echo '<pre>';
// print_r(date_parse($date));
print_r(date_parse_from_format('m/d/Y g:iA', $date));
echo '</pre>';
