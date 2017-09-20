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

## 默认参数

## 剩余参数