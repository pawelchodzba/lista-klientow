<?php
Class Clients 
{
    private $connection;
    private $tab_name = "clients";

    public $id;
    public $alias;
    public $first_name;
    public $last_name;
    public $email;
    public $telephon;
    public $sex;
    
    private $arrInput;
  
    public function __construct(PDO $db)
    {
        $this->connection = $db;
    }
    public function read()     
    {
       $sql = "SELECT * FROM " . $this->tab_name . " ORDER BY id DESC";
       $stmp =  $this->connection->prepare($sql);
       $stmp->execute();
       return $stmp; 
    }
    public function create()
    {
        $sql = "INSERT INTO " . $this->tab_name. " SET alias=:alias, first_name=:first_name, last_name=:last_name, email=:email, telephon=:telephon, sex=:sex";
        return $this->connection->prepare($sql);
 
    }
    public function readOne()
    {
        $sql = "SELECT * FROM ".$this->tab_name. " WHERE id = ?";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(1,$this->id);
        $stmt->execute();
        return  $row = $stmt->fetch(PDO::FETCH_ASSOC);
    }
    public function update()
    {   
        $sql = "UPDATE ".$this->tab_name. " SET alias=:alias, first_name=:first_name, last_name=:last_name, email=:email, telephon=:telephon, sex=:sex WHERE id=:id";
        return $this->connection->prepare($sql);
    }
    public function delete()
    {
        $sql = "DELETE FROM ".$this->tab_name." WHERE id = ?";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(1, $this->id);
        return $this->exe($stmt) ? true : null;
   
    }
    public function keyProperties()           
    {
        return array_keys(get_object_vars($this));
    }
    public function message($arr,$statusCode)
    {
        http_response_code($statusCode); 
        return print_r(json_encode($arr)); 
    }
    public function setValueProperties($arrayAssoc)
    {
        $keys = $this->keyProperties();
        foreach ($arrayAssoc as $key => $value) {
            if (in_array($key,$keys)) {
                $this->{$key} = $value;
            }
        }
    }
    public function bindResult($stmt,$keyArrayInp)
    {
        foreach ($keyArrayInp as $key) {
            $stmt->bindParam(":".$key, $this->{$key});
        } 
    }
    public function exe($stmt)
    {
        return $stmt->execute();
    }
    public function sanitization($valueProperty)
    {
        return  htmlspecialchars(strip_tags($valueProperty));
    }
        
}
