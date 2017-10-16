<meta charset="utf-8">
<?php 
		// 创建一个连接，连接到数据库服务器，账号，密码
		$conn = mysql_connect("localhost","root","root");

		// 选择一个库
		mysql_select_db("mydb",$conn);

		// 设置一下字符集，mysql_query就是执行SQL的意思
		mysql_query("SET NAMES UTF8");

        // 执行一条SQL语句，sql语句操作数据库，是独立的语言
        $sql = "SELECT*FROM msg1";
		$result = mysql_query($sql);
        
        while( $row = mysql_fetch_array($result)){
            print_r($row);
            echo $row['id'];
            echo $row['title'];
            echo '<h2><a href="msg.php?tid=' .$row['id']. '">' .$row['title']. '</a></h2>';

        }

	?>