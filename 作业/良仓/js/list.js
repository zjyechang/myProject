$(function(){
    
var str = location.search.substr(1)
    var cat_id = str.split("=");
    // console.log(cat_id[1]);

var page = 1;
changePage(page);
$(".proPage").click(function(){
    page--;
    if(page<=1){
        page = 1;
        $(this).hide();
    }else{
        $(this).show();               
    }
    if(page<6){
        $(".page").css("marginLeft",0);
    }else if(page>=6){
        $(".page").css("marginLeft",-50*(page-6));                
    }
    changePage(page);
})

$(".nextPage").click(function(){
    page++;
    if(page<=1){
        page = 1;
        $(this).hide();
    }else{
        $(this).show();               
    }
    if(page>6){
        $(".page").css("marginLeft",-50*(page-6));
    }
    changePage(page);
})


  
function changePage(page){
$.ajax({
    "url":"http://h6.duchengjiu.top/shop/api_goods.php?cat_id="+cat_id[1]+"&page="+page+"&pagesize=20",
    "type": "GET",
    // "data": {
    //     "cat_id":cat_id[1],
    // },
    "dataType": "json",
    "success":function(response){
        console.log(response)
        var obj = response;
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

        $(".listitem").html(html);

        var pagehtml = '';

        for(var j=0;j<response.page.page_count;j++){
            pagehtml += '<a href="javascript:;">'+(1+j)+'</a>';
            
        }
        $(".bottom-page .page").html(pagehtml);

        $(".bottom-page .page").find("a").each(function(idx){
            $(this).click(function(){
                page = $(this)[0].innerText;
                changePage(page);
            })
        })

    }

})//ajax结束括号
}//函数changePage括号
})//最开始预加载括号