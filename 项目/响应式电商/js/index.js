$(function(){

    // 轮播图
    var $imglis = $(".yc-imageslist");
    var $imgs = $imglis.find("img");
    var $chips = $(".yc-chips");
    var imgWidth = parseInt($imglis.css("width"));
    var imgHeight = imgWidth*720/1920;
    $(".yc-carousel").css("height",imgHeight);
    var $ycCarou = parseInt($(".carousel-inner").css("width"));
    $(".carousel-inner").css("height",$ycCarou/864*324+"px");
    var idx = 0;
    var lock = true;
    
    $(window).resize(function(){
        imgWidth = parseInt($imglis.css("width"));
        imgHeight = imgWidth*720/1920;        
        $(".yc-carousel").css("height",imgHeight);
        $ycCarou = parseInt($(".carousel-inner").css("width"));
        $(".carousel-inner").css("height",$ycCarou/864*324+"px");
    })

    function change(shit){
        // 轮播图cd
        if(!lock) return;
        var chipwidth = imgWidth/20;
        var chipheight = imgHeight/10;
        for(var rows = 0;rows<20;rows++){
            for(var cols = 0; cols<10 ;cols++){
                var imgW = chipwidth*rows;
                var imgH = chipheight*cols;
                $("<div></div>")
                .css({
                    "width": chipwidth+"px",
                    "height": chipheight+"px",
                    "top": imgH+"px",
                    "left": imgW+"px",
                    "backgroundImage": "url('"+$imgs.eq(idx).attr("src")+"')",
                    "backgroundSize": imgWidth+"px "+imgHeight+"px",
                    "backgroundPosition": -imgW+"px " + (-imgH)+"px",
                }).appendTo($chips)
            }
        }

        // 第二步，碎片运动
        setTimeout(function(){
            $chips.find("div").each(function(i){
                $(this).css({
                    "transform": "rotateX(" + (Math.random()*360-180) + "deg) rotateY(" +(Math.random()*360-180)+ "deg) translateZ(600px)",
                    "opacity": 0,
                });
            })
        },10)


        //第三步，轮播图切换
        idx += shit;
        // 信号量的判断
        if(idx<0) idx=$imgs.length-1;
        if(idx>$imgs.length-1) idx = 0;

        $imglis.find("li").eq(idx).addClass("yc-cur").siblings().removeClass("yc-cur");
        $(".yc-circles li").eq(idx).addClass("yc-active").siblings().removeClass("yc-active");
        
        lock = false;

        //第四步，清空并节流
        setTimeout(function(){
            $chips.html("");
            lock = true;
        },3000)
    }


    $("#yc-rightBtn").click(function(){change(1)});

    $("#yc-leftBtn").click(function(){change(-1);});
    
    var timer = setInterval(function(){change(1);},3000);

    $(".yc-carousel").mouseenter(function(){
        clearInterval(timer);
    })

    $(".yc-carousel").mouseleave(function(){
        timer = setInterval(function(){
            change(1);
        },3000);
    })

    $(".yc-circles li").each(function(i){
        var j=i;
        $(this).click(function(){
            change(j);
        });
    })


// ajax调用添加样品
$.ajax({
    "url": "http://h6.duchengjiu.top/shop/api_goods.php",
    "type": "GET",
    "datatype": "json",
    "success": function(response){
        // console.log(response);
        var html = "";
        for(let i=0;i<4;i++){
            var obj = response.data[i];
            html += `<div class="col-xs-6 col-sm-6 col-md-3">
                        <div class="thumbnail">
                            <a class="yc-hoverOther" href="detail.html?goods_id=${obj.goods_id}"><img src="${obj.goods_thumb}"></a>
                            <a href="#" class="yc-addToCart" role="button"><span class="glyphicon glyphicon-shopping-cart"></span>添加购物车</a>
                            <div class="caption">
                            <a href="detail.html?goods_id=${obj.goods_id}"><h4>${obj.goods_name}</h4></a>
                            <p>${obj.goods_desc}</p>
                            <p class="yc-price">￥${obj.price}</p>
                            <p><ul class="clearfix"><li><span class="fa fa-star"></span></li>
                            <li><span class="fa fa-star"></span></li>
                            <li><span class="fa fa-star"></span></li>
                            <li><span class="fa fa-star yc-selected"></span></li>
                            <li><span class="fa fa-star yc-selected"></span></li>
                            <li class="yc-like-icon"><span class="fa fa-heart yc-selected"></span></li></ul></p>
                            <input type="hidden" value=${obj.goods_id} class="yc-goodsId">
                            </div>
                        </div>
                    </div>`
        }
        $(".yc-productlist").html(html);


        // 添加购物车
        $(".yc-addToCart").each(function(i){
            var j =i;
        $(this).click(function(){
            if(!localStorage.getItem("token")){
                layer.confirm('您还没有登录哦！', {btn: ['登录', '取消'],btn1:function(){
                    location.href = "login.html#callback="+location.href;
                }}
            );
            return;
            }else{
                var goods_id = $(".yc-addToCart").parent().find(".yc-goodsId").eq(j).val();
                var goods_number = localStorage.getItem("cart"+goods_id[1]);
                    goods_number =  +goods_number +1 || 1;
            $.ajax({
                "url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
                "type": "POST",
                "dataType": "json",
                "data": {
                    "goods_id": goods_id,
                    "goods_number": goods_number,
                },
                "success": function(response){
                    localStorage.setItem("cart"+goods_id[1],goods_number);
                    layer.msg(response.message, {icon: 6});
                    getCart();
                }
            })

            }
                
        })
    })
    
    }
})
// 更新购物车
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
})
