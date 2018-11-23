<?php

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/x-www-form-urlencoded; charset=UTF-8");
header("Access-Control-Allow-Methods:POST");
header("Access-Control-Max-Age:3600");
header("Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once("database.php");
include_once("clients.php");

$database = new Database();
$db = $database->getConnection();

$clients = new Clients($db);
 $data = json_decode(file_get_contents('php://input'));

 if (
     !empty($data->alias)&&
     !empty($data->first_name)&&
     !empty($data->last_name)&&
     !empty($data->email)&&
     !empty($data->telephon)&&
     !empty($data->sex)
     ) {
    $clients->alias = $data->alias;
    $clients->first_name = $data->first_name;
    $clients->last_name = $data->last_name;
    $clients->email = $data->email;
    $clients->telephon = $data->telephon;
    $clients->sex = $data->sex;
    $clients->created = date("Y-m-d H:i:s");

        if ($clients->create()) {
            http_response_code(201);
            echo json_encode(array("message" => "client was added"));
        }
        else{
            http_response_code(503);
            echo json_encode(array("message" => "Unable to add client"));
        }
 } else {
     http_response_code('400');
     echo json_encode(array("message"=>"Data is incomplete error"));
 }
 



