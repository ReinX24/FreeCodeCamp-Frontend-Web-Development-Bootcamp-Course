<?php
    require('config/db_connect.php');

    $sql = "SELECT title, ingredients, id FROM pizzas ORDER BY created_at";

    $result = mysqli_query($conn, $sql); // returns query as table

    $pizzas = mysqli_fetch_all($result, MYSQLI_ASSOC); // make table into assoc array

    mysqli_free_result($result); // free from memory

    mysqli_close($conn); // close db connection

?>

<?php require('templates/header.php'); ?>

<div class="container d-flex flex-column gap-4 col-6">
    <?php foreach ($pizzas as $pizza): ?>
        <div class="card text-center mt-4">
           <div class="card-body">
                <img src="img/pizza.png" class="mb-2">
                <h2 class="card-title"><?= htmlspecialchars($pizza['title']); ?></h2>
                <p class="card-text"><?= htmlspecialchars($pizza['ingredients']); ?></p>
                <a href="details.php?id=<?= $pizza['id']; ?>" class="btn btn-primary">More Info</a>
            </div>
        </div>
    <?php endforeach; ?>
</div>

<?php require('templates/footer.php'); ?>