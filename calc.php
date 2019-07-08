<?php


$arr = explode(',', $_POST['var']);

$result = 0;
for($i = 0; $i < count($arr); $i += 2){
    if($i < 2){
        $result = $arr[$i];
    }else{
        if($arr[$i - 1] == ' '){
            $result += $arr[$i]; 
        }

        if($arr[$i - 1] == '-'){
            $result -= $arr[$i]; 
        }

        if($arr[$i - 1] == '*'){
            $result *= $arr[$i]; 
        }

        if($arr[$i - 1] == '/'){
            $result /= $arr[$i]; 
        }
    }  
    
}

echo $result;
