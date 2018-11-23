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

$client->alias = $data->alias;
$client->first_name = $data->first_name;
$client->last_name = $data->last_name;
$client->email = $data->email;
$client->telephon = $data->telephon;
$client->sex = $data->sex;

if ($client->update()) {
    http_response_code(200);
    echo json_encode(array("message"=>"Data client was updated"));
}else{
    http_response_code(503);
    echo json_encode(array("message"=>"Unable to update"));
}