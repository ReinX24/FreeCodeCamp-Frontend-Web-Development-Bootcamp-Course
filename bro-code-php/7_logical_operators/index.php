<?php

    $child = false;
    $senior = true;
    $ticket = null;

    if ($child || $senior) {
        $ticket = 10;
    } else {
        $ticket = 15;
    }

    echo "The ticket price is \${$ticket}.";