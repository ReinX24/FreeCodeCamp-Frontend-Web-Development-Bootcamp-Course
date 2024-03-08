<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form action="index.php" method="POST">
        <label for="country">Enter a country:</label>
        <input type="text" name="country">

        <input type="submit" value="Submit">
    </form>
    
</body>
</html>

<?php

    $capitals = array(
        "USA" => "Washington D.C.",
        "Japan" => "Kyoto",
        "South Korea" => "Seoul",
        "India" => "New Delhi",
    );

    $country = $_POST['country'];
    $capital = $capitals[$country];
    echo "The capital of $country is $capital";

    // $capitals['USA'] = 'Las Vegas';
    // $capitals['China'] = 'Beijing';
    // array_pop($capitals);
    // array_shift($capitals); // removes the first element
    // $keys = array_keys($capitals);
    // $values = array_values($capitals);
    // $capitals = array_flip($capitals);
    // $capitals = array_reverse($capitals);
    // echo count($capitals);

    // foreach ($values as $value) {
    //     echo "{$value} <br>";
    // }

    // foreach ($keys as $key) {
    //     echo "{$key} <br>";
    // }

    // Printing array elements
    // foreach ($capitals as $key => $val) {
    //     echo "$key = $val <br>";
    // }