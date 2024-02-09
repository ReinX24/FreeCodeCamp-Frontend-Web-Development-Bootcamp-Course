<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP in HTML</title>
</head>
<body>
    <h1>
        <!-- <?php echo "Hello World"; ?> -->

        <!-- Shorthand version of printing -->
        <!-- <?= "Hello World Again" ?> -->
    </h1>

    <!-- Processing in php -->
    <?php 
        // Comment 1
        # Comment 2

        /*
            Multi Line comment
        */

        /**
         * Documentation block or doc block
         */

        $x = 10;
        $y = 5;
        // echo $x . ', ' . $y;
        echo '<p>' . $x . ', ' . $y . '</p>';
    # does not comment out closing tag ?> This text is not commented
</body>
</html>