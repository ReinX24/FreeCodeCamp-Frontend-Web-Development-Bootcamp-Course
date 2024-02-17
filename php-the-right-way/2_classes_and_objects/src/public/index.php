<?php

declare(strict_types=1);

require_once '../Transaction.php';

// Classes & Objects
// $transaction = new Transaction(100, 'Transaction 1');

// $transaction->amount = 15;

// var_dump($transaction);

// $transaction->addTax(8);
// $transaction->applyDiscount(10);

// var_dump($transaction->amount);
// var_dump($transaction->description);
// var_dump($transaction->getAmount());

// $transaction = (new Transaction(100, 'Transaction 1'))
//     ->addTax(8)
//     ->applyDiscount(10)
//     ->getAmount();

// var_dump($transaction);

// $transaction1 = (new Transaction(100, 'Transaction 1'))
//     ->addTax(8)
//     ->applyDiscount(10);

// var_dump($transaction1->getAmount());

// $amount = $transaction1->getAmount();

// unset($transaction1); // destroys the Transaction object
// $transaction1 = null; // another way of destroying an object
// exit;

// var_dump($amount);

// $transaction2 = (new Transaction(200, 'Transaction 2'))
//     ->addTax(8)
//     ->applyDiscount(15);

// var_dump($transaction1->getAmount());
// var_dump($transaction2->getAmount());

// $str = '{"a":1, "b":2, "c":3}';

// $arr = json_decode($str);

// print_r($arr);
// var_dump($arr->a);
// var_dump($arr->b);
// var_dump($arr->c);

// $obj = new stdClass();

// $obj->a = 1;
// $obj->b = 2;
// var_dump($obj);

// $arr = [1, 2, 3];
// var_dump((object) $arr); // converts array into an object, indexes are now keys
// $object = (object) $arr;

// var_dump($object);
// var_dump($object->{0});
// var_dump($object->{1});
// var_dump($object->{2});

// $object = (object) 5;
// var_dump($object->scalar);

$object = (object) null;
var_dump($object);
