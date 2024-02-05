<?php
    error_reporting(E_ALL);
    require_once('func_select.php');
    $db = db_connect();

    $what = $_GET['what'];
    $today = date('Y-m-d h:i:s');

    switch($what) {
        case 'product':

            $db->query("insert into products (product_name, price, photo, description, created_at, updated_at) values ('".$_POST['product_name']."', '".$_POST['product_price']."', '', '".$_POST['description']."', '".$today."', '".$today."')");

            $db->close();

            break;

        default:
            # code...
            break;
    }