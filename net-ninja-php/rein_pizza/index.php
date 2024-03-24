<?php
    require('config/db_connect.php');

    $sql = "SELECT title, ingredients, id FROM pizzas ORDER BY created_at";

    $result = mysqli_query($conn, $sql); // returns query as table

    $pizzas = mysqli_fetch_all($result, MYSQLI_ASSOC); // make table into assoc array

    mysqli_free_result($result); // free from memory

    mysqli_close($conn); // close db connection

?>

<?php require('templates/header.php'); ?>

<div class="container d-flex flex-column gap-4 col-8 mt-4 mb-4">
    <?php foreach ($pizzas as $pizza): ?>
        <div class="card text-center shadow-lg border border-1">
            <div class="card-header bg-primary text-white">
                <h2><?= htmlspecialchars($pizza['title']); ?></h2>
            </div>
            <div class="card-body">
                <img src="img/pizza.png" class="mb-2" style="max-width: 64px;">
                <ul class="list-group my-3 col-8 mx-auto">
                    <?php foreach(explode(",", $pizza["ingredients"]) as $ingredient): ?>
                        <li class="list-group-item"><?= htmlspecialchars($ingredient); ?></li>
                    <?php endforeach; ?>
                </ul>
                <a href="details.php?id=<?= $pizza['id']; ?>" class="btn btn-info border border-dark border-1">More Info</a>
            </div>
        </div>
    <?php endforeach; ?>
</div>

<?php require('templates/footer.php'); ?>