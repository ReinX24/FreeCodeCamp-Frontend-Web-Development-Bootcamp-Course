<?php
    // include("ninjas.php");
    // require("ninjas.php");

    // include("ninjass.php"); // warning and runs rest of php script
    // require("ninjass.php"); // fatal error and does not run rest of php script

    include "ninjas.php";
    require "ninjas.php";

    echo "end of php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include ("content.php"); ?>
    <?php include ("content.php"); ?>
    <?php include ("content.php"); ?>
</body>
</html>