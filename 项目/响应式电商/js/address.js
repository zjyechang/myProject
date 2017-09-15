$(function(){
    //地址id号
    var address_id = 0;


    addressAjax();
    function addressAjax(){

        $.ajax({
            "url": "http://h6.duchengjiu.top/shop/api_useraddress.php?token="+localStorage.token,
            "type": "GET",
            "dataType": "json",
            "success": function(response){

                var htmlData = "";
                for(var i=0;i<response.data.length;i++){
                    var obj = response.data[i];
                    htmlData +='<li class="col-md-3 col-sm-4 col-xs-6"><div class="yc-address-item" addressId="' +obj.address_id+ '"><p>'
                            +obj.province+obj.city
                            +'<strong> ' +obj.address_name+ ' 收</strong>'
                            +'</p><p>详细地址：'+obj.address 
                            +'</p><p>手机号：'+obj.mobile 
                            +'</p><a href="javascript:;" class="yc-remove">删除地址</a></div></li>';
                }
                $(".yc-addressli").html(htmlData);

                   // 删除地址
                $(".yc-remove").click(function(){
                    layer.confirm('确定删除此地址？', {btn: ['确认', '取消'],btn1:function(){
                        removeAjax($(this).parent().parent());
                        $(this).parent().parent().remove();
                    }});
                })

                // 点击获取地址栏id
                $(".yc-address-item").click(function(event){
                    $(this).addClass("active").parent().siblings().children().removeClass("active");
                    address_id =  $(this).attr('addressId');
                    // console.log(address_id);
                    
                })
            }
        })
    }


    // 提交新地址
    $(".yc-submit").click(function(){
        var data = $("form").serialize();
        // console.log(data);
        $.ajax({
            "url": "http://h6.duchengjiu.top/shop/api_useraddress.php?token="+localStorage.token+"&status=add",
            "type": "POST",
            "datatype": "json",
            "data": data,
            "success": function(response){
                if(response.code == 0){
                    // console.log(response);
                    addressAjax();
                }
            }
        })
    })
    // 删除地址的ajax
    function removeAjax(obj){
        //obj是被删除的li
        address_id = $(obj).attr("addressId");
        // console.log(address_id);
        $.ajax({
            "url": "http://h6.duchengjiu.top/shop/api_useraddress.php?token="+localStorage.token+"&status=delete&address_id="+address_id,
            "type": "GET",
            "datatype": "json",
            "success": function(response){
                // console.log(response);
            },
        })
    }
    




//获取总金额
var str = location.search.substr(1);
var sum = str.split("=");
$(".yc-total").text("￥"+ sum[1]);
$(".yc-subprice").text("￥"+ sum[1]);

// 订单提交
$(".yc-after").click(function(){

    if( !address_id ){
        layer.alert('请选择收货地址', {
            skin: 'layui-layer-lan'
            ,closeBtn: 0
            ,anim: 4 //动画类型
          });
        return
    }
    
    // 订单ajax
    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_order.php?token="+localStorage.token+"&status=add",
        "type": "POST",
        "dataType": "json",
        "data": {
            "address_id": address_id,//地址ID
            "total_prices": sum[1],   //购物车页面总金额
        },
        "success": function(response){
            // console.log(response.message)
            if(response.code == 0){
                alert("订单提交成功");
                location.href = "pay.html?sum="+sum[1];
            }
        }
    })
})



    // 订单
    // $.ajax({
    //     "url": "http://h6.duchengjiu.top/shop/api_order.php?token="+localStorage.token,
    //     "type": "GET",
    //     "dataType": "json",
    //     "success": function(response){
    //         // console.log(response);
    //         if(response.code == 0){
    //             var html = "";
    //             for(var i=0;i<response.data.length;i++){
    //                 var obj = response.data[i];
                    
    //                 html+="<div class='col-xs-12 yc-order-item'><h3 class='order-head'>订单号: "+obj.order_id+"</h3>";
                    
    //                 for(var j=0 ;j<obj.goods_list.length;j++){
    //                     var goods = obj.goods_list[j];
    //                     goods.subtotal = goods.goods_price * goods.goods_number;
    //                     html += "<div class='col-xs-4 yc-data-li' data-id='"+goods.goods_id+"'><a href='detail.html?goods_id="+goods.goods_id+"'><img src='"+goods.goods_thumb+"'></a><p>"+goods.goods_name+"</p><p>商品数量:"+goods.goods_number+"</p><p>商品金额: ￥"+goods.subtotal+"</p></div>"
    //                 }            
    //                 html+="</div>";
    //             }
    //             $(".yc-order-list").html(html);
    //         }
    //     }
    // })
})

                            