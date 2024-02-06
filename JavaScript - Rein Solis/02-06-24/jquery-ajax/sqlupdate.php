<?php
    error_reporting(E_ALL);
    require_once('func_select.php');
    $db = db_connect();

    $what = $_GET['what'];
    $today = date('Y-m-d h:i:s');

    switch($what) {
        case 'product':

            $id = $_GET['id'];
            $db->query("update products set product_name='".$_POST['product_name']."', price='".$_POST['product_price']."', description='".$_POST['description']."', updated_at='".$today."' where id = '".$id."'");

            $product = getDataById("products", $id);

            echo json_encode($product);
            // echo "update products set product_name='".$_POST['product_name']."', price='".$_POST['product_price']."', description='".$_POST['description']."', updated_at='".$today."' where id = '".$id."'";
            break;
    }