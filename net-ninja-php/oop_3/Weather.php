<?php

class Weather
{
    public static $tempConditions = ['cold', 'mild', 'warm'];

    public static function celciusToFarenheit($c)
    {
        return $c * 9 / 5 + 32;
    }

    public static function determineTempCondition($f)
    {
        if ($f < 40) {
            // Getting static variables in the same class
            return self::$tempConditions[0]; // cold
        } else if ($f < 70) {
            return self::$tempConditions[1]; // mild
        } else {
            return self::$tempConditions[2]; // warm
        }
    }
}
