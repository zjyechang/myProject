// 商品数量的加减
num = $("#product-num").val();
$(".minus").click(function () {
    $("#product-num").val(num--);
    // console.log(numM);
    if (num <= 0) {
        num = 0;
    }
})
$(".plus").click(function () {
    $("#product-num").val(num++);
})




// ajax
$(function () {

    // 获取url id
    var str = location.search.substr(1);

    var goodsId = str.split("=");


    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_goods.php",
        "type": "GET",
        "dataType": "json",
        "data": {
            "goods_id": goodsId[1]
        },
        "success": function (response) {
            // console.log(response);

            var obj = response;
            // $("#goodsUl").html('<li><img src="' +response.data[0].goods_thumb+ '" /><p>' +response.data[0].goods_name+ '</p><p>' +response.data[0].goods_desc+ '</p><p class="price">' +response.data[0].price+ '</p></li>');
            $(".zp-product-pic").html("");
            $(".zp-product-pic").prepend(
                `<img src="${obj.data[0].goods_thumb}" class="detail_img">`
            );
            $(".zp-product-title").html("");
            $(".zp-product-title").prepend(`<h2>${obj.data[0].goods_name}</h2>`);
            $(".zp-goods-detail").html("");
            $(".zp-goods-detail").prepend(`${obj.data[0].goods_desc}`);
            $(".zp-product-prices").html("");
            $(".zp-product-prices").prepend(
                `<li class="shop-red">￥${obj.data[0].price}</li>`);
        }
    });

    // 添加到购物车
    $("#cart").click(function () {

        if (!localStorage.getItem("token")) {
            layer.open({
                content: "请先登录，才能使用购物车",
                btn: ['确定', '取消'],
                btn1: function () {
                    location.href = "login.html#callback=" + location.href;
                    
                    return;
                },
                scrollbar: false
            });
            return;
        }

        // console.log(decodeURI(goodsId[1]));

        var goods_number = localStorage.getItem("cart" + decodeURI(goodsId));

        goods_number = goods_number ? parseInt(goods_number) + 1 : 1;
        $.ajax({
            "url": "http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.getItem(
                "token"),
            "type": "POST",
            "dataType": "json",
            "data": {
                "goods_id": goodsId[1],
                "number": goods_number
            },
            "success": function (response) {
                layer.open({
                    content: `${response.message}`,
                    scrollbar: false
                },getCart());

            }
        })
    })


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