$(function () {

    load();

    function load() {
        var price = [];
        $.ajax({
            "type": "GET",
            "url": "http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.token,
            "dataType": "json",
            "success": function (response) {
                // console.log(response);
                // 判断购物车有没有商品
                var html = null;
                if (response.data.length > 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        var obj = response.data[i];
                        price[i] = obj.good_price;
                        var sumprice;
                        html += `<tr>
                                <td>
                                    <input type="checkbox" class="yc-goodscheck">
                                    <input type="hidden" class="goods_id" value=" ${ obj.goods_id } "/>
                                </td>
                                <td class="yc-simple">
                                    <img src="${obj.goods_thumb}" alt="">
                                    <span>${obj.goods_name}</span>
                                </td>
                                <td><strong>
                                    <span class="yc-goodspri">${obj.goods_price}</span>
                                </strong></td>
                                <td>
                                    <input type="button" class="leftbtn" value="-">
                                    <input type="text" name="goodsnum" class="yc-goodsnum" value=${obj.goods_number}>
                                    <input type="button"class="rightbtn" value="+">
                                </td>
                                <td>
                                    <span class="yc-sumPrice"> ${obj.goods_price*obj.goods_number} </span>
                                </td>
                                <td>
                                    <span class="yc-delete">&times;</span>
                                </td>
                            </tr>`;
                    }
                    $(".table.table-striped tbody").html(html);
                }

                // 价格变动
                function changePrice() {
                    var total = 0;
                    $(".yc-sumPrice").each(function () {
                        if ($(this).parent().parent().find(".yc-goodscheck").prop("checked")) {
                            total += 1* $(this).text();
                        }
                    })
                    $(".yc-subprice").text("￥" + total);
                    $(".yc-total").text("￥" + total);     
                }
                changePrice();

                // checkbox点击改变价格
                $(".yc-goodscheck").click(function () {
                    changePrice();
                });

                // 数量增减
                $(".leftbtn").each(
                    function (i) {
                        var that = this;
                        $(this).click(function () {
                            updateCart(that, -1);

                        })
                    })

                $(".rightbtn").each(
                    function (i) {
                        var that = this;
                        $(this).click(function () {
                            updateCart(that, 1);
                        })
                    })


                function updateCart(that, x) {
                    var goodsNumVal = $(that).parent().find(".yc-goodsnum").val();
                    goodsNumVal = +goodsNumVal + x;

                    if (goodsNumVal < 1) goodsNumVal = 1;
                    if (goodsNumVal > 10) goodsNumVal = 10;

                    $(that).parent().find(".yc-goodsnum").val(goodsNumVal);
                    var goodsnum = $(that).parent().parent().find(".yc-goodspri").text()*1;
                    $(that).parent().parent().find(".yc-sumPrice").text(goodsNumVal*goodsnum);
                    changePrice();
                }

                function updataAjax(obj) {
                    // 更新ajax数据
                    var goods_id = obj.find(".goods_id").val();
                    // console.log(goods_id)
                    $.ajax({
                        "url": "http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.token,
                        "type": "POST",
                        "dataType": "json",
                        "data": {
                            "goods_id": goods_id,
                            "number": 0,
                        },
                        "success": function (response) {
                            // console.log(response);
                        }
                    })
                }
                // 删除商品
                $(".yc-delete").each(function () {
                    $(this).click(function () {
                        if (confirm("确认删除该商品？")) {
                            updataAjax($(this).parent().parent());
                            $(this).parent().parent().parent().remove();
                            // $(".yc-wrap-mycart tbody").html("");
                            // return load();
                        }
                    })
                })

                // 删除选中项
                $(".yc-delSelect").click(function () {
                    if (confirm("确认删除选中商品？")) {
                        $(".yc-goodcheck").each(function () {
                            if ($(this).prop("checked")) {
                                updataAjax($(this).parent().parent());
                                $(this).parent().parent().parent().remove();
                                $(".yc-wrap-mycart tbody").html("");                            
                                return load();
                            };
                        })
                    }
                })
                // 全选
                $("input[name='selectAll']").click(function () {
                    var checked = $(this).prop("checked");
                    $(".yc-goodscheck").each(function () {
                        $(this).prop("checked", checked);
                    })
                })


                // 获取金额
                $(".yc-after").click(function () {
                    var sum = $(".yc-subprice").text();
                    location.href = "address.html?sum="+sum.substr(1);
                })
            }


        })
    }

})