<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    .orange{
        background:orange;
    }
    </style>
</head>
<body>
    <?php 
    $arr = array("东","南","西","北","中");

    // 打印数组类型
    var_dump($arr);

    echo "<br />";
    //打印数组结构
    echo "<pre>";
    print_r($arr);
    echo "</pre>";
    
    // 数组长度
    echo count($arr);
    
    // 遍历数组
    echo "<ul>";
    for($i=0 ;$i<count($arr);$i++){
        echo "<li>{$arr[$i]}</li>";  //用大括号包裹的变量可以改变，
        //单引号不行，只有双引号可以
    }
    echo "</ul>";
    ?>


    <?php 
    $a = array("哈哈","嘻嘻","呵呵","桀桀");
    ?>

    <ul>
    <?php 
        for($i =0 ;$i<count($a);$i++){
            echo "<li>".$a[$i]."</li>";//拼接方法
        }
    ?>
    </ul>
  


    <table>
        <?php 
        for($i=0;$i<20;$i++){
        ?>

        <tr <?php if($i % 2 ==0){echo "class='orange'";} ?>>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
        </tr>

        <?php
        }
        ?>
        
        
        
        <?php 
        for($i=0;$i<20;i++){
            for($j = 1;$j <=6 ;$j++){
                echo "<h{$j}>哈哈</h{$j}>";
            }
        }
        ?>

    </table>
</body>
</html>