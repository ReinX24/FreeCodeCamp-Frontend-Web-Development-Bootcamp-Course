<?php 

    require("config/db_connect.php");

    if(isset($_POST['delete'])) {
        $id_to_delete = mysqli_real_escape_string($conn, $_POST["id_to_delete"]);

        $sql = "DELETE FROM pizzas WHERE id = {$id_to_delete}";

        if(mysqli_query($conn, $sql)) {
            header("Location: index.php");
        } else {
            echo "Quality error: " . mysqli_error($conn);
        }
    }

    if(isset($_GET['id'])) {
        $id = mysqli_escape_string($conn, $_GET['id']);
        
        $sql = "SELECT * FROM pizzas WHERE id = {$id}";

        $result = mysqli_query($conn, $sql);

        $pizza = mysqli_fetch_assoc($result);

        mysqli_free_result($result);
        mysqli_close($conn);
    }

?>

<?php require("templates/header.php"); ?>

<div class="container">
    <div class="card text-center mt-4">
        <div class="card-body">
            <h1 class="card-title"><?= htmlspecialchars($pizza['title']); ?></h1>
            <p class="card-text">
                <p>Created By: <?= htmlspecialchars($pizza['email']); ?></p>
                <h4>Ingredients:</h4>
                <p><?= htmlspecialchars($pizza['ingredients']); ?></p>
            </p>
            <form action="<?= $_SERVER['PHP_SELF'] ?>" method="POST">
                <input type="hidden" name="id_to_delete" value="<?= $pizza['id']; ?>">
                <input type="submit" name="delete" value="Delete" class="btn btn-danger">
            </form>
        </div>
    </div>
</div>

<?php require("templates/footer.php"); ?>