<?php 
    $zhuangtai = $_GET["zhuangtai"];

    //创建一个连接，连接那个数据库服务器，用户名，密码
    $conn = mysql_connect("localhost","root","root");
    
    //选择一个数据库
    mysql_select_db("kaoladeshujuku",$conn);
    
    //设置一下字符集 mysql_query就是执行SQL的意思
    mysql_query("SET NAMES UTF8");
    
    //查询
    $result = mysql_query("SELECT * FROM xuexizhuangkuang WHERE timu1 = '{$zhuangtai}'");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
<h1>本页面有状态的get参数</h1>
<select name="" id="">
    <option <?php if($zhuangtai=="非常明白"){echo "selected";} ?>value="非常明白">非常明白</option>
    <option <?php if($zhuangtai=="比较明白"){echo "selected";} ?>value="比较明白">比较明白</option>
    <option <?php if($zhuangtai=="一般"){echo "selected";} ?>value="一般">一般</option>
    <option <?php if($zhuangtai=="懵逼"){echo "selected";} ?>value="懵逼">懵逼</option>
    <option <?php if($zhuangtai=="非常懵逼"){echo "selected";} ?>value="非常懵逼">非常懵逼</option>
    <option <?php if($zhuangtai=="跳楼"){echo "selected";} ?>value="跳楼">跳楼</option>
    
</select>

<script>
    var oSelect = document.getElementsByTagName("select")[0];


    oSelect.onchange = function(){
        // alert("值被改变"+this.value);
        location.href = "_GETxueyuanzhuangtai.php?zhuangtai="+this.value;

    }

</script>

<table border="1">
    <tr>
        <td>状态</td>
        <td>速度</td>
        <td>建议</td>
    </tr>
    <?php 
    while( $row = mysql_fetch_array($result)){

        ?>
        <tr>
            <td><?php echo $row["timu1"] ?></td>
            <td><?php echo $row["timu2"] ?></td>
            <td><?php echo $row["timu3"] ?></td>            
        </tr>
    <?php }
        mysql_close($conn);
    ?>
</table>

</body>
</html>