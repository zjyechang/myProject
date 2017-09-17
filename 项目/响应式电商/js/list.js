$(function () {
    var str = location.search;
    
    var catId = str.split("=");
    var page = 1;
    function showShop(){

        
        $.ajax({
            "url": "http://h6.duchengjiu.top/shop/api_goods.php?page="+page+"&pagesize=10",
            "type": "GET",
            "data": {
                "cat_id": catId[1]
            },
            "dataType": "json",
            "success": function (response) {
                var obj = response;

                //添加分页

                var maxPage =response.page.page_count;
                // console.log(maxPage);
                if(!maxPage){
                    layer.open({
                        content: '暂无该类商品',
                        btn: ["确定"],
                        btn1: function () {
                            location.href = "list.html";
                        },
                        scrollbar: false
                    });
                }


                if(maxPage<6){
                    for(var i=0;i<=maxPage;i++){
                        $("#ButtonCenter span").eq(i).html(i+1);
                    }
                    for(var i=maxPage;i<=6;i++){
                        $("#ButtonCenter span").eq(i).hide();
                    }
                    $(".zp-page").attr("class","col-xs-6 col-xs-offset-3 button zp-page")
                   
                }

                if(page >= 1 && page <= 3){
                    $("#ButtonCenter span").eq(0).html("1");
                    $("#ButtonCenter span").eq(1).html("2");
                    $("#ButtonCenter span").eq(2).html("3");
                    $("#ButtonCenter span").eq(3).html("4");
                    $("#ButtonCenter span").eq(4).html("…");
                    $("#ButtonCenter span").eq(5).html(maxPage-1);
                    $("#ButtonCenter span").eq(6).html(maxPage);
                    //cur
                    $("#ButtonCenter span").eq(page - 1).addClass("page-cur").siblings().removeClass("page-cur");
                }
                else if(page <= maxPage && page >=  maxPage - 2){
                    $("#ButtonCenter span").eq(0).html("1");
                    $("#ButtonCenter span").eq(1).html("2");
                    $("#ButtonCenter span").eq(2).html("…");
                    $("#ButtonCenter span").eq(3).html(maxPage-3);
                    $("#ButtonCenter span").eq(4).html(maxPage-2);
                    $("#ButtonCenter span").eq(5).html(maxPage-1);
                    $("#ButtonCenter span").eq(6).html(maxPage);
                    //cur
                    $("#ButtonCenter span").eq(page - maxPage - 1).addClass("page-cur").siblings().removeClass("page-cur");
                }else{
                    $("#ButtonCenter span").eq(0).html("1");
                    $("#ButtonCenter span").eq(1).html("…");
                    $("#ButtonCenter span").eq(2).html(page - 1);
                    $("#ButtonCenter span").eq(3).html(page);
                    $("#ButtonCenter span").eq(4).html(page + 1);
                    $("#ButtonCenter span").eq(5).html("…");
                    $("#ButtonCenter span").eq(6).html(maxPage);
                    //cur
                    $("#ButtonCenter span").eq(3).addClass("page-cur").siblings().removeClass("page-cur");
                }
                // for(var j = 0;j<maxPage;j++){
                //     $("#ButtonCenter").append($('<span>' + (j+1) + '</span>' ));
                // }
                for (var i = 0; i < obj.data.length; i++) {
                    $("#goodsUl").append(
                        '<div class="col-xs-6 col-sm-4 col-md-4 col-lg-3 hot_item"><div class="hot-img-box"><img class="item-img" src="' +
                        obj.data[i].goods_thumb +
                        '"><a href="detail.html?goods_id=' + obj.data[i].goods_id +
                        '"><div class="hot_item_cover"><p class="goods_price">￥' +
                        response.data[i].price +
                        '</p><div class="goods_content"><p class="goods_name">' +
                        response.data[i].goods_name +
                        '</p><p class="goods_desc">' +
                        response.data[i].goods_desc +
                        '</p></div></div></a></div><div class="bottom_bar"><img src="' +
                        obj.data[i].goods_thumb +
                        '"><span>' +
                        obj.data[i].goods_name +
                        '</span><div class="thumb_up"><span class="price">' +
                        parseInt(obj.data[i].price) +
                        '</span><img class="heart" src="images/heart.png"></div></div></div>'
                    );
                }



            // 点赞
            var heart = $(".heart");
            var price = $(".price")

            heart.click(function () {
                var num = $(this).parent().find("span");
                var burst = new mojs.Burst({
                    parent:($(this).parent()),
                    radius:   { 15: 50 },
                    children: {
                      fill:   [ 'deeppink', 'cyan', 'orange' ],
                  },
                  left:"92%",top:"85%"
                });
                if ($(this).attr("src") == "images/heart.png") {
                    burst.replay();
                    $(this).attr("src", "images/heart.gif");
                    num.html(parseInt(num.html()) + 1);
                } else {
                    $(this).attr("src", "images/heart.png");
                    num.html(parseInt(num.html()) - 1);
                }
            })

            // 改变图片高度
            
            changeWidth();
            $(window).resize(changeWidth);
            }

        })
    }
    
    showShop(page);
    
// 			//上一页
    $("#ButtonPrev").click(function(){
        //信号量改变
        page--;
        //范围
        if(page <= 1) page = 1;
        //清空商品数据，防止累积
        $("#goodsUl").html('');
        //调用ajax 传入信号量改变内容
        showShop(page);
        //让分页进行移动
    })
    //下一页
    $("#ButtonNext").click(function(){
        page++;
        $("#goodsUl").html('');
        showShop(page);
    })
    
    //分页的点击事件
    $("#ButtonCenter").click(function(event){
        event = event || window.event;
        var target = event.target || event.srcElement;

        if( target.nodeName === "SPAN" ){
            if(target.innerHTML == "…"){
                return;
            }
            //得到当前分页的内容，存入信号量
            page = parseInt(target.innerText);
            $("#goodsUl").html('');

            showShop(page);
            
        }
        
        
    })

    // 图片大小调整 
    function changeWidth(){
        var imgWidth = $(".item-img")[0];
        $(".item-img").each(function(){
            $(this).height(imgWidth.offsetWidth);
        })
    }

   

})