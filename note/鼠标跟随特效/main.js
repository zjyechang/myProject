var container = document.querySelector('.img_container');
var back = document.querySelector('.img_container .img_back');
var border = document.querySelector('.img_container .img_border');
var font = document.querySelector('.img_container .img_font');
var timer1,timer2,timer3,timer4,timer5,timer6;

/**
 * 鼠标进入并且在移动
 * 先清除可能存在的定时器
 * 清除可能存在的transition  过渡
 * 根据鼠标位置 ， 设置各个标签的位置
 */
container.addEventListener('mousemove',function(e){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timer6);
    back.style.transition = "all 0s";
    border.style.transition = "all 0s";
    font.style.transition = "all 0s";
    setAllStyle(e,1);
})

container.addEventListener('mouseout',function(e){
    back.style.transition = "all 0.2s";
    border.style.transition = "all 0.2s";
    font.style.transition = "all 0.2s";
    timer1 = setTimeout(function(){
        setAllStyle(e,-0.5)
    },200)
    timer2 = setTimeout(function(){
        setAllStyle(e,0.3)
    },400)
    timer3 = setTimeout(function(){
        setAllStyle(e,-0.3);
    },600)
    timer4 = setTimeout(function(){
        setAllStyle(e,0.1)
    },800)
    timer5 = setTimeout(function(){
        setAllStyle(e,-0.1)
    },1000)
    timer6 = setTimeout(function(){
        setAllStyle(e,0);
    },1200)
})

var setAllStyle = function(e,b){
    var img = {
        ox:container.clientWidth/2,
        oy:container.clientHeight/2
    }
    var mouse = {
        x:e.clientX - container.offsetLeft,
        y:e.clientY - container.offsetTop,
        Width:(e.clientX - container.offsetLeft - img.ox),
        Height:(e.clientY - container.offsetTop - img.oy),
        perWidth:(e.clientX - container.offsetLeft - img.ox)/img.ox,
        perHeight:(e.clientY - container.offsetTop - img.oy)/img.oy
    }

    var angle = 3;

    back.style.transform = "rotateY("+angle*mouse.perWidth*b+"deg)" + 
                            " rotateX("+-angle*mouse.perHeight*b+"deg)"+ 
                            " translateZ(0px)";
    border.style.transform = "rotateY("+angle*mouse.perWidth*b+"deg)" + 
                            " rotateX("+-angle*mouse.perHeight*b+"deg)" +
                            " translateX("+ mouse.Width*0.03*b +"px)"+
                            " translateY("+ mouse.Height*0.03*b +"px)"+
                            " translateZ(25px)";
    font.style.transform = "rotateY("+angle*mouse.perWidth*b+"deg)" + 
                            " rotateX("+-angle*mouse.perHeight*b+"deg)"+ 
                            " translateX("+ mouse.Width*0.1*b +"px)"+
                            " translateY("+ mouse.Height*0.1*b +"px)"+
                            " translateZ(-5px)";
}