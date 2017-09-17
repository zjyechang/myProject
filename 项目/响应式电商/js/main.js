
// 登录后更改
$(function(){
    if(localStorage.getItem("token")){
        $(".yc-login").html("<a href='#' class='yc-ahover'>尊敬的"+localStorage.getItem("username")+"</a>&nbsp; <a href='javascript:;' class='yc-logout'>退出登录</a><a href='order.html' class='ahover'>查看已买到的宝贝</a>"); 
    }
    // 退出登录
    $(".yc-logout").click(function(){
        localStorage.clear();
        location.reload();
    });



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
        $header.find(".head-white").css("background","rgba(255,255,255,0.8)");
    }
})
// 上天部分
$(".yc-toTop").click(function(){
    $("body").animate({"scrollTop":0},1000);
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
            return;
        }else if(!searchValue.value && !flag){
            searchAnima.style.left = "100%"; 
            searchAnima.style.transition="0.5s";            
            flag = !flag;
            return;
        }else if(searchValue.value && !flag){
            searchAjax();
        }
    }
        searchValue.onkeydown = function(event){
            event = event || window.event;
            // console.log(event.keyCode)
            if(event.keyCode == 13 && !flag){
                searchAjax();
            }
            return;
        }
        function searchAjax(){
            $.ajax({
                "url": "http://h6.duchengjiu.top/shop/api_goods.php",
                "type": "GET",
                "datatype": "json",
                "data": {
                    "search_text": searchValue.value,
                },
                "success": function(response){
                    if(response.code == 0){
                        console.log(response)
                        var userSearch = {};
                        for(var i =0; i<response.data.length;i++){
                            userSearch[i] = [response.data[i].cat_id,response.data[i].goods_id];
                        }
                        userSearch = JSON.stringify(userSearch);
                        var obj = localStorage.setItem("userSearch",userSearch);
                        window.location.href = "search.html";
                    }else{
                        layer.msg('你搜的都是些什么？')
                    }
                }
            })
        }


    // 购物车跳转
    function addToCart(){
        if(!localStorage.getItem("token")){
            layer.confirm('您还没有登录哦！', {btn: ['登录', '取消'],btn1:function(){
                if(location.href.substr(-10) == "login.html"){
                    layer.msg("已经在登录页面了!");
                    return
                }else{
                    location.href = "login.html#callback="+location.href;
                }
            }}
        );
        }else{
            location.href = "mycart.html";
        }
    }
    $(".yc-cart").click(addToCart)
    


    // 导航菜单
    $.get("http://h6.duchengjiu.top/shop/api_cat.php",function(response){
        var obj = response;
        for (var i=0;i<obj.data.length;i++){
            $(".head-white .yc-itemNav ul").append("<li><a href='list.html?cat_id="+obj.data[i].cat_id+"'><img src='./images/"+(i+1)+".png'>" +obj.data[i].cat_name+ "</a></li>")
        }
    })
    
    $("li.yc-subli").mouseenter(function(){
        $(this).find(".yc-itemNav").stop(true).slideDown(1);
    })
    $("li.yc-subli").mouseleave(function(){
        $(this).find(".yc-itemNav").stop(true).slideUp(500);
    
    $("li.yc-subli").click(function(){
        $("yc-itemNav").slideToggle();
    });
    })

    // 购物车内容
    function getCart(){
        $.ajax({
            "type": "GET",
            "url": "http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.token,
            "dataType": "json",
            "success": function (response) {
                var carthtml="";
                if(!!response.data.length){
                    
                    for(var i=0; i<response.data.length ;i++){
                    var obj = response.data[i];
                    carthtml +=`<div><img src="${obj.goods_thumb}" alt=""><span>${obj.goods_name}</span></div>`
                    }
                    // var cartmore = `<span class="yc-cart-num"></span>`
                    $(".yc-cart-num").text(response.data.length);
                    $(".yc-cart-item").html(carthtml).css("padding","20px");
                }
            }
        })
    }
    getCart();
})