<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once 'database.php';
include_once 'clients.php';

$database = new Database();
$db = $database->getConnection();

$client = new Clients($db);

$client->id = isset($_GET['id']) ? $_GET['id'] : die();

$client->readOne();

if ($client->alias !=null) {
    $client_arr = array(
        "alias"=> $client->alias,
        "first_name"=> $client->first_name,
        "last_name"=> $client->last_name,
        "email"=> $client->email,
        "telephon"=> $client->telephon,
        "sex"=> $client->sex
    );
    http_response_code(200);
    echo json_encode($client_arr);
}else{
    http_response_code(404);
    echo json_encode(array("message"=>"Client does not exist"));
}