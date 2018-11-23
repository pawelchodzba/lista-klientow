<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json; charset=UTF-8");
include_once 'database.php';
include_once 'clients.php';



//$clients = new Clients($db);
//$stmt = $clients->read();


class Read extends Clients
{
   // private   $clients_arr["records"] = [];
    public function checkAmountRow()
    {
       return  ($this->read()->rowCount()) ? $this->read() : null;
    }
          
    public function setResult()
    {
           $arrResult['records']=[]; 
        if ($stmt = $this->checkAmountRow()) {
            $keys = array_keys($this->arrClient());
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);        
                array_push($arrResult['records'], compact($keys));
            }
        }else{
            $arrResult = $this->message(["message"=>"nomber of rows is null"]);
        }
        
        return $this->message($arrResult);
    }
   
        
        

    
    
}
$database = new Database();
$db = $database->getConnection();

$name = new Read($db); 
$name->setResult();




//$num = $stmt->rowCount();

// if ($num>0) {
//     $clients_arr = array();
//     $clients_arr["records"] = array();

//     while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
//         extract($row);
//         $client_one = array(
//             "id" => $id,
//             "alias" => $alias,
//             "first_name" => $first_name,
//             "last_name" => $last_name,
//             "email" => $email,
//             "telephon" => $telephon,
//             "sex" => $sex
//         );
//         array_push($clients_arr['records'],$client_one);
        
//     }
//     http_response_code(200);
//      return print_r(json_encode($clients_arr));

    
// }else{
//     http_response_code(404);
//     return json_encode(array("message"=>"no clients found"));
// }
