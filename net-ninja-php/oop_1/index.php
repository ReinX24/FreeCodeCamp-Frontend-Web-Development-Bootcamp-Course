<?php

class User
{
    // Properties methods
    private $username;
    private $email;

    public function __construct($username, $email)
    {
        $this->username = $username;
        $this->email = $email;
    }

    public function addFriend()
    {
        return "{$this->email} added a new friend";
    }

    // Getters
    public function getEmail()
    {
        return $this->email;
    }

    // Setters
    public function setEmail($email)
    {
        if (strpos($email, "@") > -1) {
            $this->email = $email;
        }
    }
}

$userOne = new User('mario', 'mario@thenetninja.co.uk');
$userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

$userOne->setEmail('yoshi@thenetninja.co.uk');

echo $userOne->getEmail() . "<br>";
echo $userTwo->getEmail() . "<br>";

// $userOne->email = 3;

// echo $userOne->username . "<br>";
// echo $userOne->email . "<br>";
// echo $userOne->addFriend() . "<br>";

// $userTwo->username = 'yoshi';
// $userTwo->email = 'yoshi@thenetninja.co.uk';

// echo $userTwo->username . "<br>";
// echo $userTwo->email . "<br>";
// echo $userTwo->addFriend() . "<br>";


// print_r(get_class_vars("User")); // returns all the properties in the User class
// print_r(get_class_methods("User")); // returns methods of the class

// echo "this class is " . get_class($userTwo);

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