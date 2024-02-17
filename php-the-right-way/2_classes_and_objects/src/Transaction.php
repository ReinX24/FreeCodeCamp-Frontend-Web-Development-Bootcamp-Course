<?php

declare(strict_types=1);

class Transaction
{
    // public ?float $amount; // the ? means that it could also be null
    private float $amount;
    private string $description;

    // Constructor for our Transaction class
    public function __construct(float $amount, string $description)
    {
        $this->amount = $amount;
        $this->description = $description;
    }

    public function addTax(float $rate): Transaction
    {
        $this->amount += $this->amount * $rate / 100;

        return $this; // having this enables method chaining
    }

    public function applyDiscount(float $rate): Transaction
    {
        $this->amount -= $this->amount * $rate / 100;

        return $this;
    }

    public function getAmount(): float
    {
        return $this->amount;
    }

    public function __destruct()
    {
        echo 'Desctruct ' . $this->description . '<br>';
    }
}
