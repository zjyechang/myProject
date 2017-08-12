


var searchbox = document.getElementsByClassName("searchbox")[0];
var searchIcon = document.getElementsByClassName("searchIcon")[0];
var searchAnima = searchbox.getElementsByClassName("searchAnime")[0];
var flag = true;

    searchIcon.onclick = function(){
        if(flag){
            searchAnima.style.left = "14px";
            searchAnima.style.transition="0.1s";
            flag = !flag;
        }else{
            searchAnima.style.left = "280px"; 
            searchAnima.style.transition="0.5s";            
            flag = !flag;                       
        }
    }


    var carouselContainer = document.getElementsByClassName("carouselContainer")[0];
    var actionpoint = document.getElementsByClassName("actionpoint")[0];
    var imgli = carouselContainer.getElementsByTagName("li");
    var imgul = carouselContainer.getElementsByTagName("ul")[0];
    var idx = 0;
    var oLeft =0;
    carouselContainer.style.left = 0 +"px";

    imgul.innerHTML += imgul.innerHTML;
    var timer = setInterval(function(){

        oLeft += 1000;
            carouselContainer.style.transition = "1s"; 

        if(oLeft > 1000*(imgli.length/2)){
            oLeft = 0;
            carouselContainer.style.transition = "none";
            // carouselContainer.style.left = 0 +"px";
        }    
        carouselContainer.style.left = -oLeft +"px";
    },2000)









var $ = {
    ajax: function(option){
        
        var dataType = option.dataType;
        var url = option.url;
        if(url == undefined){
            throw new Error("地址有问题");
            return;
        }
        var type = option.type || "GET"



        var xhr = null;
        // 能力判断
        if( window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else{
            xhr = new ActiveXObject("Microsoft.XMLHTTP")
        }
        // 当准备状态值改变是时触发事件
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){

                if(xhr.status>=200 && xhr.status<300 || xhr.status ==304){

                    if( (typeof option.success) === "function"){
                        // 响应结果
                        var response = '';
                        if (dataType == "string"){
                            response = xhr.responseText;
                        }else if( dataType == "json"){
                            // 将字符串反序列化
                            response = JSON.parse(xhr.responseText)
                        }
                        
                        option.success( response );
                    }
                }
            }
        }


        xhr.open(type,url,true)
        xhr.send(null);


        }
    }


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
            "'><a href='#' class='goods'><p class='price'>￥"+
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


