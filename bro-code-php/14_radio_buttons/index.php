<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Radio Buttons</title>
</head>
<body>
    <form action="index.php" method="POST">
        <input type="radio" name="credit_card" value="Visa">
        <label for="visa">Visa</label>
        <br>
        <input type="radio" name="credit_card" value="Mastercard">
        <label for="visa">Mastercard</label>
        <br>
        <input type="radio" name="credit_card" value="American Express">
        <label for="visa">American Express</label>
        <br>

        <input type="submit" name="confirm" value="Confirm">
    </form>
</body>
</html>

<?php
    if (isset($_POST['confirm'])) {
        $credit_card = null;

        if (isset($_POST['credit_card'])) {
            $credit_card = $_POST['credit_card'];
        }

        switch ($credit_card) {
            case "Visa":
                echo "You selected Visa";
                break;
            case "Mastercard":
                echo "You selected Mastercard";
                break;
            case "American Express":
                echo "You selected American Express";
                break;
            default:
                echo "Please make a selection";
        }

        // if ($credit_card == "Visa") {
        //     echo "You selected Visa";
        // } elseif ($credit_card == "Mastercard") {
        //     echo "You selected Mastercard";
        // } elseif ($credit_card == "American Express") {
        //     echo "You selected American Express";
        // } else {
        //     echo "Please make a selection";
        // }
    }

?>