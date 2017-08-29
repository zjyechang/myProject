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
    // 创建一个连接，连接到数据库服务器，账号，密码
    $conn = mysql_connect("localhost","root","root");

    // 选择一个库
    mysql_select_db("kaoladeshujuku",$conn);

    // 设置一下字符集，mysql_query就是执行SQL的意思
    mysql_query("SET NAMES UTF8");

    // 执行一条SQL语句，sql语句操作数据库，是独立的语言
    $result = mysql_query("SELECT*FROM xuesheng");
    
    // $result很像js里的类数组对象，但还不是数组
    // mysql_fetch_array这个函数能把$result混沌状态的结果一条一条转化为数组
    while( $row = mysql_fetch_array($result) ){
        print_r($row);
        echo "<br />";
    }


    // 关闭数据库
    mysql_close($conn);
    ?>
</body>
</html>