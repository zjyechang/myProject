$(function(){


// 添加列表
var mainitem = document.getElementsByClassName("mainitem")[0];

$.ajax({
    "url":"http://h6.duchengjiu.top/shop/api_goods.php",
    "type":"GET",
    "dataType":"json",  
    "success":function(response){
        // console.log(response);

        var html = "";

        for(var i=0;i<response.data.length;i++){
            html += "<div class='itemlist'><img src='"+
            response.data[i].goods_thumb+
            "'><a href='detail.html?goods_id="+
            response.data[i].goods_id+
            "' class='goods'><p class='price'>￥"+
            response.data[i].price+
            "</p><p class='goodsname'>"+
            response.data[i].goods_name+
            "</p><p class='goodsdesc'>"+
            response.data[i].goods_desc+            
            "</p></a><div class='seller'><img src='./img/55.jpg'><span>XXXX</span><a href='javascript:;' class='great'>1180</a></div></div>";

        }
    mainitem.innerHTML = html;
    }
})


    var great = document.getElementsByClassName("great");


    setTimeout(function() {
 
    for(var i =0 ;i<great.length ;i++){
        great.item(i).onclick = function(){
        // var args = Array.prototype.slice.call(great)
        
        this.innerText =  parseInt(this.innerText)+1;
        }
    }
    }, 1000);

  
})