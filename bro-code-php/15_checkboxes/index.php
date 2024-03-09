<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkboxes</title>
</head>
<body>
    <form action="index.php" method="POST">
        <input type="checkbox" name="foods[]" value="Pizza">
        <label for="pizza">Pizza</label>
        <br>
        <input type="checkbox" name="foods[]" value="Hamburger">
        <label for="hamburger">Hamburger</label>
        <br>
        <input type="checkbox" name="foods[]" value="Hotdog">
        <label for="hotdog">Hotdog</label>
        <br>
        <input type="checkbox" name="foods[]" value="Taco">
        <label for="taco">Taco</label>
        <br>
        <input type="submit" name="submit" value="Submit">
    </form>
</body>
</html>

<?php

    if (isset($_POST['submit'])) {

        $foods = $_POST["foods"];

        foreach($foods as $food) {
            echo $food . "<br>";
        }

    }

?>