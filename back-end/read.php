<?php
include_once 'database.php';
include_once 'clients.php';
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json; charset=UTF-8");

$database = new Database();
$db = $database->getConnection();

$clients = new Clients($db);

$stmt = $clients->read();

$num = $stmt->rowCount();

if ($num>0) {
    $clients_arr = array();
    $clients_arr["records"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $client_one = array(
            "id" => $id,
            "alias" => $alias,
            "first_name" => $first_name,
            "last_name" => $last_name,
            "email" => $email,
            "telephon" => $telephon,
            "sex" => $sex
        );
        array_push($clients_arr['records'],$client_one);
        
    }
    http_response_code(200);
     return print_r(json_encode($clients_arr));
//    print_r(json_encode($clients_arr));
//    return json_encode($clients_arr);
    
}else{
    http_response_code(404);
    return json_encode(array("message"=>"no clients found"));
}
