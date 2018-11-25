<?php
class IteratioInpObj
{
    public function iteratio($inpArr, $Client)
    {
        foreach ($inpArr as $key => $value) {
            if (empty($value)) {
                $Client->message(["message"=>"$key is empty"],'400');
                die();
            }
            $inpArr[$key] = $Client->sanitization($value);
        }
        return $inpArr;
    }
        
 
}
