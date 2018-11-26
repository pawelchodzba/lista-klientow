<?php

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/x-www-form-urlencoded; charset=UTF-8");
header("Access-Control-Allow-Methods:POST");
header("Access-Control-Max-Age:3600");
header("Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once("database.php");
include_once("clients.php");
include_once("save/chengeInput.php");
include_once ("save/iteratioInpObj.php");



class Create extends Clients
{
    public function fowardData($Input, $Iteratio)
    { 
        $inpObj =  $Input->readInput('php://input');
        $inpArr =  $Input->setVars($this->arrClient(),$inpObj);
        $arr = $Iteratio->iteratio($inpArr, $this);
        $this->setValueProperties($arr);
        return ($this->create()) ? $this->message(["message" => "client was added"],'201') : $this->message(["message" => "Unable to add client", '503']) ;
    }
}
$database = new Database();
$db = $database->getConnection();
$create = new Create($db); 
$input = new chengeInput();
$iteratio = new IteratioInpObj(); 
$create->fowardData($input, $iteratio);




// $clients = new Clients($db);
//  $data = json_decode(file_get_contents('php://input'));
// print_r($data);
//extract();
//print_r($data);

//array_keys($data);
//$a = get_object_vars($data);


//print_r($alias);
//  if (
//      !empty($data->alias)&&
//      !empty($data->first_name)&&
//      !empty($data->last_name)&&
//      !empty($data->email)&&
//      !empty($data->telephon)&&
//      !empty($data->sex)
//      ) {
//     $clients->alias = $data->alias;
//     $clients->first_name = $data->first_name;
//     $clients->last_name = $data->last_name;
//     $clients->email = $data->email;
//     $clients->telephon = $data->telephon;
//     $clients->sex = $data->sex;
//     $clients->created = date("Y-m-d H:i:s");

//         if ($clients->create()) {
//             http_response_code(201);
//             echo json_encode(array("message" => "client was added"));
//         }
//         else{
//             http_response_code(503);
//             echo json_encode(array("message" => "Unable to add client"));
//         }
//  } else {
//      http_response_code('400');
//      echo json_encode(array("message"=>"Data is incomplete error"));
//  }
 



