<meta charset="UTF-8">
<?php 
    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("mydb",$conn);

    mysql_query("SET NAMES UTF-8");

    $tid = $_GET["tid"];

    $sql = "SELECT*FROM msg1 WHERE id=".$tid;

    $re = mysql_query($sql);

    $row = mysql_fetch_array($re);

    echo '<h1>'.$row['title']. '</h1>';
    echo '<p>' .$row['content']. '</p>'

?>
