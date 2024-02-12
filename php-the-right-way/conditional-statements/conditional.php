<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conditional Statements</title>
</head>

<body>

    <?php $score = 95; ?>

    <?php if ($score >= 95) : ?>
        <strong style="color: green;">A</strong>
    <?php elseif ($score >= 80) : ?>
        <strong>B</strong>
    <?php elseif ($score >= 70) : ?>
        <strong>C</strong>
    <?php elseif ($score >= 60) : ?>
        <strong>D</strong>
    <?php else : ?>
        <strong style="color: red;">F</strong>
    <?php endif ?>

</body>

</html>