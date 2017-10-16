## 全局变量
可以通过function操纵全局变量
var a = 1;  
function fun(){  
    a++;  
    console.log(a)  
}  
fun()//2  
fun()//3   
fun()//4
*数据累加，不能清除*



在全局调用函数，函数如果不在全局范围内，不生效。
## 垃圾回收机制
function fun(){  
    var b = 1;  
    b++;  
    console.log(b)  
}  
节约内存，提高运行速率  

# 闭包
同一个闭包中的相同声明 值会保存继续，相同闭包不同声明从头开始  
格式：函数嵌套函数   
子级函数调用了父级函数的return值  
**return inner后面不能加括号，加了等于引用inner()计算后的值  
不加等于引用整个函数。**  

例一：   
function fun(){  
            var a =333 ;  
            function inner(){  
              a++;  
              console.log(a);  
            }  
            return inner;  
        }   
        var inn = fun();//inn就是fun()里面的inner函数  
        inn();   




例二：  

    var inner;   
    function outer(){  
        var a =221;   
        var b = 2345;  
        inner =function(){  
            alert(a);  
            alert(b);  
        }  
    }  
    outer();  
    var a = 111;  
    var b = 124;  
    inner();  
 <!-- 输出221，2345  -->

例三：
    function fun(m,n){
        function inner(m){
            alert(m+n)
        }
        return inner
    }
    inn = fun();
    fun(3,4)
    inn(6);
<!-- 输出10 -->

例四：  
  function outer(){  
        var a = 0 ;  
        function inner(){  
            a++;  
            console.log(a);  
        }  
        return inner;  
    }  

    var inn = outer(); 
    var inn1 = outer(); 
    inn();//1  
    inn();//2  
    inn1;//1
    inn();//3  

<!-- 想要清空，再写一遍声明  var  inn = outer(); -->  
同一个闭包中的相同声明 值会保存继续，相同闭包不同声明从头开始  
# 数组
从零开始，arr[1]是第二个
## arr.length
数组长度   
arr[arr.length-1] 为数组最后一项   
数组是对象,是引用类型   
遍历//用for循环将数组中中的每项依次输出
