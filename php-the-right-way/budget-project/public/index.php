<?php

declare(strict_types=1);

$root = dirname(__DIR__) . DIRECTORY_SEPARATOR;

define('APP_PATH', $root . 'app' . DIRECTORY_SEPARATOR);
define('FILES_PATH', $root . 'transaction_files' . DIRECTORY_SEPARATOR);
define('VIEWS_PATH', $root . 'views' . DIRECTORY_SEPARATOR);

/* YOUR CODE (Instructions in README.md) */
require APP_PATH . 'App.php'; // add all php code from App.php
require APP_PATH . 'helpers.php';

$files = getTransactionFiles(FILES_PATH); // get the transaction_files csv file/s

$transactions = []; // array where the transactions from the csv file will be stored

foreach ($files as $file) {
    // Parse files in $files and return them in a formatted manner
    // DONE: test tomorrow if this would work with 2 csv files
    $transactions = array_merge($transactions, getTransactions($file, 'extractTransaction'));
}

$totals = calculateTotals($transactions); // calculate the totals

require VIEWS_PATH . 'transactions.php'; // add all php code from transactions.php
