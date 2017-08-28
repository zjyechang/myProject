<?php $html = <<<haitao
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    新闻替换内容
</body>
</html>
haitao;

echo $html;
    
    file_put_contents("demo.html",$html);//写数据

    echo "<br />下面内容是从demo中读取"
    file_get_contents("demo.html");

?>