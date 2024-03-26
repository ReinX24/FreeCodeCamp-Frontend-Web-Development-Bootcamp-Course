<?php

class UserValidator
{

    private $data;
    private $errors = [];
    private static $fields = ['username', 'email'];

    public function __construct($postData)
    {
        $this->data = $postData;
    }

    public function validateForm()
    {
        // Checks if all fields exists in data from POST
        foreach (self::$fields as $field) {
            if (!array_key_exists($field, $this->data)) {
                trigger_error("{$field} is not present in data.");
                return;
            }
        }

        // If both fields exist, validate their data
        $this->validateUsername();
        $this->validateEmail();
        return $this->errors; // returns any errors, if any
    }

    private function validateUsername()
    {
        $val = trim($this->data["username"]);

        if (empty($val)) {
            $this->addError('username', 'username cannot be empty');
        } else {
            // Regex: ^ start string, $ end string, [] allowable characters
            // {} required number of characters, first argument is minimum and
            // the second one is the maximum number of characters allowed.
            if (!preg_match('/^[a-zA-Z0-9]{6,12}$/', $val)) {
                $this->addError('username', 'username must be 6-12 chars & alphanumeric');
            }
        }
    }

    private function validateEmail()
    {
        $val = trim($this->data["email"]);

        if (empty($val)) {
            $this->addError('email', 'email cannot be empty');
        } else {
            // Checks if the email in data is a valid email
            if (!filter_var($val, FILTER_VALIDATE_EMAIL)) {
                $this->addError('email', 'email must be a valid email');
            }
        }
    }

    private function addError($key, $value)
    {
        $this->errors[$key] = $value;
    }
}
