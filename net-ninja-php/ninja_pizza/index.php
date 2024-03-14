<?php

    // MySQLi or PDO
    // Connect to database
    $conn = mysqli_connect("localhost", "rein", "test1234", "ninja_pizza");

    // Check the connection
    if (!$conn) {
        echo "Connection error: " . mysqli_connect_error();
    }

    // Writing query for all pizzas
    $sql = "SELECT title, ingredients, id FROM pizzas ORDER BY created_at";

    // Make query and get result
    $result = mysqli_query($conn, $sql);

    // Fetch the resulting rows as an array
    $pizzas = mysqli_fetch_all($result, MYSQLI_ASSOC);

    // Free result from memory
    mysqli_free_result($result);

    // Close the connection
    mysqli_close($conn);

    // Using explode to convert comma separated string into an array
    // var_dump(explode(",", $pizzas[0]["ingredients"]));

    // echo "<pre>";
    // print_r($pizzas);
    // echo "</pre>";

?>

<!DOCTYPE html>
<html lang="en">

    <?php include("templates/header.php"); ?>

    <h4 class="center grey-text">Pizzas</h4>
    <div class="container">
        <div class="row">
            <?php foreach ($pizzas as $pizza): ?>
                <div class="col s6 md3">
                    <div class="card z-depth-0">
                        <div class="card-content center">
                            <h6><?= htmlspecialchars($pizza["title"]); ?></h6>
                            <div>
                                <ul class="collection">
                                    <?php foreach(explode(",", $pizza["ingredients"]) as $ingredient): ?> 
                                        <li class="collection-item"><?= htmlspecialchars($ingredient); ?></li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                        </div>
                        <div class="card-action right-align">
                            <a href="#" class="brand-text">More Info</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>

            <?php if(count($pizzas) >= 3): ?>
                <p>There are 3 or more pizzas.</p>
            <?php else: ?>
                <p>There are less than 3 pizzas.</p>
            <?php endif; ?>

        </div>
    </div>

    <?php include("templates/footer.php"); ?>

</html>