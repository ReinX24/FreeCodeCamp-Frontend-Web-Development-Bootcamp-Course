<?php
class AdminUser extends User
{
    public $level;
    protected $role = 'admin';

    public function __construct($username, $email, $level)
    {
        parent::__construct($username, $email); // constructor of parent class
        $this->level = $level;
    }

    public function message()
    {
        return "{$this->email}, an admin, sent a new message.";
    }
}
