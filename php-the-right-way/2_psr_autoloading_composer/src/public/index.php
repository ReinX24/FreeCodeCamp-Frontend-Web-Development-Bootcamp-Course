<?php

require_once '../app/PaymentGateway/Stripe/Transaction.php';
require_once '../app/PaymentGateway/Paddle/CustomerProfile.php';
require_once '../app/PaymentGateway/Paddle/Transaction.php';
require_once '../app/Notification/Email.php';

use App\PaymentGateway\Paddle\Transaction;

$paddleTransaction = new Transaction();

var_dump($paddleTransaction);
