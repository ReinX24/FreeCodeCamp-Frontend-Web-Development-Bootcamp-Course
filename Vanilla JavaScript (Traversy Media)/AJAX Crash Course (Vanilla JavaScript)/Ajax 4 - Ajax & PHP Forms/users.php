<?php

// Create connection
$conn = mysqli_connect('localhost', 'root', '', 'ajaxtest');

$query = 'SELECT * FROM User';

// Get Result
$result = mysqli_query($conn, $query);

// Fetch Data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);