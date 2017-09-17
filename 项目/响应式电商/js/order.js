$(function(){
    // 订单
    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_order.php?token="+localStorage.token,
        "type": "GET",
        "dataType": "json",
        "success": function(response){
            // console.log(response);
            if(response.code == 0){
                console.log(response)
                var html = "";
                for(var i=0;i<response.data.length;i++){
                    var obj = response.data[i];
                    var time = (response.data[i].created_at+"000");
                    html+="<div class='col-xs-12 yc-order-item'><h3 class='order-head'>订单号: "+obj.order_id+"<span class='pull-right'>"+new Date(+time).toLocaleString()+"</span></h3><p class='yc-order-address'>收货地址:"+obj.address+"</p>";
                    
                    for(var j=0 ;j<obj.goods_list.length;j++){
                        var goods = obj.goods_list[j];
                        goods.subtotal = goods.goods_price * goods.goods_number;
                        html += "<div class='col-xs-4 yc-data-li' data-id='"+goods.goods_id+"'><a href='detail.html?goods_id="+goods.goods_id+"'><img src='"+goods.goods_thumb+"'></a><p>"+goods.goods_name+"</p><p>商品数量:"+goods.goods_number+"</p><p>商品金额: ￥"+goods.subtotal+"</p></div>"
                    }
                    html+="</div>";
                }
                $(".yc-order-list").html(html);
            }
        }
    })
})