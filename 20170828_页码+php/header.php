<?php 
    // header("Content-Type:text/json;charset=gb2312");
    header("haitao:kun");
    // header("Location:http://www.baidu.com");

    print_r($_SERVER["HTTP_USER_AGENT"]);

    if($_SERVER["HTTP_USER_AGENT"] == "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"){
        header("Location: http://www.baidu.com/ 
        ");
        exit;
        }


    $str = $_GET["str"];

    $a = file_get_contents("http://chongzhi.jd.com/json/order/search_searchPhone.action?mobile=".$str);
    
    echo $a;
?>