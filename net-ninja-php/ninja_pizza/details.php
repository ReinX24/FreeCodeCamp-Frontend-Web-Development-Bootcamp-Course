<?php

    include("config/db_connect.php");

    if (isset($_POST["delete"])) {
        $id_to_delete = mysqli_real_escape_string($conn, $_POST["id_to_delete"]);

        $sql = "DELETE FROM pizzas WHERE id = {$id_to_delete}";

        if (mysqli_query($conn, $sql)) {
            // Success
            header("Location: index.php");
        } else {
            // Failure
            echo "Query error: " . mysqli_error($conn);
        }

    }

    // Check GET request id param
    if (isset($_GET["id"])) {
        $id = mysqli_real_escape_string($conn, $_GET["id"]);

        // Make sql
        $sql = "SELECT * FROM pizzas WHERE id = {$id}";

        // Get the query result
        $result = mysqli_query($conn, $sql);

        // Fetch the result in array format
        $pizza = mysqli_fetch_assoc($result);

        mysqli_free_result($result);
        mysqli_close($conn);

        // print_r($pizza);
    }

?>

<!DOCTYPE html>
<html lang="en">
    
    <?php include("templates/header.php"); ?>

    <div class="container center grey-text">
        <?php if($pizza): ?>
            <!-- Show pizza information -->
            <h4><?= htmlspecialchars($pizza["title"]); ?></h4>
            <p><?= "Created by: " . htmlspecialchars($pizza["email"]); ?></p>
            <p><?= date($pizza["created_at"]); ?></p>

            <h5>Ingredients:</h5>
            <p><?= htmlspecialchars($pizza["ingredients"]); ?></p>

            <!-- DELETE FORM -->
            <form action="details.php" method="POST">
                <input type="hidden" name="id_to_delete" value="<?= $pizza["id"]; ?>">
                <input type="submit" name="delete" value="Delete" class="btn brand z-depth-0">
            </form>
        <?php else: ?>

            <!-- If not pizza is found -->
            <h5>No such pizza exists.</h5>

        <?php endif; ?>
    </div>

    <?php include("templates/footer.php"); ?>

</html>