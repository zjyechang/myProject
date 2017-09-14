
  $(function(){


    var str = location.search.substr(1)
    var goods_id = str.split("=");

    $.ajax({
        "url":"http://h6.duchengjiu.top/shop/api_goods.php",
        "type": "GET",
        "data": {
            "goods_id":goods_id[1],
        },
        "datatype": "json",
        "success":function(response){
            var obj = response;
            
            $(".goodsdetail").append('<img class="itemImg" src="' +obj.data[0].goods_thumb+ '" /><p class="itemName">' +obj.data[0].goods_name+ '</p><p class="itemDesc">' +obj.data[0].goods_desc+ '</p><p class="price">￥' +obj.data[0].price+ '</p>');
            
        },

    })
    // URI转义码
    // decodeURI(goodsId[1])


    //加入购物车功能
//判断当前是否登录，没登录无法加入购物车
    $("#cart").click(function(){
        if(!localStorage.getItem("token")){
            alert("请登录!");
            location.href = "sign.html#callback="+location.href;
            // location.href = "sign.html";
            return;
        }

    var goods_number = localStorage.getItem("cart"+goods_id[1]);
    // console.log(goods_number);
    goods_number =  1*goods_number +1 || 1;
    
    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
        "type": "POST",
        "dataType": "json",
        "data": {
            "goods_id": goods_id[1],
            "goods_number": goods_number,
        },
        "success": function(response){
            localStorage.setItem("cart"+goods_id[1],goods_number);
            alert(response.message);
            // console.log(response);
        }
    })

    })
})