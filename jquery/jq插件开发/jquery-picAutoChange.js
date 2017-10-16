$(function(){
    $.changePic = function(){
        setInterval(function(){
//					获取当前图片的路径
    var picId = $("img").attr("src").substr(27,1);
    console.log(picId)
    var nextId = ++picId;
    if(nextId == 5){
        nextId = 0;
    }

    var picId = $("img").attr("src","../20170728_节流+呼吸轮播/images/"+nextId+".jpg" )			
        },1000)
    }



$.changePic();
})