<?php

    if (isset($_POST["submit"])) {
        // Starting a session
        session_start();

        if (empty($_POST["name"])) {
            $_SESSION["name"] = "Guest";
        } else {
            $_SESSION["name"] = $_POST["name"];
        }

        // Setting cookie
        setcookie("gender", $_POST["gender"], time() + 86400);

        header("Location: index.php");
    }

?>

<?php require('templates/header.php'); ?>

<div class="container mt-4 col-4">
    <form action="<?= $_SERVER["PHP_SELF"]; ?>" method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name" class="form-control mb-3">

        <label for="gender">Gender:</label>
        <select name="gender" class="form-control mb-3">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>

        <div class="d-flex justify-content-center">
            <input type="submit" name="submit" value="Submit" class="btn btn-primary">
        </div>
    </form>
</div>

<?php require('templates/footer.php'); ?>