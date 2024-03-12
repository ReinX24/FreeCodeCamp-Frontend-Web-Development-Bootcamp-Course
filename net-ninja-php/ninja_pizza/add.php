<?php

    if (isset($_POST["submit"])) {

        // Check email
        if (empty($_POST["email"])) {
            echo "An email is required. <br>";
        } else  {
            echo htmlspecialchars($_POST["email"]);
        }

        // Check title
        if (empty($_POST["title"])) {
            echo "A title is required. <br>";
        } else  {
            echo htmlspecialchars($_POST["title"]);
        }
        
        // Check ingredients
        if (empty($_POST["ingredients"])) {
            echo "At least one ingredient is required. <br>";
        } else  {
            echo htmlspecialchars($_POST["ingredients"]);
        }
    } // End of POST check

?>

<!DOCTYPE html>
<html lang="en">

<?php include("templates/header.php"); ?>

<section class="container grey-text">
    <h4 class="center">Add a Pizza</h4>
    <form action="add.php" class="white" method="POST">
        <input type="email" name="email">
        <label for="email">Your Email:</label>

        <input type="text" name="title">
        <label for="title">Pizza Title:</label>

        <input type="text" name="ingredients">
        <label for="ingredients">Ingredients (comma serparated):</label>

        <div class="center" style="margin-top: 0.5rem;">
            <input type="submit" name="submit" value="Submit" class="btn brand z-depth-0">
        </div>
    </form>
</section>

<?php include("templates/footer.php"); ?>

</html>
