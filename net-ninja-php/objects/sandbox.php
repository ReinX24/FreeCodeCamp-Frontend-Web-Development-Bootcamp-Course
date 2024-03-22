<?php

    // Classes

    class User {

        private $email;
        private $name;

        public function __construct($name, $email) {
            $this->name = $name;
            $this->email = $email;
        }

        public function login() {
            // echo "The user logged in!";
            echo "{$this->name} logged in!";
        }

        public function showInfo() {
            echo "Name: {$this->name} <br>";
            echo "Email: {$this->email}";
        }

        public function getName() {
            return $this->name;
        }
        
        public function getEmail() {
            return $this->email;
        }

        public function setName($name) {
            if (is_string($name) && strlen($name) > 1) {
                $this->name = $name;
                return "Name has been updated {$this->getName()}";
            } else {
                return "Not a valid name";
            }
        }

        public function setEmail($email) {
            $this->email = $email;
        }

    }

    // $userOne = new User();
    // $userOne->login();
    // echo $userOne->name;
    // echo $userOne->email;

    $userTwo = new User("yoshi", "yoshi@thenetninja.co.uk");

    // echo $userTwo->setName(50);
    echo $userTwo->setName('shaun');
    echo $userTwo->getName();

    // $userTwo->login();
    // $userTwo->showInfo();