<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Max-Age: 3600");
header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


include_once 'database.php';
include_once 'clients.php';
include_once("save/chengeInput.php");

 class Delete extends Clients
 {
    public function del($Input)
    {
        // $inObj = file_get_contents('php://input');
        // $json = json_decode($inObj);
       $json = $Input->readInput('php://input');
        $this->id = $json->id;
        $this->delete();
    }
         
 }
$database = new Database();
$db = $database->getConnection();
$del = new Delete($db); 
$input = new chengeInput();
$del->del($input);
