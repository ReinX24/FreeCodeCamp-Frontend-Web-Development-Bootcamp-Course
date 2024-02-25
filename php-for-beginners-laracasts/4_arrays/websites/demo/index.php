<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP Arrays</title>
</head>

<body>
    <h1>Recommended Books</h1>

    <?php
    $books = [
        "Do Androids Dream of Electric Sheep",
        "The Langoliers",
        "Project Hail Mary",
        "Animal Farm"
    ];
    ?>

    <ul>
        <?php foreach ($books as $book) : ?>
            <li><?= $book; ?></li>
        <?php endforeach; ?>
    </ul>

</body>

</html>