$(function(){
    var $imglis = $(".yc-imageslist");
    var $imgs = $imglis.find("img");
    var $chips = $(".yc-chips");
    var imgWidth = parseInt($imglis.css("width"));
    var imgHeight = imgWidth*720/1920;
    $(".yc-carousel").css("height",imgHeight);    
    var idx = 0;
    var lock = true;
    
    $(window).resize(function(){
        imgWidth = parseInt($imglis.css("width"));
        imgHeight = imgWidth*720/1920;        
        $(".yc-carousel").css("height",imgHeight);
    })

    console.log(imgHeight)
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

    $("#yc-leftBtn").click(function(){
        change(-1);
    });
    
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
            change(j-idx);
        });
    })
})