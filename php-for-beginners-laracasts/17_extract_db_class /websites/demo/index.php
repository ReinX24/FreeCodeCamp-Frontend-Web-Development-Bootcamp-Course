<?php

require 'functions.php';

// require 'router.php';

require 'Database.php';

$db = new Database();

// Getting a single post
// $post = $db->query("SElECT * FROM posts WHERE id = 1;")->fetch(PDO::FETCH_ASSOC);

// Getting all posts
$posts = $db->query("SElECT * FROM posts;")->fetchAll(PDO::FETCH_ASSOC);

dd($posts);
