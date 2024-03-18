<?php 

    // $quotes = readfile("README.txt");
    // echo $quotes;

    $file = "README.txt";

    if(file_exists($file)) {
        // Read file
        // echo readfile($file) . "<br>";

        // Copy file
        // copy($file, "quotes.txt");

        // Absolute path
        // echo realpath($file) . "<br>";

        // File size
        // echo filesize($file) . "<br>";

        // Rename file
        // rename($file, "test.txt");
    } else {
        echo "File does not exist.";
    }

    mkdir("quotes");