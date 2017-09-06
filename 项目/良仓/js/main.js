// 登录后更改
$(function(){
    if(localStorage.getItem("token")){
        $(".login").html("<p>尊敬的"+localStorage.getItem("username")+"&nbsp; <a href='javascript:;' class='logout'>退出登录</a></p>");
    }
    // 退出登录
    $(".logout").click(function(){
        localStorage.clear();
        location.reload();
    });
})


    // 滚动顶部栏隐藏
    var scroll = $(window).scrollTop();
    var $head = $(".wrap-head");
    var $toptab = $(".wrap-toptab")
$(window).scroll(function(){
    
    if($(window).scrollTop() < scroll){
        $head.stop(true).animate({"top":0},100);
        $toptab.stop(true).animate({"top":56},100);
        
    }else if($(window).scrollTop() > scroll){
        $head.stop(true).animate({"top":-56},100);
        $toptab.stop(true).animate({"top":0},100);        
    }
    scroll = $(window).scrollTop();
    if(scroll<300){
        $(".toTop").fadeOut(500);
    }else{
        $(".toTop").fadeIn(500);        
    }
})
// 上天部分
$(".toTop").click(function(){
    $("body").animate({"scrollTop":0},500);
})





// 搜索框部分
var searchbox = document.getElementsByClassName("searchbox")[0];
var searchIcon = document.getElementsByClassName("searchIcon")[0];
var searchAnima = searchbox.getElementsByClassName("searchAnime")[0];
var flag = true;

    searchIcon.onclick = function(){
        if(flag){
            searchAnima.style.left = "14px";
            searchAnima.style.transition="0.1s";
            flag = !flag;
        }else if(!$(".search").val() && !flag){
        searchAnima.style.left = "280px"; 
            searchAnima.style.transition="0.5s";            
            flag = !flag;                       
        }else if($(".search").val() && !flag){

            window.location.href = "detail.html?cat_id="+$(".search").val();

        }
    }


    
    // 轮播图
    var $carousel = $(".carouselContainer");
    $carousel.find("li").eq(0).clone().appendTo($(".carouselContainer ul"));
    var length = $carousel.find("li").length;
    var idx = 0;

    var timer = setInterval(function(){
        idx++;
        move();
    },2000);
    $(".leftBtn").click(function(){
        idx--;
        move();
    })
    $(".rightBtn").click(function(){
        idx++;
        move();
    })
    $(".carousel").mouseenter(function(){
        clearInterval(timer);
    })
    $(".actionpoint").mouseenter(function(){
        clearInterval(timer);        
    })
    $(".carousel").mouseleave(function(){
        timer = setInterval(function(){
            idx++;
            move();
        },2000);
    })
    $(".actionpoint").mouseleave(function(){
        timer = setInterval(function(){
            idx++;
            move();
        },2000);      
    })

    function move() {
        if(idx > length-1){
            idx = 1;
            $carousel.css("left",0)
        }
        if(idx < 0) {
            idx = length-2;
            $carousel.css("left",-idx*1000-1000)            
        }
        if(idx == length-1){
            $(".actionpoint li:first").addClass("cur").siblings().removeClass("cur");
        }
        $carousel.animate({"left":-idx*1000},1000);
        
        $(".actionpoint li").eq(idx).addClass("cur").siblings().removeClass("cur");
    }
    
    $(".actionpoint").find("li").each(function(i){
        var j = i;
        $(".actionpoint").find("li").eq(i).click(function(){
            idx = j;
            move();
        })

    }
    )

    
    


// var $ = {
//     ajax: function(option){
        
//         var dataType = option.dataType;
//         var url = option.url;
//         if(url == undefined){
//             throw new Error("地址有问题");
//             return;
//         }
//         var type = option.type || "GET"



//         var xhr = null;
//         // 能力判断
//         if( window.XMLHttpRequest){
//             xhr = new XMLHttpRequest();
//         }else{
//             xhr = new ActiveXObject("Microsoft.XMLHTTP");
//         }
//         // 当准备状态值改变是时触发事件
//         xhr.onreadystatechange = function(){
//             if(xhr.readyState == 4){

//                 if(xhr.status>=200 && xhr.status<300 || xhr.status ==304){

//                     if( (typeof option.success) === "function"){
//                         // 响应结果
//                         var response = '';
//                         if (dataType == "string"){
//                             response = xhr.responseText;
//                         }else if( dataType == "json"){
//                             // 将字符串反序列化
//                             response = JSON.parse(xhr.responseText)
//                         }
                        
//                         option.success( response );
//                     }
//                 }
//             }
//         }


//         xhr.open(type,url,true)
//         xhr.send(null);


//         }
//     }





         // 页面导航
    $.get("http://h6.duchengjiu.top/shop/api_cat.php",function(data){
        var obj = data;
        for (var i=0;i<obj.data.length;i++){
            $(".toptab .itemul").append("<li><a class='tap-' href='list.html?cat_id="+obj.data[i].cat_id+"'>" +obj.data[i].cat_name+ "</a></li>")
        }
    })
    
    $(".toptab li").mouseenter(function(){
        $(this).find(".item").stop(true).slideDown(1);
    })
    $(".toptab li").mouseleave(function(){
        $(this).find(".item").stop(true).slideUp(500);
    })



    // 购物车跳转
    $("li.cart").click(function(){
        console.log(localStorage.token)
        if(!localStorage.getItem("token")){
            alert("请登录!")
            location.href="sign.html";
        }else{
            location.href = "mycart.html";
        }
    })

    //手运动
    $(".hand").mouseenter(function(){
        
        $(".hand").animate({"left":-15},400);
        $(".hand").animate({"left":0},400);
        $(".hand").animate({"left":-13},300);
        $(".hand").animate({"left":0},300);
        
    })
