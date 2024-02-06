<?php
    error_reporting(E_ALL);
    require_once('func_select.php');
    $db = db_connect();

    $what = $_GET['what'];

    switch ($what) {
        case 'product':

            $id = $_GET['id'];
            $db->query("delete from products where id = '". $id ."'");

            $products = getData("select * from products where 1");

            echo json_encode($products, true);

            $db->close();

            break;  
    }