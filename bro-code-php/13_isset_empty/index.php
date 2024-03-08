<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form action="index.php" method="POST">
        <label for="username">Username: </label>
        <input type="text" name="username">

        <br>
        
        <label for="password">Password: </label>
        <input type="password" name="password">

        <br>

        <input type="submit" name="login" value="Log in">
    </form>

</body>
</html>

<?php 

    if (isset($_POST['login'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        if (empty($username)) {
            echo "Username is missing";
        } elseif (empty($password)) {
            echo "Password is missing";
        } else {
            echo "Hello $username";
        }
    }

    foreach($_POST as $key => $val) {
        echo "$key = $val <br>";
    }

    // isset() = returns TRUE if a variable is declared and not null
    // empty() = returns TRUE if a variable is not declared, false, null, ""
