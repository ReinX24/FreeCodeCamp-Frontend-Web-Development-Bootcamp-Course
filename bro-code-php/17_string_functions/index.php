<?php

    $username = "Rein Solis";
    $phone = "123-456-7890";
    $friends = ["Rhanniel", "Floricel", "Lex"];

    // echo strtolower($username);
    // echo strtoupper($username);
    // echo trim($username);
    // echo str_pad($username, 20, "/");
    // echo str_replace("-", "/", $phone);
    // echo strrev($username);
    // echo str_shuffle($username);
    // echo strcmp($username, "ReinSolis"); // returns 0 if strings are the same
    // echo strlen($phone);
    // echo strpos($username, " "); // returns the first position of a character
    // echo strpos($phone, "-");
    // echo substr($username, 0, 4);
    // echo substr($username, 5);
    // var_dump(explode(" ", $username)); // returns an array where it splits at first arg
    var_dump(implode("-", $friends)); // joins arrays and adds an arg between each element