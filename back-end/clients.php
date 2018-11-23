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

    public function __construct($db)
    {
        $this->connection = $db;
    }
    public function read()     
    {
       $sql = "SELECT * FROM " . $this->tab_name . " ORDER BY id DESC";
       $stmp =  $this->connection->prepare($sql);
       $stmp->execute();
      // print_r($stmp);
       return $stmp; 
    }
    public function create()
    {
     
        $sql = "INSERT INTO " . $this->tab_name. " SET alias=:alias, first_name=:first_name, last_name=:last_name, email=:email, telephon=:telephon, sex=:sex";
        $stmt = $this->connection->prepare($sql);
        
        $this->alias = htmlspecialchars(strip_tags($this->alias));
        $this->first_name = htmlspecialchars(strip_tags($this->first_name));
        $this->last_name = htmlspecialchars(strip_tags($this->last_name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->telephon = htmlspecialchars(strip_tags($this->telephon));
        $this->sex = htmlspecialchars(strip_tags($this->sex));

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

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $this->alias = $row['alias'];
        $this->first_name = $row['first_name'];
        $this->last_name = $row['last_name'];
        $this->email = $row['email'];
        $this->telephon = $row['telephon'];
        $this->sex = $row['sex'];
      
    }
    public function update()
    {
        $sql = "UPDATE ".$this->tab_name. " SET alias=:alias, first_name=:first_name, last_name=:last_name, email=:email, telephon=:telephon, sex=:sex WHERE id=:id";

        $this->alias = htmlspecialchars(strip_tags($this->alias));
        $this->first_name = htmlspecialchars(strip_tags($this->first_name));
        $this->last_name = htmlspecialchars(strip_tags($this->last_name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->telephon = htmlspecialchars(strip_tags($this->telephon));
        $this->sex = htmlspecialchars(strip_tags($this->sex));
        $this->id = htmlspecialchars(strip_tags($this->id));

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
        
        
        

        
     
}