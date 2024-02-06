<?php
    error_reporting(E_ALL);
    require_once('func_select.php');
    $db = db_connect();

    $what = $_GET['what'];

    switch($what) {
        case 'product':
            
            $id = $_GET['id'];
            $product = getDataById("products", $id);
            echo json_encode($product, true);

            break;
    }