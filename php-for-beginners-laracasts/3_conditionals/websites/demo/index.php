<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP Conditionals and Booleans</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
    $name = "Norwegian Wood";
    $read = true;

    if ($read) {
        $message = "You have read $name";
    } else {
        $message = "You have NOT read $name";
    }
    ?>

    <h1>
        <!-- Shorthand version of echoing in php -->
        <?= $message; ?>
    </h1>
</body>

</html>