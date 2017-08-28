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
    echo 1+2%6*8;

    echo 1."2"*4;//18
    
    echo 1."2"*4;//16

    echo 2."3"+4;

    echo true && !false || false; //1

    echo 6 == "6";//1

    

    $a =17;
    $b = $a++ + ++$a +$a;
    echo $b;//55  17+19+19
    ?>
</body>
</html>