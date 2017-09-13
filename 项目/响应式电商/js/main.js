
// 登录后更改
$(function(){
    if(localStorage.getItem("token")){
        $(".yc-login").html("<a href='#' class='yc-ahover'>尊敬的"+localStorage.getItem("username")+"</a>&nbsp; <a href='javascript:;' class='yc-logout'>退出登录</a></sapn>");
    }
    // 退出登录
    $(".yc-logout").click(function(){
        localStorage.clear();
        location.reload();
    });
})


    // 滚动顶部栏隐藏
    var scroll = $(window).scrollTop();
    var $header = $("header");
    var headHeight = parseInt($("header").css("height"))-52;

    $(window).resize(function(){
        headHeight = parseInt($("header").css("height"))-52;
    })

$(window).scroll(function(){
    
    if($(window).scrollTop() < scroll){
        $header.stop(true).animate({"top":0},100);
        
    }else if($(window).scrollTop() > scroll){
        $header.stop(true).animate({"top":-(headHeight)},100);       
    }
    scroll = $(window).scrollTop();
    if(scroll<300){
        $(".yc-toTop").fadeOut(500);
        $header.find(".head-white").css("background","rgba(255,255,255,1)");        
    }else{
        $(".yc-toTop").fadeIn(500);
        $header.find(".head-white").css("background","rgba(255,255,255,0.6)");
    }
})
// 上天部分
$(".yc-toTop").click(function(){
    $("body").animate({"scrollTop":0},500);
})

// 搜索框部分
var searchIcon = document.querySelector(".yc-searchIcon");
var searchAnima = document.querySelector(".yc-searchAnime");
var searchValue = searchAnima.querySelector("input");
var flag = true;

    searchIcon.onclick = function(){
        if(flag){
            searchAnima.style.left = "0px";
            searchAnima.style.transition="0.1s";
            flag = !flag;
        }else if(!$(".search").val() && !flag){
        searchAnima.style.left = "100%"; 
            searchAnima.style.transition="0.5s";            
            flag = !flag;                       
        }else if($(".search").val() && !flag){
            window.location.href = "detail.html?cat_id="+$(".search").val();
        }
    }

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
    $(".yc-cart").click(function(){
        console.log(localStorage.token)
        if(!localStorage.getItem("token")){
            alert("请登录!")
            location.href="login.html";
        }else{
            location.href = "mycart.html";
        }
    })


    // 导航菜单
    $.get("http://h6.duchengjiu.top/shop/api_cat.php",function(data){
        var obj = data;
        for (var i=0;i<obj.data.length;i++){
            $(".head-white .yc-itemul").append("<li><a class='tap-' href='list.html?cat_id="+obj.data[i].cat_id+"'>" +obj.data[i].cat_name+ "</a></li>")
        }
    })
    
    $(".toptab li").mouseenter(function(){
        $(this).find(".yc-itemNav").stop(true).slideDown(1);
    })
    $(".toptab li").mouseleave(function(){
        $(this).find(".yc-itemNav").stop(true).slideUp(500);
    })