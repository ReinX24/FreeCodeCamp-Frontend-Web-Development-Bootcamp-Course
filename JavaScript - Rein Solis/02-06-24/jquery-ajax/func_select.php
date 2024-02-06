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

// Getting data from our database
function getData($query) {
    $db = db_connect(); // connnect to database
    $result = $db->query($query); // use parameter query on our database
    $rows = []; // rows for collecting data
    
    // While loop that stores the data into $rows
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    return $rows; // return the data
}

// Get a specific record by their id
function getDataById($table, $id, $fields = '*') {
    $db = db_connect();
    $sql = "select $fields from $table where id = $id";
    $result = $db->query($sql);

    $rows = [];

    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    return $rows[0]; // only return the data element needed
}

// Uploads a file
function uploadFile($file, $path) {
    if (file_exists($path)) {
        $old_file = $file['name'];
        $new_file = time();
        $file_array = explode('.', $old_file);
        $ext = end($file_array);

        if (move_uploaded_file($file['tmp_name'], $path.$new_file.'.'.$ext)) {
            return $path.$new_file.'.'.$ext;
        }

        return '';
    }
}