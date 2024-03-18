<?php

    session_start();

    // $_SESSION["name"] = "yoshi";

    // QUERY_STRING is the argument after ? (?noname)
    if ($_SERVER["QUERY_STRING"] == "noname") {
        unset($_SESSION["name"]); // destroys a variable
        // session_unset(); // destroys all variables in a session
    }

    $name = $_SESSION["name"] ?? "Guest"; 
    // Sets name to "Guest" if "name" does not exist using the null coalescing 
    // operator. Use this if we want to check the first value of the argument
    // exists or not.

    // Get cookie
    $gender = $_COOKIE["gender"] ?? "Unknown";
    
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ninja Pizza</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <style>
        .brand {
            background-color: #cbb09c !important;
        }

        .brand-text {
            color: #cbb09c !important;
        }

        .pizza {
            width: 100px;
            margin: 40px auto -30px;
            display: block;
            position: relative;
            top: -30px;
        }

        form {
            max-width: 460px;
            margin: 20px auto;
            padding: 20px;
        }
    </style>
</head>
<body class="grey lighten-4">
    <nav class="white z-depth-0">
        <div class="container">
            <a href="index.php" class="brand-logo brand-text">Ninja Pizza</a>
            <ul id="nav-mobile" class="right hide-on-small-and-down">
                <li class="grey-text">Hello <?= htmlspecialchars($name); ?></li>
                <li class="grey-text">(<?= htmlspecialchars($gender); ?>)</li>
                <li><a href="add.php" class="btn brand z-depth-0">Add a Pizza</a></li>
            </ul>
        </div>
    </nav>