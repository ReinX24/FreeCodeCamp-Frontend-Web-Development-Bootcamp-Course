<?php

require 'functions.php';

// require 'router.php';

require 'Database.php';

$db = new Database();

$posts = $db->query("SElECT * FROM posts;")->fetchAll();

dd($posts);
