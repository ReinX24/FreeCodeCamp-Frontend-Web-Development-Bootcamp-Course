<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Functions</title>
</head>

<body>
    <form action="index.php" method="POST">
        <label for="radius">Radius:</label><br>
        <input type="text" name="radius"><br>

        <input type="submit" value="Calculate">
    </form>
    <br>

    <!-- <form action="index.php" method="POST">
        <label for="x">x:</label>
        <input type="text" name="x"><br>

        <label for="y">y:</label>
        <input type="text" name="y"><br>

        <label for="z">z:</label>
        <input type="text" name="z"><br>

        <input type="submit" value="Total">
    </form> -->
</body>

</html>

<?php

$radius = $_POST['radius'];

$circumference = null;
$area = null;
$volume = null;

$circumference = 2 * pi() * $radius;
$circumference = round($circumference, 2);

$area = pi() * pow($radius, 2);
$area = round($area, 2);

$volume = (4 / 3) * pi() * pow($radius, 3);
$volume = round($volume, 2);

echo "Circumference = {$circumference}cm<br>";
echo "Area = {$area}cm^2 <br>";
echo "Volume = {$volume}cm^3 <br>";

// $x = $_POST['x'];
// $y = $_POST['y'];
// $z = $_POST['z'];
// $total = null;

// $total = abs($x);
// $total = round($x);
// $total = floor($x);
// $total = ceil($x);
// $total = pow($x, $y);
// $total = max($x, $y, $z);
// $total = min($x, $y, $z);
// $total = pi();
// $total = rand(90, 100); // random number between 2 numbers (incl. both)

// echo $total;

?>