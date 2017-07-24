
# 预解析顺序

<!-- 作用域  
域：空间，范围,区域  ;
作用：读和写; -->
1.预解析，找var，function 参数；    
    a = 未定义；  
    a = function(){}  
2.逐行执行代码；  
 
变量和函数重名了，优先保留函数  
# 数组
## 改变数组本身，不重新赋值
## 头尾删插
尾插arr.push("","")  
尾删arr.pop()只能删除最后一项，无法删除多个  
头插arr.unshift("","")  
头删arr.shift()只能删除第一项  
## concat 合并
 arr3 = arr.concat(arr1,"妖姬",["九条","二筒"])  
合并的可以是数组，单独字符串  
## slice 拆分
根据arr.length()的下标  
前包后不包  
arr = arr.slice(2,4)  
## splice 删除 并替换
arr.splice(2,4,"a","b")  
从下标2,开始，删除4位。  并替换成a，b  
arr.splice(2)如过没指定个数，就从下标2开始（包含），删除后面所有
arr.splice(-3); 删除最后三个  
## join
逗号转化为想要的字符，并将数组转化成字符串
## reverse
数组倒置
## sort
转换成字符串排序
# 字符串属性
## length
中文、数字、英语字母、空格，都是1个长度
## chatAt()
console.log("asdfghjkl",charAt(2)) 输出d
## indexOf 检索字符串
检索然后显示下标数字，没有则为-1，只能检索第一个
## replace
只能替换一个
## substr
str.substr(3,5)从下标为3的地方开始，取5个字符
## substring 
str.substring(3,5)从下标为3的地方开始取到下标5个。  
前包后不包
## 大小写转换
.toLowerCase  转化为小写  
.toUpperCase  转化为大写  

# DOM
## 获取对象
document.getElementById("")
伪数组 doccument.getElementByTagName("")[0]
## 更改属性
id.style.backgroundColor = "red";
document.title = "yechang"
### window.onload
可以加载完在产生js效果，使得js可以写在head里面了，