<?php

    if (isset($_POST["submit"])) {
       echo $_POST["email"];
       echo $_POST["title"];
       echo $_POST["ingredients"];
    }

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
