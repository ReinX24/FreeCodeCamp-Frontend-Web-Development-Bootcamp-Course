<?php

function x()
{
    sleep(3);

    echo 'Done <br>';

    return 3;
}

switch (x()) {
    case 1:
        echo 1;
        break;

    case 2:
        echo 1;
        break;

    case 3:
        echo 1;
        break;
}

// $x = x();
// if ($x == 1) {
//     echo 1;
// } elseif ($x == 2) {
//     echo 2;
// } elseif ($x == 3) {
//     echo 3;
// } else {
//     echo 4;
// }

// $paymentStatuses = [1, 3, 0];
// foreach ($paymentStatuses as $paymentStatus) {
    // switch ($paymentStatus) {
        // case 1:
            // echo 'Paid';
            // break 2; // terminates both switch case and for each loop
            // continue 2; // continues and prints next switch statement and skips
            // the next iteration
            // break;

//         case 2:
//         case 3:
//             echo 'Payment Declined';
//             break;

//         case 4:
//             echo 'Pending Payment';
//             break;

//         default:
//             echo 'Unknown Payment Status';
//     }
//     echo '<br>';
// }
