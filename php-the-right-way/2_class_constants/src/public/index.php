<?php

require __DIR__ . '/../vendor/autoload.php';

use App\PaymentGateway\Paddle\Transaction; // triggers autoloader
use App\Enums\Status;

$transaction = new Transaction();

// $transaction->setStatus('paid');
// $transaction->setStatus(Transaction::STATUS_PAID);
// $transaction->setStatus('awjhdioahjiofj');
$transaction->setStatus(Status::PAID);

var_dump($transaction);

// echo Transaction::class;