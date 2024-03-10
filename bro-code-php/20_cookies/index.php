<?php

    // variable, value, time to expire, filepath
    setcookie("fav_food", "pizza", time() + 86400 * 2, "/"); // expires after 2 days
    setcookie("fav_drink", "coffee", time() + 86400 * 3, "/");
    setcookie("fav_dessert", "ice_cream", time() + 86400 * 4, "/");

    // To delete a cookie, we set the time to - 0
    // setcookie("fav_food", "pizza", time() - 0, "/");
    // setcookie("fav_drink", "coffee", time() - 0, "/");
    // setcookie("fav_dessert", "ice_cream", time() - 0, "/");

    // foreach($_COOKIE as $key => $value) {
    //     echo "{$key} = {$value} <br>";
    // }

    if (isset($_COOKIE["fav_food"])) {
        echo "BUY SOME {$_COOKIE["fav_food"]} !!!";
    } else {
        echo "I don't know your favorite food.";
    }