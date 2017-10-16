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
    
    //连接数据库
    //数据库用户名root，密码root，本地localhost

    $con = mysql_connect("localhost","root","root");


    // 选择连接哪个库
        mysql_select_db("mydb",$con);

    //执行SQL语句，把检索的结果放入$result变量中
    $result = mysql_query("SELECT * FROM TONGXUE");

    //循环读取
    while( $row = mysql_fetch_array($result));
    echo "姓名：".$row["xingming"];
    echo "<br />";
    echo "QQ:".$row["qqhao"];
    echo "<br />";
    echo "手机：".$row["shoujihao"];
    echo "<br />";
    
    

    //关闭数据库
    mysql_close($con);
    
    ?>
</body>
</html>