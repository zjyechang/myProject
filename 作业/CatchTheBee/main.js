var box = document.querySelector('#box');
var bee = document.querySelector('#box img');

bee.onmouseover = function(){
    var rndTop = Math.random()*document.body.clientHeight;
    var rndLeft = Math.random()*document.body.clientWidth;
    box.style.top = rndTop+"px";
    box.style.left = rndLeft+"px";
}

// if(){
// }else{
// }