<?php

class User
{
    // Properties methods
    public function __construct($name)
    {
        $this->name = $name;
    }
}

$userOne = new User("Rein");
$userTwo = new User("Reinnne");

echo "this class is " . get_class($userTwo);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP OOP Tutorial</title>
</head>

<body>

</body>

</html>