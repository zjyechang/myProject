$(function(){
    
    load();
    function load(){

    
    var price = [];
    
    $.ajax({
        "type": "GET",
        "url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
        "dataType": "json",
        "data": {

        },
        "success": function(response){
            // console.log(response);
            // 判断购物车有没有商品
            if(response.data.length>0){
                for(var i=0;i<response.data.length;i++){
                    var obj = response.data[i];
                    price[i] = obj.good_price;
                    var sumprice;
                    var html = `<tr>
                                    <td>
                                        <input type="checkbox" class="goodcheck">
                                        <input type="hidden" class="goods_id" value=" ${ obj.goods_id } "/>
                                    </td>
                                    <td class="simple">
                                        <img src="${obj.goods_thumb}" alt="">
                                        <span>${obj.goods_name}</span>
                                    </td>
                                    <td><strong>
                                        <span class="goodpri">${obj.goods_price}</span>
                                    </strong></td>
                                    <td>
                                        <input type="button" class="leftbtn" value="-">
                                        <input type="text" name="goodnum" class="goodnum" value=${obj.goods_number}>
                                        <input type="button"class="rightbtn" value="+">

                                    </td>
                                    <td>
                                        <span class="sumPrice"> ${obj.goods_price*obj.goods_number} </span>
                                    </td>
                                    <td>
                                        <a href="javascript:;"class="delete">删除</a>
                                    </td>
                                </tr>`;
                            $(".mycart").html($(".mycart").html()+html);

                                                    
                            
                }
            }
            // 商品加减部分
            var $goodnum =  $("input.goodnum");

                // 价格变动
                function changePrice(){
                    var sumnum = 0;
                    var sumall = 0;
                    $goodnum.each(function(i){
                        var idx = i;
                        if($(this).parent().parent().find(".goodcheck").prop("checked")){
                            sumnum += 1*$(this).val();
                            sumall += 1*$(this).val()*$(".goodpri").eq(idx).text();
                        }
                    })
                    $(".red.num").text(sumnum);
                    $(".red.all").text("￥"+sumall);
                }
                changePrice();
            
                // checkedbox点击改变价格
                $(".goodcheck").click(function(){
                    changePrice();
                });

            // 数量增减
                $(".leftbtn").each(
                function(i){
                    var idx = i;
                    $(this).click(function(){
                        updateCart(idx,-1);
                        
                    })
                })

                $(".rightbtn").each(
                function(i){
                    var idx = i;
                    $(this).click(function(){
                        updateCart(idx,1);
                        
                    })
                })
                
               
                function updateCart(idx,x){
                    var good_num_value = $goodnum.eq(idx).val();
                    good_num_value = 1*good_num_value+1*x;

                    if( good_num_value <1)  good_num_value =1;
                    if( good_num_value >10)  good_num_value =10;

                    $goodnum.eq(idx).val(good_num_value);
                   
                    var goodsum = good_num_value*$(".goodpri").eq(idx).text()
                    $("span.sumPrice").eq(idx).text(goodsum);

                    changePrice();
                }

                function updataAjax(obj,num){
                    // 更新ajax数据
                  
                    var goods_id= obj.find(".goods_id").val();
                    console.log(goods_id)
                    $.ajax({
                        "url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
                        "type": "POST",
                        "dataType": "json",
                        "data": {
                            "goods_id": goods_id,
                            "number": num,
                        },
                        "success": function(response){
                            console.log(response);
                        }
                    })
                }
            // 删除商品
            $(".delete").each(function(){
                $(this).click(function(){
                    if(confirm("确认删除该商品？")){
                        updataAjax( $(this).parent().parent(),0);
                        $(this).parent().parent().parent().remove();
                        $(".mycart").html("");
                        return load();
                    }
                })
            })

            // 删除选中项
            $(".delSelect").click(function(){
                
                if(confirm("确认删除选中商品？")){
                    $(".goodcheck").each(function(){
                        if($(this).prop("checked")){
                            updataAjax( $(this).parent().parent(),0);       
                            $(this).parent().parent().parent().remove();
                            $(".mycart").html("");
                            return load();
                        };
                    }) 
                }else{
                    return;
                }
            })
            // 全选
            $("input[name='selectAll']").click(function(){
                var checked = $(this).prop("checked");
                $(".goodcheck").each(function(){
                    $(this).prop("checked",checked);
                }) 
            })


            // 获取金额

            $(".goPay").click(function(){
                var sum = $(".red.all").text();
                location.href ="useraddress.html?sum="+sum.substr(1);
            })
        }


    })
    }

})

