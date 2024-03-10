<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="POST">
        <label for="username">Username:</label><br>
        <input type="text" name="username"><br>

        <label for="age">Age:</label><br>
        <input type="text" name="age"><br>

        <label for="email">Email:</label><br>
        <input type="text" name="email"><br>

        <input type="submit" name="login" value="Login"><br>
    </form>
</body>
</html>

<?php

    if (isset($_POST["login"])) {
        // Validating inputs
        // Returns an empty string if the input is not valid
        $age = filter_input(INPUT_POST, "age", FILTER_VALIDATE_INT);

        $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);

        if (empty($email)) {
            echo "That email wasn't valid.";
        } else {
            echo "Your email is: $email";
        }

        // if (empty($age)) {
        //     echo "That number wasn't valid.";
        // } else {
        //     echo "You are $age years old.";
        // }

        // Sanitizing inputs
        // Filtering special characters that can run so that they could not execute
        // $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);

        // Removes any characters that are not numbers
        // $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT);

        // $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);

        // echo "Hello {$username}, you are {$age} years old.<br>";
        // echo "Your email is {$email}";
    }