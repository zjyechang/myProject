$(function () {
    
    var userSearch = JSON.parse(localStorage.getItem("userSearch"));
    // console.log(userSearch[0][1])

    for(var i=0;i<9;i++){
        if(userSearch[i]){
            showShop();
        }
    }

    function showShop(){
        $.ajax({
            "url": "http://h6.duchengjiu.top/shop/api_goods.php?",
            "type": "GET",
            "data": {
                "cat_id": userSearch[i][0],
                "goods_id":userSearch[i][1],
            },
            "dataType": "json",
            "success": function (response) {
                var obj = response;
                $("#goodsUl").append(
                    '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 hot_item"><div class="hot-img-box"><img class="item-img" src="' +
                    obj.data[0].goods_thumb +
                    '"><a href="detail.html?goods_id=' + obj.data[0].goods_id +
                    '"><div class="hot_item_cover"><p class="goods_price">￥' +
                    response.data[0].price +
                    '</p><div class="goods_content"><p class="goods_name">' +
                    response.data[0].goods_name +
                    '</p><p class="goods_desc">' +
                    response.data[0].goods_desc +
                    '</p></div></div></a></div><div class="bottom_bar"><img src="' +
                    obj.data[0].goods_thumb +
                    '"><span>' +
                    obj.data[0].goods_name +
                    '</span><div class="thumb_up"><span class="price">' +
                    parseInt(obj.data[0].price) +
                    '</span><img class="heart" src="images/heart.png"></div></div></div>'
                );
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

            }

        })
    }
})