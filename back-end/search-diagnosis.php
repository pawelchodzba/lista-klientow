<?php



header('Access-Control-Allow-Origin: *');
require_once "lacznoscBd.php";	
	
$polaczenie = new mysqli($host, $db_user, $db_password, $db_name)	;
$polaczenie->set_charset("utf8");
if ($polaczenie->connect_errno!=0)
{
	echo "ERROR".$polaczenie->connect_errno;
}else{
  // print_r($_GET);
  if ($_POST) {print_r($_POST);
      # code...
  }
  if ($_GET) {print_r($_GET);
   echo "get";
} 
   // print_r($_REQUEST);

  // echo 'php';
   //$post=new File_get_contents();
    // $mysql=new Query_like($polaczenie);
    // $mysql->query_like([$post->get_one_string()]);
    // $loop= new Create_tab_result();
    // $loop->loop_fetch_arr($mysql->query_results()[0]);
    // $show=new Show_json($loop->get_tab_obj());
    // $show->print_json();
}

class File_get_contents {
   function __construct(){
  
    }
    private  $input_string; 

   public function chenge_on_json(){ 
    return json_decode(file_get_contents("php://input"));
   }
   public function get_one_string(){ 
    return @$this->chenge_on_json()->email;
   }
}
class Query_like {
    function __construct($conect){
        $this->conect = $conect;
    }
    private $conect;
    private $query_results=[];

    public function query_like($strings){
        $str=$strings[0];
        $this->add_result($this->conect->query("SELECT nazwa, data, check_date FROM plan WHERE nazwa LIKE '%$str%'"));
    }
    public function add_result($query_result){
        array_push($this->query_results,$query_result);
    }
    public function query_results(){
        return $this->query_results;
    }

}
class Create_tab_result{
    function __construct(){}
    public $tab=[];
    public function loop_fetch_arr($result_query){
       
        while($title_cols=mysqli_fetch_array($result_query)){
            array_push($this->tab,(object)[
                "nazwa"=>$title_cols['nazwa'],
                "data"=>$title_cols['data'],
                "check_date"=>$title_cols['check_date']
            ]); 
        }
    }
    public function get_tab_obj(){
        return $this->tab;
    }
}
class Show_json{
    function __construct($arr){
       $this->arr=$arr;  
    }
    public $arr;
    public function print_json(){
       return print_r(json_encode($this->arr));
   }
}



