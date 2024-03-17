<?php

    include("config/db_connect.php");

    // For storing errors 
    $errors = ["email" => "", "title" => "", "ingredients" => ""];

    // Initial field values
    $email = "";
    $title = "";
    $ingredients = "";

    if (isset($_POST["submit"])) {

        // Check email
        if (empty($_POST["email"])) {
            $errors["email"] = "An email is required.";
        } else {
            $email = $_POST["email"];
            // Checks if the email is valid
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors["email"] = "Email must be a valid email address.";
            }
        }

        // Check title
        if (empty($_POST["title"])) {
            $errors["title"] = "A title is required.";
        } else {
            $title = $_POST["title"];
            // Regex checks if the title contains only letters and spaces.
            if (!preg_match("/^[a-zA-Z\s]+$/", $title)) {
                $errors["title"] = "Title must be letters and spaces only.";
            }
        }
        
        // Check ingredients
        if (empty($_POST["ingredients"])) {
            $errors["ingredients"] = "At least one ingredient is required.";
        } else  {
            $ingredients = $_POST["ingredients"];
            // Regex checks if the input is a comma serparated list.
            if (!preg_match("/^([a-zA-Z\s]+)(,\s*[a-zA-Z\s]*)*$/", $ingredients)) {
                $errors["ingredients"] = "Ingredients must be a comma separated list.";
            }
        }

        // Checks if any of the key value pairs are not empty
        if (array_filter($errors)) {
            // If there are any errors
            // echo "errors in the form";
        } else {
            // If there are no errors and the form is valid
            // echo "form is valid";

            $email = mysqli_real_escape_string($conn, $_POST["email"]);
            $title = mysqli_real_escape_string($conn, $_POST["title"]);
            $ingredients = mysqli_real_escape_string($conn, $_POST["ingredients"]);

            // Create sql
            $sql = "INSERT INTO pizzas(title,email,ingredients) VALUES('$title','$email','$ingredients')";

            // Save to db and check
            if(mysqli_query($conn, $sql)) {
                // Success
                header("Location: index.php"); // redirects to index.php
            } else {
                // Error
                echo "Query error: " . mysqli_error($conn);
            }

        }

    } // End of POST check

?>

<!DOCTYPE html>
<html lang="en">

<?php include("templates/header.php"); ?>

<section class="container grey-text">
    <h4 class="center">Add a Pizza</h4>
    <form action=<?= $_SERVER["PHP_SELF"]; ?> class="white" method="POST">
        <input type="text" name="email" value="<?= htmlspecialchars($email); ?>">
        <label for="email">Your Email:</label>

        <div class="red-text"><?= $errors["email"]; ?></div>

        <input type="text" name="title" value="<?= htmlspecialchars($title); ?>">
        <label for="title">Pizza Title:</label>

        <div class="red-text"><?= $errors["title"]; ?></div>

        <input type="text" name="ingredients" value="<?= htmlspecialchars($ingredients); ?>">
        <label for="ingredients">Ingredients (comma serparated):</label>

        <div class="red-text"><?= $errors["ingredients"]; ?></div>

        <div class="center" style="margin-top: 0.5rem;">
            <input type="submit" name="submit" value="Submit" class="btn brand z-depth-0">
        </div>
    </form>
</section>

<?php include("templates/footer.php"); ?>

</html>
