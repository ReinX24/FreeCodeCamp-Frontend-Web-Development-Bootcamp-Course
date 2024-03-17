<?php

    // Sessions
    if (isset($_POST["submit"])) {
        
        session_start();

        $_SESSION["name"] = $_POST["name"];

        header("Location: index.php");

    }

    // Superglobals 

    // $_GET["name"], $_POST["name"]

    // echo $_SERVER["SERVER_NAME"] . '<br>';
    // echo $_SERVER["REQUEST_METHOD"] . "<br>";
    // echo $_SERVER["SCRIPT_FILENAME"] . "<br>";
    // echo $_SERVER["PHP_SELF"] . "<br>";

    // $score = 20;
    // echo $score > 40 ? "High score!" : "Low score :(";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sandbox</title>
</head>
<body>

    <form action="<?= $_SERVER["PHP_SELF"]; ?>" method="POST">
        <input type="text" name="name">
        <input type="submit" name="submit" value="Submit">
    </form>

    <!-- <p><?= $score > 40 ? "High score!" : "Low score :("; ?></p> -->
    
</body>
</html>