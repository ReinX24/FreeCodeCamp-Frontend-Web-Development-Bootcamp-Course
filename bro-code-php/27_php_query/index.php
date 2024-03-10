<?php
    include("database.php");

    $username = "Patrick";
    $password = "rock3";
    $hash = password_hash($password, PASSWORD_DEFAULT);

    $sql = "SELECT * FROM users";
    
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) { // checks if a row has been found
        while($row = mysqli_fetch_assoc($result)) {
            echo $row["id"] . "<br>";
            echo $row["user"] . "<br>";
            echo $row["reg_date"] . "<br>";
        }
    } else {
        // If not results are found
        echo "No user found";
    }

    mysqli_close($conn);