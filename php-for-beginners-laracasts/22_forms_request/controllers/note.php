<?php

$config = require 'config.php';
$db = new Database($config['database']);

$heading = "Note";
$currentUserId = 1;

// Using a wildcard or a second argument to avoid SQL injection
$note = $db->query("SELECT * FROM notes WHERE id = :id;", [
    'id' => $_GET['id']
])->findOrFail();

// Checks if the currentUserId is equal to the user_id stored in the note
authorize($note['user_id'] === $currentUserId);

require 'views/note.view.php';
