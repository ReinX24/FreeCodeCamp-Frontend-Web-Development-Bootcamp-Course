<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP Technical Check-in #1</title>
</head>

<body>
    <h1><?= $business['name'] ?></h1>

    <ul>
        <?php foreach ($business['categories'] as $category) : ?>
            <li><?= $category ?></li>
        <?php endforeach; ?>
    </ul>
</body>

</html>