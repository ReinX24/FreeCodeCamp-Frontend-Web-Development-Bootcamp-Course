<?php

    $capitals = array(
        "USA" => "Washington D.C.",
        "Japan" => "Kyoto",
        "South Korea" => "Seoul",
        "India" => "New Delhi",
    );

    // $capitals['USA'] = 'Las Vegas';
    // $capitals['China'] = 'Beijing';
    // array_pop($capitals);
    // array_shift($capitals); // removes the first element
    $keys = array_keys($capitals);

    foreach ($keys as $key) {
        echo "{$key} <br>";
    }

    // Printing array elements
    // foreach ($capitals as $key => $val) {
    //     echo "$key = $val <br>";
    // }