<?php

require_once '../PaymentGateway/Stripe/Transaction.php';
require_once '../PaymentGateway/Paddle/DateTime.php';
require_once '../PaymentGateway/Paddle/CustomerProfile.php';
require_once '../PaymentGateway/Paddle/Transaction.php';
require_once '../Notification/Email.php';

// var_dump(new PaymentGateway\Stripe\Transaction()); // using namespace

// use PaymentGateway\Stripe\Transaction;
// var_dump(new Transaction());

// use PaymentGateway\Paddle\{Transaction, CustomerProfile}; // importing 2 classes
use PaymentGateway\Paddle as PA;
use PaymentGateway\Stripe\Transaction as StripeTransaction;
// use PaymentGateway\Paddle\CustomerProfile;

$paddleTransaction = new PA\Transaction();
$stripeTransaction = new StripeTransaction();
$paddleCustomer = new PA\CustomerProfile();

var_dump($paddleCustomer, $paddleTransaction, $stripeTransaction);
