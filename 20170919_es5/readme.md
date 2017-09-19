
# 数组的方法
## 判断数组的四种方法
    //方案一,明确自己的判断类型，再进行判断
    console.log(arr instanceof Array); 

    //方案二,
    console.log(arr.constructor === Array)

    //方案三
    // 数组调用object的toString方法
    //console.log(Object.prototype.toString.call(arr));
    console.log(Object.prototype.toString.call(arr) === "[object Array]");

    // 方案四,
    console.log(Array.isArray(arr));

## fill
数组中的每一项填充为指定的内容  
arr.fill("xxx");

## forEach
遍历数组的每一项  
arr.forEach(function(){});

## map
数组的每一项经过函数处理后输出  
arr.map(function(a){return a*2})  

## some 和 every
some 判断数组中是否有满足条件的选项，是则返回true  
arr.some(function(value,index){return value%5==0});
every 判断数组中所有的项是否均满足条件，是则返回true  
arr.every(function(value,index){return value%5==0});

## filter
过滤出一个符合条件的数组  
arr.filter(function(v){
    return v%5 ==0;
})

## reduce 和reduceRight
累加器  
arr.reduce(function(current,sum){
    return sum+current;
})

# 严格模式
"use strict"可以全局开启  
可以在函数内局部使用

## 变量一定要用var

## this指向不开严格模式是window，开后是underfined

## 重复的参数名会报错

## 关键字和保留字，特殊变量（eval）使用会报错
可以定义一个变量等于eval，用变量代替关键字，保留字或特殊变量使用  eval("alert(1)");里面的字符串能执行  

## 使用delete删除变量会报错，但删除对象中的属性不会报错

## 严格模式不能用8进制及特殊符号 

## 递归函数报错(arguments.callee指向函数自身)

## with报错(将舍弃)
        var a =3;
        var b= 4;
        var obj= {c:5};
        console.log(a+b+obj.c);

        with(obj){a = a+b+c; //c相当于obj.c}
        console.log(a);

# bind
apply，call绑定后会立即执行，bind只绑定，不执行  
var fun1 = fun.bind(obj);  

