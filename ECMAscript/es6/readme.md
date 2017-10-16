# es6和node
默认开启严格模式  

## 模板字符串
反单引号里面加${obj.name};

## 声明变量
let 只在块级作用域起效  
const 常量声明，常量基本不能修改，用大写的命名手动区分常量  


## 箭头函数
### 多个参数要添加小括号   
    var arr = [2,4,6,74,6,36,7];
    arr.forEach( (v,k) => console.log(v,k))

### 多条语句加大括号   
    arr.forEach( (v,k) => {
        console.log(v);
        console.log(k);
        })

### 无传参需要空括号占位  
    let fn = () =>5;  
    console.log(fn);//5  

### 不改变this指向
不用在在外部定义变量等于this，直接用this
**apply()括号内第一个参数填null不改变this指向**

## 解构赋值
语法 {属性名称} = 对象

	// 对象解构
	var {Model, Collections, View} = Backbone
	
	// 数组解构
	var colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink'];
	var [color1, color2, blue, ...color] = colors;


## 默认参数
在形参处直接将参数的默认值填上  


## 剩余参数
...变量 获取剩余参数  
### 扩展操作符
fun(...arr)将数组中的多个参数传入，对象的每一个成员转化成函数参数

## class
类似与构造函数
### constructor
添加属性  
构造方法：不是自定义的，在new时会自动调用此方法  
初始化，通常给赋值，做准备工作  
### 自己命名的构造函数原型
自己随意添加构造函数的
### 继承
用entends继承其他class，用surper继承父集constructor里面的参数