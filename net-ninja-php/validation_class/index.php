<?php

require("UserValidator.php");

if (isset($_POST["submit"])) {
    // Validate entries
    $validation = new UserValidator($_POST);
    $errors = $validation->validateForm();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation Class</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="new-user">
        <h2>Create new user</h2>
        <form action="<?= $_SERVER["PHP_SELF"]; ?>" method="POST">
            <label for="username">Username:</label>
            <input type="text" name="username" value="<?= htmlspecialchars($_POST["username"]) ?? ""; ?>">

            <div class="error">
                <?= $errors["username"] ?? ''; ?>
            </div>

            <label for="email">Email:</label>
            <input type="text" name="email" value="<?= htmlspecialchars($_POST["email"]) ?? ""; ?>">

            <div class="error">
                <?= $errors["email"] ?? ''; ?>
            </div>

            <input type="submit" value="Submit" name="submit">
        </form>
    </div>
</body>

</html>