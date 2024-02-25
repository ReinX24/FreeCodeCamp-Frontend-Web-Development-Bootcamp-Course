<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP Lambda Functions</title>
</head>

<body>

    <?php
    $books = [
        [
            'name' => 'Do Androids Dream of Electric Sheep',
            'author' => 'Philip K. Dick',
            'releaseYear' => 1968,
            'purchaseUrl' => 'http://example.com',
        ],
        [
            'name' => 'Project Hail Mary',
            'author' => 'Andy Weir',
            'releaseYear' => 2021,
            'purchaseUrl' => 'http://example.com',
        ],
        [
            'name' => 'The Martian',
            'author' => 'Andy Weir',
            'releaseYear' => 2011,
            'purchaseUrl' => 'http://example.com',
        ],
    ];

    // function filterArray($items, $key, $value)
    // {
    //     $filteredItems = [];

    //     foreach ($items as $item) {
    //         if ($item[$key] === $value) {
    //             $filteredItems[] = $item;
    //         }
    //     }

    //     return $filteredItems;
    // }

    // $filteredBooks = filterArray($books, 'author', 'Andy Weir');

    // function filterArray($items, $fn)
    // {
    //     $filteredItems = [];

    //     foreach ($items as $item) {
    //         if ($fn($item)) {
    //             $filteredItems[] = $item;
    //         }
    //     }

    //     return $filteredItems;
    // }

    // $filteredBooks = filterArray($books, function ($book) {
    //     return $book['releaseYear'] >= 2000;
    // });

    // $filteredBooks = array_filter($books, function ($book) {
    //     return $book['author'] === "Andy Weir";
    // });

    // Homework
    $filteredBooks = array_filter($books, function ($book) {
        return $book['releaseYear'] >= 1950 && $book['releaseYear'] <= 2020;
    });
    ?>

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