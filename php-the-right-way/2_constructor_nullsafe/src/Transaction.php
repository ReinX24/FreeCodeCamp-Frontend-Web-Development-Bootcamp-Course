<?php

declare(strict_types=1);

class Transaction
{
    private ?Customer $customer = null;

    // Using constructor property promotion
    public function __construct(
        private float $amount,
        private string $description
    ) {
        $this->amount = $amount;
        $this->description = $description;
    }

    public function getCustomer(): ?Customer
    {
        return $this->customer;
    }
}
