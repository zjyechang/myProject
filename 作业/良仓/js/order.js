$(function(){
    // // 总金额
    // var str = location.search;
    //     var sum = str.split("=");

    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_order.php?token="+localStorage.token,
        "type": "GET",
        "dataType": "json",
        "success": function(response){
            console.log(response);
            if(response.code == 0){
                var html = "";
                for(var i=0;i<response.data.length;i++){
                    var obj = response.data[i];
                    
                    html+="<div class='order-item'>";
                    html+="<div class='order-head'>订单号: "+obj.order_id+"</div>";
                    
                    for(var j=0 ;j<obj.goods_list.length;j++){
                        var goods = obj.goods_list[j];
                        goods.subtotal = goods.goods_price * goods.goods_number;
                        
                        html += "<div class='data-li' data-id='"+goods.goods_id+"'><img src='"+goods.goods_thumb+"'/>商品名称"+goods.goods_name+"商品总金额:"+goods.subtotal+"</div>"
                    }                   
                    html+="</div>";
                }
                $(".order-list").html(html);
            }
        }
    })
})