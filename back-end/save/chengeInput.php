<?php
class chengeInput
{
    public function readInput($input)
    {
        $inObj = file_get_contents($input);
       return json_decode($inObj);

        
    }
    public function setVars($keys,$obj)
    {
        $vars = get_object_vars($obj);
        extract($vars);
        return compact(array_keys($keys));
    }
        
   
}
