<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php 
    $a =300;
    function fun(){
        echo $a;
    }
    fun();//报错,得不到$a变量
    ?>
    
    

    <?php 
    $a =300;
    function fun(){
        $a = 300;
        echo $a;
    }
    fun();//可以得到
    ?>


<?php 
    $a =300;
    function fun(){
        // $a = 300;
        global $a; //外部的变量导入
        echo $a;
    }
    fun();//可以得到
    ?>
</body>
</html>