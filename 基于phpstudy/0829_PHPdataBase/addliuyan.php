<meta charset="UTF-8">

<?php 
    var_dump($_POST);

    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("mydb",$conn);

    mysql_query("SET NAMES UTF8");

    $sql = "INSERT INTO msg1 (title,content,pubtime) VALUES ('" .$_POST['title']. "','" .$_POST['content']. "'," .time(). ")";

    $re = mysql_query($sql);
    
    if($re ==1){
        echo "留言成功!";
    }else{
        echo "留言失败!";
    }

?>
