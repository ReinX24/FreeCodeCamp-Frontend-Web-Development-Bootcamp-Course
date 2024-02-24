<?php

declare(strict_types=1);

namespace App\PaymentGateway\Paddle;

use App\Enums\Status;

class Transaction
{
    private string $status;

    public function __construct()
    {
        // var_dump(Transaction::STATUS_PAID);
        // var_dump(self::STATUS_PAID); // self - current class

        // $this->setStatus('pending');
        // $this->setStatus(self::STATUS_PENDING);

        $this->setStatus(Status::PENDING);
    }

    public function setStatus(string $status):self {
        // Sets new status string and returns an object with updated attributes
        // Checks if the $status parameter is part of the stored valid statuses
        if (!isset(Status::ALL_STATUSES[$status])) {
            throw new \InvalidArgumentException;
        }
        $this->status = $status;

        return $this;
    }
}
