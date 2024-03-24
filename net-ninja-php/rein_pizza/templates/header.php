<?php

    session_start();

    // if ($_SERVER["QUERY_STRING"] == "noname") {
    //     unset($_SESSION["name"]);
    // }

    $name = $_SESSION["name"]; 
    $gender = $_COOKIE["gender"] ?? "Unknown";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rein Pizzas</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body class="d-flex flex-column min-vh-100">
    <nav>
        <div class="d-flex justify-content-between pt-3 pb-3 px-3 border-bottom bg-primary text-white">
            <h2><a href="index.php" class="text-decoration-none text-white">Rein Pizzas</a></h2>
            <div class="d-flex gap-4 align-items-center">
                <span>Hello <?= htmlspecialchars($name); ?> (<?= htmlspecialchars($gender); ?>)</span>
                <button class="btn btn-success shadow-lg border border-1"><a href="add.php" class="text-white text-decoration-none">Add a Pizza</a></button>
            </div>
        </div>
    </nav>