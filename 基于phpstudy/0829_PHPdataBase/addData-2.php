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
    $xingming = $_GET["xingming"];
    $nianling = $_GET["nianling"];
    $qqhao = $_GET["qqhao"];
    
    echo $xingming.$nianling.$qqhao;

 // 创建一个连接，连接到数据库服务器，账号，密码
 $conn = mysql_connect("localhost","root","root");
 
     // 选择一个库
     mysql_select_db("kaoladeshujuku",$conn);
 
     // 设置一下字符集，mysql_query就是执行SQL的意思
     mysql_query("SET NAMES UTF8");
 
     // 执行一条SQL语句，sql语句操作数据库，是独立的语言
     $result = mysql_query("INSERT INTO xuesheng(xingming,nianling,qqhao) VALUES('{$xingming}',{$nianling},{$qqhao})");
     
     // 判断是否成功
     if($result == 1){
         echo "数据成功插入";
     }else{
         echo "数据错误，请联系管理员";
     }
     
     mysql_close($conn);

    ?>
</body>
</html>