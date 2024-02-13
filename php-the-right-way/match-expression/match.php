<?php

$paymentStatus = 5;
$paymentStatusDisplay = match ($paymentStatus) {
    1 => 'Paid',
    2, 3 => 'Payment Declined',
    0 => 'Pending Payment',
    default => 'Unknown Payment Status'
};

echo $paymentStatusDisplay;
