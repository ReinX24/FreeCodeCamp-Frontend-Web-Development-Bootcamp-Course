<?php

    $conn = mysqli_connect("localhost", "rein", "test1234", "rein_pizza");

    if (!$conn) {
        echo "Connection error: " . mysqli_connect_error();
    }