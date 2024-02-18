<?php

class Customer
{
    private ?PaymentProfile $paymentProfile = null;

    public function getPaymentProfile(): ?PaymentProfile
    {
        return $this->paymentProfile;
    }
}
