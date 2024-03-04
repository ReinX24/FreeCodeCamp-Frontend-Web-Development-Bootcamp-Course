<?php

$config = require 'config.php';
$db = new Database($config['database']);

$heading = "Note";

// $id = $_GET['id']; // getting the id variable from the url

// Using a wildcard or a second argument to avoid SQL injection
$note = $db->query("SELECT * FROM notes WHERE id = :id;", ['id' => $_GET['id']])->fetch();

require 'views/note.view.php';
