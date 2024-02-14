<?php

// Working with filesystem

// unlink('bazz.txt'); // deletes file
// copy('foo.txt', 'buzz.txt'); // copies file contents to a new file
// rename('foo.txt', 'faz.txt'); // renaming a file
print_r(pathinfo('faz.txt'));

// file_put_contents('bazz.txt', 'hello');
// file_put_contents('bazz.txt', 'world');
// file_put_contents('bazz.txt', 'world', FILE_APPEND);


// $content = file_get_contents('foo.txt');
// $content = file_get_contents('foo.txt', offset: 3, length: 2); // prints lo

// echo $content;

// if (!file_exists('foo.txt')) {
//     echo 'File not found!';

//     return;
// }

// $file = fopen('foo.txt', 'r');

// while (($line = fgets($file)) !== false) {
//     echo $line . '<br>';
// }

// $file = fopen('bar.txt', 'r');

// while (($line = fgetcsv($file)) !== false) {
//     print_r($line);
// }

// fclose($file);

// var_dump($file);

// if (file_exists('foo.txt')) {
    // echo filesize('foo.txt');

//     file_put_contents('foo.txt', 'hello world');

//     clearstatcache(); // clears the cache value of filesize

//     echo filesize('foo.txt');
// } else {
//     echo 'File not found';
// }

// mkdir('foo');
// rmdir('foo');

// mkdir('foo/bar', recursive: true);
// rmdir('foo/bar');
// rmdir('foo');

// $dir = scandir(__DIR__);

// var_dump($dir);
// var_dump(is_file($dir[2]));
// var_dump(is_dir($dir[2]));
