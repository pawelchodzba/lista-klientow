<?php
class chengeInput
{
    public function readInput($input,$keys)
    {
        $inObj = file_get_contents($input);
        $json = json_decode($inObj);
        $vars = get_object_vars($json);
        extract($vars);
        return compact(array_keys($keys));
    }
   
}
