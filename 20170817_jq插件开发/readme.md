# ajax

## $.get()方法
	$.get("a.json",{"id":1,"name":"考拉"},function(text){
			alert(typeof text);
	});

jQuery默默的帮我们：
1） encodingURIComponent中文了；
2）如果请求是404等错误状态，不会执行回调函数；
3） jQuery识别传回来的东西像JSON，已经帮我们转JSON了，

jQuery中get方法还可以这样使用两个参数：
	$.get("a.json?id=1&name=考拉",function(text){
			alert(typeof text);
	});

## $.post()方法
	$.post("a.json",{"id":1,"name":"考拉"},function(data){
		alert(typeof data);
		alert(data.content[2].id);
	});

## $.ajax()方法
配置信息非常多，写在json里面进行配置：
	$.ajax("b.json",{
		//请求类型
		"type"	:   "get",
		//传到服务器上的数据
		"data"	: 	{
			"name":"xiaoming",
			"age" :10
		},
        //成功做的事情
		"success" : function(data){
			alert(typeof data);2		},
		//错误做的事情
		"error"	:   function(XMLHttpRequest, textStatus, errorThrown){
			alert(errorThrown);
		}
	});


## serialize()方法
用来表单序列化   
	var str = $("#biaodan").serialize();
注意能够调用srialize的元素，一般来说一定是form标签。

##  JSONP跨域
原理和我们上面写的一样，jQuery也帮我们创建了一个script标签，设置了src，发出了请求，定义了函数。
跨域使用$.ajax函数。

## ajax()用处很广
说说$.ajax函数，这是ajax最“全乎”的函数：
$.ajax("test.txt",{
	"type" : "get",
	"data" : {"a":1,"b":2},
	"success" : function(data){
				
	}
});
等价于：
$.get("test.txt",{"a":1,"b":2},function(data){

});

特别的，还能配置error，请求错误的时候做的事情。
$.ajax("t123123est.txt",{
	"type" : "get",
	"data" : {"a":1,"b":2},
	"success" : function(data){

	},
	"error" : function(){
		alert("系统错误");
	}
});



如何实现JSONP？
$.ajax("test.txt",{
	//JSON跨域的时候要写一个dataType，注意不是type而是dataType
	"dataType" : "jsonp",
	//要定义的函数名字，因为JSONP不缺执行，缺定义
	"jsonpCallback" : "fun",
	//信息回来之后执行的事情
	"success" : function(data){
		alert(data);
	}
});

此时如果面试的时候，人家问，这些jQuery代码底层发生了什么，要会回答：
1）	创建了一个函数叫做fun，指向了我么你的success函数
2）	创建了一个script标签，然后设置了src为test.txt，上树，瞬间下树。


## 缓存解决
Ajax缓存极其严重，如果两次get、post都是通往同一个URL的，并且携带的参数一样，即使服务器返回200的状态码，也会被当做304那样有缓存。这样就会表现出内容更改不及时，后台的文件已经更改了，但是前台由于有缓存就不会变化。

1.加随机数的方法
	xhr.open("get","a.txt?z=" + Math.random(),true);
甚至可以不写k：
	xhr.open("get","a.txt?" + Math.random(),true);

jQuery中：
	$.get(“a.txt”,{“z”:Math.random()},true);

2. 加一个时间戳
Date是系统内置的构造函数，new Date()就能产生一个日期时间对象，输出之后就是一个当前系统时间。
Date.parse(日期时间对象)就能产生一个时间戳，是从1970年1月1日到现在这一时刻的毫秒数。
	Date.parse(new Date());

	xhr.open("get","a.txt?z=" + Date.parse(new Date()),true);


# jquery 插件开发
两种方法
1.直接$.fn.xxx添加

    $(function(){
    $.fn.abc = function(){
        console.log("1298y4e9ehfiakfj");
    }
2.用$.fn.extend添加

    $.fn.extend({
        aaa:function(){
            console.log("dsadasdas")
        },
        ccc:function(){
            console.log("ccccccc")
        }
    })