<?php

// Connecting to a database
// host, username, password, database we will be using
$conn = mysqli_connect('localhost', 'root', '', 'ajaxtest');

echo 'Processing...'; 

// Check for a POST variable
if (isset($_POST['name'])) {    
    // Checking the 'name' value
    // var_dump($_POST['name']);

    $name = mysqli_real_escape_string($conn, $_POST['name']);
    // echo 'POST: Your name is ' . $_POST['name'];

    $query = "INSERT INTO User(name) VALUES('$name')";
    if (mysqli_query($conn, $query)) {
        echo 'User Added...';
    } 
     else {
        echo 'ERROR: ' . mysqli_error($conn);
    }
}

// Check for a GET variable
if (isset($_GET['name'])) {
    echo 'GET: Your name is '. $_GET['name'];
}