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
        this.onmousemove = function(){  j
        <!-- pic.src = "./beijing/"+bt.value+".jpeg" -->
        }  
    }  

## input color 的应用  
    详见20170724 homework2  
    用.value取值，再应用  

## Storage仓库
### Local Storage 一直在
localStorage.setItem("token",response.data.token);
localStorage.getItem("token");

### Session Storage 关了浏览器就没了
### web SQL 
### Cookies

## 解码
decodeURI(goodsId[1]) URI解码

## URL:  协议：//IP：端口/path（路径）/文件夹/文件？查询的参数#a

## prop()和 attr()
jquery1.6中新加了一个方法prop()，一直没用过它，官方解释只有一句话:获取在匹配的元素集中的第一个元素的属性值。  
大家都知道有的浏览器只要写disabled，checked就可以了，而有的要写成disabled = "disabled"，   

checked="checked"，比如用attr("checked")获取checkbox的checked属性时选中的时候可以取到值,值为"checked"但没选中获取值就是undefined。  

jq提供新的方法“prop”来获取这些属性，就是来解决这个问题的，以前我们使用attr获取checked属性时返回"checked"和"",现在使用prop方法获取属性则统一返回true和false。  

那么，什么时候使用attr()，什么时候使用prop()？  
1.添加属性名称该属性就会生效应该使用prop();  
2.是有true,false两个属性使用prop();  
3.其他则使用attr();  


