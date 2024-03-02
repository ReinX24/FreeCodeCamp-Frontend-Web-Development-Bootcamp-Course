<?php

require 'functions.php';

// require 'router.php';

require 'Database.php';

$config = require 'config.php';

$db = new Database($config['database']);

dd($_GET);

$post = $db->query("SElECT * FROM posts WHERE id = 1;")->fetch();

dd($post);
