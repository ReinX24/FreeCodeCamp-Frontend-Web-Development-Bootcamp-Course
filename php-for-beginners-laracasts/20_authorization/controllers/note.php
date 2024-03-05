<?php

$config = require 'config.php';
$db = new Database($config['database']);

$heading = "Note";
$currentUserId = 1;

// Using a wildcard or a second argument to avoid SQL injection
$note = $db->query("SELECT * FROM notes WHERE id = :id;", [
    'id' => $_GET['id']
])->fetch();

// The note returns false if the query does not find a record
if (!$note) {
    abort();
}

// Checks if the currentUserId is equal to the user_id stored in the note
if ($note['user_id'] !== $currentUserId) {
    abort(Response::FORBIDDEN); // forbidden
}

require 'views/note.view.php';
