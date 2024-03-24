<?php

    require('config/db_connect.php');

    $errors = ["email" => "", "title" => "", "ingredients" => ""];

    $email = "";
    $title = "";
    $ingredients = "";

    if(isset($_POST["submit"])) {

        if(empty($_POST["email"])) {
            $errors["email"] = "An email is required.";
        } else {
            $email = $_POST["email"];

            // Checks if the input is a valid email.
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors["email"] = "Email must be a valid email address.";
            }
        }

        if(empty($_POST["title"])) {
            $errors["title"] = "A title is required.";
        } else {
            $title = $_POST["title"];

            // Checks if the input only contains letters and spaces.
            if(!preg_match("/^[a-zA-Z\s]+$/", $title)) {
                $errors["title"] = "Title must be letters and spaces only.";
            }
        }

        if(empty($_POST["ingredients"])) {
            $errors["ingredients"] = "At least one ingredient is required.";
        } else {
            $ingredients = $_POST["ingredients"];

            // Checks if the input is a comma serparated string.
            if(!preg_match("/^([a-zA-Z\s]+)(,\s*[a-zA-Z\s]*)*$/", $ingredients)) {
                $errors["ingredients"] = "Ingredients must be a comma separated list.";
            }
        }

        if(array_filter($errors)) {

        } else {
            $email = mysqli_real_escape_string($conn, $_POST["email"]);
            $title = mysqli_real_escape_string($conn, $_POST["title"]);
            $ingredients = mysqli_real_escape_string($conn, $_POST["ingredients"]);

            $sql = "INSERT INTO pizzas(title,email,ingredients) VALUES('$title','$email','$ingredients')";
            
            if(mysqli_query($conn, $sql)) {
                header("Location: index.php");
            } else {
                echo "Query error: " . mysqli_error($conn);
            }
        }

    } // End of POST check

?>

<?php require('templates/header.php'); ?>

<div class="container col-8 mt-4">
    <form action="<?= $_SERVER['PHP_SELF']; ?>" method="POST">
        <label for="email" class="form-label">Email:</label>
        <input type="email" name="email" class="form-control mb-3" value="<?= htmlspecialchars($email); ?>">

        <p class="form-text text-danger"><?= $errors["email"]; ?></p>

        <label for="title" class="form-label">Title:</label>
        <input type="text" name="title" class="form-control mb-3" value="<?= htmlspecialchars($title); ?>">

        <p class="form-text text-danger"><?= $errors["title"]; ?></p>

        <label for="ingredients" class="form-label">Ingredients (comma separated):</label>
        <input type="text" name="ingredients" class="form-control mb-3" value="<?= htmlspecialchars($ingredients); ?>">

        <p class="form-text text-danger"><?= $errors["ingredients"]; ?></p>

        <div class="d-flex justify-content-center">
            <input type="submit" name="submit" value="Submit" class="btn btn-primary">
        </div>
    </form>
</div>

<?php require('templates/footer.php'); ?>