<?php

// require_once '../app/PaymentGateway/Stripe/Transaction.php';
// require_once '../app/PaymentGateway/Paddle/CustomerProfile.php';
// require_once '../app/PaymentGateway/Paddle/Transaction.php';
// require_once '../app/Notification/Email.php';

// Checks for namespaces required by the program
// spl_autoload_register(function ($class) {
//     $path = __DIR__ . '/../' .  lcfirst(str_replace('\\', '/', $class)) . '.php';

//     if (file_exists($path)) {
//         require $path;
//     }
// });

require __DIR__ . '/../vendor/autoload.php';

use App\PaymentGateway\Paddle\Transaction; // triggers autoloader

$paddleTransaction = new Transaction();

var_dump($paddleTransaction);

$id = new \Ramsey\Uuid\UuidFactory();

echo $id->uuid4();
