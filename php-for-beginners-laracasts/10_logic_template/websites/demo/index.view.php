<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP Separate Logic From The Template</title>
</head>

<body>
    <ul>
        <?php foreach ($filteredBooks as $book) : ?>
            <li>
                <a href="<?= $book['purchaseUrl']; ?>">
                    <?= $book['name']; ?>
                    (<?= $book['releaseYear']; ?>)
                    - By <?= $book['author']; ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</body>

</html>