<?php

declare(strict_types=1);

$root = dirname(__DIR__) . DIRECTORY_SEPARATOR;

define('APP_PATH', $root . 'app' . DIRECTORY_SEPARATOR);
define('FILES_PATH', $root . 'transaction_files' . DIRECTORY_SEPARATOR);
define('VIEWS_PATH', $root . 'views' . DIRECTORY_SEPARATOR);

require APP_PATH . 'App.php';
require APP_PATH . 'helpers.php';

// Getting the files in our transaction_files directory
$files = getTransactionFiles(FILES_PATH);

// Get the transactions of the csv files
$transactions = [];

// Add transactions of each csv file to $transactions, also remove $ and ,
foreach ($files as $file) {
    $transactions = array_merge($transactions, getTransactions($file, 'extractTransaction'));
}

// Calculate the net total, total income, and total expense
$totals = calculateTotals($transactions);

require VIEWS_PATH . 'transactions.php';
