<?php

declare(strict_types=1);

// Your code
function getTransactionFiles(string $dirPath): array
{
    // Get the data from the csv file
    $files = [];
    foreach (scandir($dirPath) as $file) {
        if (is_dir($file)) {
            continue; // break the current loop
        }

        array_push($files, $dirPath .  $file); // points to absolute path
    }

    return $files;
}

function getTransactions(string $fileName, callable $transactionHandler = null): array
{
    // Parse $fileName and return its contents as an array
    if (!file_exists($fileName)) {
        trigger_error('File' . $fileName . ' does not exist.', E_USER_ERROR);
    }

    $file = fopen($fileName, 'r');

    fgetcsv($file); // disregards the first line in the csv file

    $transactions = [];

    while (($transaction = fgetcsv($file)) !== false) {
        if ($transactionHandler !== null) {
            $transaction = $transactionHandler($transaction);
        }
        array_push($transactions, $transaction);
    }

    return $transactions;
}

function extractTransaction(array $transactionRow): array
{
    // Desctructuring the array or $transactionRow into individual variables
    [$date, $checkNumber, $description, $amount] = $transactionRow;

    $amount = (float) str_replace(['$', ','], '', $amount);

    return [
        'date' => $date,
        'checkNumber' => $checkNumber,
        'description' => $description,
        'amount' => $amount
    ];
}

function calculateTotals(array $transactions): array
{
    // Calculate net income, total income, and total expense
    $totals = [
        'netTotal' => 0,
        'totalIncome' => 0,
        'totalExpense' => 0
    ];

    foreach ($transactions as $transaction) {
        $totals['netTotal'] += $transaction['amount'];

        if ($transaction['amount'] >= 0) {
            $totals['totalIncome'] += $transaction['amount'];
        } else {
            $totals['totalExpense'] += $transaction['amount'];
        }
    }

    return $totals;
}
