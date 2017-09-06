window.onload =function(){


    var imgbox = document.getElementsByClassName("imgbox")[0];
    var img = imgbox.getElementsByTagName("img");
    var cirli = document.getElementsByTagName("ol")[0]
    .getElementsByTagName("li");


    var idx = 0;
    var timer = setInterval(move,3000);

    imgbox.onmouseover = function(){
        clearInterval(timer);
    }
    imgbox.onmouseout = function(){
        timer = setInterval(move,3000);
    }

    function move(){
        idx++;
        if(idx > img.length-1) idx = 0;
        if(idx < 0) idx = img.length-1;
        imgbox.style.left = -idx*580 +"px";
        changecir();
    }


    function changecir(){
        for(var j = 0;j < cirli.length ;j++){
                    cirli[j].className = "";
                }
        cirli[idx].className ="white";
    }



    for(var i =0 ;i<cirli.length ;i++){
        (function(i){
            cirli[i].onclick = function(){
                // for(var j = 0;j < cirli.length ;j++){
                //     cirli[j].className = "";
                // }
                // cirli[idx].className ="white";
                idx = i;
                changecir();
                imgbox.style.left = -idx*580 +"px";
            }
        })(i);
    }





    var littletab= document.getElementsByClassName("littletab");
    var littleli1 = littletab[0].getElementsByTagName("li");
    var littleli2 = littletab[1].getElementsByTagName("li");    
    var item = document.getElementsByClassName("item");

    for(var i = 0;i<littleli1.length ;i++){
        (function(i){
            littleli1[i].onclick=function(){
                for(var j = 0 ;j<littleli1.length;j++){
                     littleli1[j].className = "";
                     item[j].style.display = "none";                
                }
                item[i].style.display = "block";
                this.className="active";
            }

             littleli2[i].onclick=function(){
                for(var j = 0 ;j<littleli2.length;j++){
                     littleli2[j].className = "";
                     item[littleli1.length+j].style.display = "none";                
                }
                item[littleli1.length+i].style.display = "block";
                this.className="active";
            }

        })(i);
    }







    var ignore = document.getElementsByClassName("atextdeco sp");
    var button = document.getElementsByTagName("button");

    for(var i = 0; i<ignore.length;i++){
        (function(i){
            ignore[i].onclick = function(){
                console.log( ignore[0].parentNode)
                ignore[0].parentNode.style.visibility = "visiable";
                ignore[1].parentNode.style.visibility = "visiable";
                ignore[2].parentNode.style.visibility = "visiable";
                button[0].style.top = "-23px";
                button[1].style.top = "-23px";
                button[2].style.top = "-23px";
            }

        })(i);
    }
}