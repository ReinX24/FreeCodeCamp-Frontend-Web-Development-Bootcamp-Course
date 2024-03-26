<?php

include("Weather.php");

// print_r(Weather::$tempConditions);
// echo Weather::celciusToFarenheit(20);
echo Weather::determineTempCondition(50);

// $weatherInstance = new Weather();
// print_r($weatherInstance->tempConditions);
