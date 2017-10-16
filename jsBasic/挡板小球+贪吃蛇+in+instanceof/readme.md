# 小知识点

## 作用域
在JavaScript中，唯一能够隔开作用域的就是function  
不同的js文件只会导致预加载在每个单独的文件中执行  

## 构造函数和字面量的区别
字面量法，必须是正则表达式的字面量，用/  /来界定。里面不能有变量，不能有斩断链接。  
但是，new RegExp()构造函数的语法：  
	var reg = new RegExp("^1[\d]{10}$","g");  
好处就是可以用字符串的斩断链接，来拼接字符串，使用变量：  
	var a = "kaola";  
	var reg = new RegExp("^" + a + "{1,2}$" , "g");  
	reg.test("woaikaolahahaha")  

## _禁止实例调用调用
写在prototype里面的函数，对象的实例是可以调用的。但是一些函数是内部函数，我们只希望函数自己调用自己。不希望实例来调用，习惯上写_开头命名。但是_不能阻止外部实例调用，没事儿，这就是一个约定。
	Slider.prototype._findMyElemsByClassName = function(className){  
	3	}  
加上_的函数，说白了不向外暴露这个API。

# obj.hasOwnProperty(k) && console.log(k);
判断 只有前面的正确了才会执行后面的.

# 不同js文件按顺序加载入html文件

## window.onload
window.onload在工作中是不允许使用的。因为这个会把JS提前，与自己的HTML结构分开了.  
但是，window.onload在应对几个东西的时候，有非常大的作用：  
1）表单验证  
2） onscroll事件  
3）……  
所有的刚性的、事关穿不穿帮、事关安全的，都要写在window.onload里面。  


# 命名空间
window.ucai = window.ucai || {};  
有直接用，没有创建一个，类似文件夹  

# 组件开发
是组件开发有一个思路，就是自己只管自己，不需要更多的复用。不需要调用其他框架与函数。



**当一个变量内部是一个setInterval、setTimeout的时候，那么这个变量被console.log输出的时候，变量的值是1。当定时器积累的时候，实际上值会变。不管怎么样，值正数。
这是一种非常简单的函数节流：  
	if(this.timer){return;}**
