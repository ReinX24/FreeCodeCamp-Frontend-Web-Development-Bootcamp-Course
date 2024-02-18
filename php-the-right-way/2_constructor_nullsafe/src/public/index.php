<?php

declare(strict_types=1);


require_once '../PaymentProfile.php';
require_once '../Customer.php';
require_once '../Transaction.php';

$transaction = new Transaction(5, 'Test');

// $transaction->customer = new Customer();

// The "?" means that it could be null and no errors would be thrown
// The "??" is a null coalescing operator in php, runs another function if the 
// first one returns null.
// echo $transaction->customer?->paymentProfile?->id ?? 'foo';

// This does not work with the null coalescing operator because we use method
// calls, to fix this, we add nullsafe operators.
echo $transaction->getCustomer()?->getPaymentProfile()?->id ?? 'foo';
