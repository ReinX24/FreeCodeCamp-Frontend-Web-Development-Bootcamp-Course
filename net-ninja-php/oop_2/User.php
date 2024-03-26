<?php
class User
{
    // Properties methods
    protected $username;
    protected $email;
    protected $role = 'member';

    public function __construct($username, $email)
    {
        $this->username = $username;
        $this->email = $email;
    }

    public function __destruct()
    {
        echo "The user {$this->username} was removed. <br>";
    }

    public function __clone()
    {
        $this->username = $this->username . '(cloned) <br>';
    }

    public function addFriend()
    {
        return "{$this->email} added a new friend";
    }

    public function message()
    {
        return "{$this->email} sent a new message.";
    }

    // Getters
    public function getEmail()
    {
        return $this->email;
    }

    public function getName()
    {
        return $this->username;
    }

    public function getRole()
    {
        return $this->role;
    }

    // Setters
    public function setEmail($email)
    {
        if (strpos($email, "@") > -1) {
            $this->email = $email;
        }
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setRole($role)
    {
        $this->role = $role;
    }
}
