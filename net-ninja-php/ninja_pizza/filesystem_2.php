<?php

    $file = "quotes.txt";

    // Opening a file for reading
    // $handle = fopen($file, 'r'); // read only
    // $handle = fopen($file, 'r+'); // read and write
    $handle = fopen($file, 'a+'); // read and write pointer at the end

    // Read the file
    // echo fread($handle, filesize($file));
    // echo fread($handle, 112); // only prints first 112 characters or bytes

    // Read a single line
    // echo fgets($handle);
    // echo fgets($handle);

    // Read a single character
    // echo fgetc($handle);
    // echo fgetc($handle);

    // Writing to a file
    // fwrite($handle, "\nEverything popular is wrong");

    // Closing our file
    fclose($handle);

    // Deleting our file
    // unlink($file);