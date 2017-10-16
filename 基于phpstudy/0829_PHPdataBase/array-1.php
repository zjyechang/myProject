<meta charset="UTF-8">
<?php 
$arr = array(
    "name"=>"大白   h",
    "age"=>"19",
    "sex"=>"man",
    "qq"=>"2121212211",
);

     print_r($arr); 
     echo "<br />";
     foreach($arr as $key => $value){
        echo $key."是".$value."<br />";
    } 

    $a = array("东","南","西","北","中");

    $b = json_encode($a);//转码
    
    echo "<br />";
    print_r($b);

    $c = array("发","白");
    $d = array("东","西","北","中","西","北");

    echo "<br />";
    print_r(array_merge($a,$c));//合并
    echo "<br />";
    print_r(array_unique($d));//去重复
    echo "<br />";

    print_r(array_diff($a,$d));//返回当前数组中有的，后面数字没有的
    
    array_push($a,"白");
    var_dump($a);
    echo "<br />";

    array_pop($a);
    var_dump($a);
    echo "<br />";

    array_unshift($a,"白");
    var_dump($a);
    echo "<br />";

    array_shift($a);
    var_dump($a);
    echo "<br />";
?>