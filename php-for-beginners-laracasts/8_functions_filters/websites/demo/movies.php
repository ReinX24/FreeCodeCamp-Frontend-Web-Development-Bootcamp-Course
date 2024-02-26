<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Movies Exercise</title>
</head>

<body>

    <?php

    $favoriteMovies = [
        [
            'name' => 'Pulp Fiction',
            'releaseYear' => 1994
        ],
        [
            'name' => 'Reservoir Dogs',
            'releaseYear' => 1992
        ],
        [
            'name' => 'Hurt Locker',
            'releaseYear' => 2008
        ],
        [
            'name' => 'Past Lives',
            'releaseYear' => 2023
        ],
    ];

    function filterByRecent(array $movies): array
    {
        // Return an array where the release year is greater than 2000.
        return array_filter($movies, function ($movie) {
            if ($movie['releaseYear'] > 2000) {
                return $movie;
            }
        });
    }
    ?>

    <h1>Movies After 2000</h1>
    <ul>
        <?php foreach (filterByRecent($favoriteMovies) as $movie) : ?>
            <li>
                <?= $movie['name'] ?> (<?= $movie['releaseYear'] ?>)
            </li>
        <?php endforeach; ?>
    </ul>

</body>

</html>