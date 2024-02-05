<?php
    include('config.php');

    function db_connect() {
        global $db_host, $db_username, $db_password, $db_name;
        $mysqli = new mysqli($db_host, $db_username, $db_password, $db_name);

        if ($mysqli->connect_errno) {
            echo "Failed to connect to MySQL" . $mysqli->connect_error;
            exit();
        } else {
            return $mysqli;
        }
    }