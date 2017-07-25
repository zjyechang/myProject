# confirm 消息对话框
例子var mymessage=confirm("你喜欢JavaScript吗?");  
    if(mymessage==true)  
    {   document.write("很好,加油!");   }  
    else  
    {  document.write("JS功能强大，要学习噢!");   }  
# window.open
window.open([URL], [窗口名称], [参数字符串])  
 1.该名称由字母、数字和下划线字符组成。  
2."_top"、"_blank"、"_self"具有特殊意义的名称。  
       _blank：在新窗口显示目标网页   
       _self：在当前窗口显示目标网页   
       _top：框架网页中在上部窗口中显示目标网页   
3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。   
4.name 不能包含有空格。   
例子：在新窗口打开百度，大小为300px * 200px，无菜单，无工具栏，无状态栏，有滚动条窗口：     window.open("http://baidu.com","_blank","width=300,height=300,top=100,left=0,menubar=no,toolbar=no, status=no,scrollbars=yes'")
# window.close
 关闭窗口



# input range的应用  
input( type = "range" )  
    用.value取值，再应用  
即时反馈的方式详见20170725里面的if.html  
    bt.onmousedown = function (){  
        this.onmousemove = function(){  
        <!-- pic.src = "./beijing/"+bt.value+".jpeg" -->
        }  
    }  

## input color 的应用  
    详见20170724 homework2  
    用.value取值，再应用  