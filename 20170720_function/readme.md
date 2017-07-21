# function 函数
function fun(a){形参  
    内容;  
}  
  
fun(4,5,6,7);实参  

## return
将函数return一个值

## 递归
自己调用自己
 function fib (n){  
            if (n == 1 || n == 2){  
                return 1;  
            }else {  
                return  fib(n-1)+fib (n-2);  
            }  
        }  

        for (i = i ; i<=40 ; i++){  
            console.log (fib (i))  
        }  

## 变量名 函数名 不能混用
var xixi = function haha(){   
    ......  
}  
只能用xixi()；调用  
## 函数变量提升(预解析)
只有function haha(){}函数声明会提升  
var haha= function(){}不会被提升  
## 基本类型保存值，引用类型保存地址
函数也属于引用类型
  var a = function (){  
            alert("ヽ(#`Д´)ﾉ┌┛〃");  
        }  
        var b=a;  
      
        b.haha=1  
        b.haha++;  
        b.haha++;   
        console.log(a.haha)   

### 同名变量的后面会覆盖前面
函数声明会提升，有优先。
var a = function  (){  
            alert (9);  
            return alert(01)  
        }  
        a();  
        a =9;  
        console.log(a)  
        <!-- a();  出错 -->
        
## IIFE
直接调用，立即执行  
+function (){  }();
-function (){  }();
(function (){  })();  
命名无效  
设计一个函数，这个函数接收三个参数，比如sum(4,7,9);返回的是前两个数字大的那个数字，与第三个数字的和。  
	sum(4,2,3);   //7  
  
	function sum(a,b,c){   
        return (function(a,b){  
			return a >= b ? a : b;    
		})(a,b) + c;  
    }  
## 局部变量
定义在函数里面的变量，只有在函数里面有意义。
## 全局变量
定义在全局范围内的变量，在程序任何一个角落都有定义

