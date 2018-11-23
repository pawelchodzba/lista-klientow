<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Max-Age: 3600");
header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


include_once 'database.php';
include_once 'clients.php';

$database = new Database();
$db = $database->getConnection();

$client = new Clients($db);

$data  = json_decode(file_get_contents("php://input"));

$client->id = $data->id;

if ($client->delete()) {
    http_response_code(200);
    echo json_encode(array("message"=>"data client's was deleted"));
}else{
    http_response_code(503);
    echo json_encode(array("message"=>"Unable to delete"));
}