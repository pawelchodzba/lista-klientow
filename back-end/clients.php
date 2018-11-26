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
        $stmt = $this->connection->prepare($sql);
        
        $stmt->bindParam(":alias", $this->alias);
        $stmt->bindParam(":first_name", $this->first_name);
        $stmt->bindParam(":last_name", $this->last_name);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":telephon", $this->telephon);
        $stmt->bindParam(":sex", $this->sex);
       
        if ($stmt->execute()) {
            return true;
        }
        return false;
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

        $stmt = $this->connection->prepare($sql);

        $stmt->bindParam(":alias", $this->alias);
        $stmt->bindParam(":first_name", $this->first_name);
        $stmt->bindParam(":last_name", $this->last_name);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":telephon", $this->telephon);
        $stmt->bindParam(":sex", $this->sex);
        $stmt->bindParam(":id", $this->id);

        if($stmt->execute()){
            return true;
        }
    return false;    
    }
    public function delete()
    {
        $sql = "DELETE FROM ".$this->tab_name." WHERE id = ?";
        $stmt = $this->connection->prepare($sql);
        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(1, $this->id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
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
        foreach ($arrayAssoc as $key => $value) {
            if (in_array($key,$this->keyProperties())) {
                $this->{$key} = $value;
            }
        }
      
    }
    public function sanitization($valueProperty)
    {
        return  htmlspecialchars(strip_tags($valueProperty));
    }
        
}
