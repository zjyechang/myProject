# DOM 
this 指触发元素的本身  
绑定事件不能重复，会覆盖  


# DOM2
this 指触发元素的本身  
绑定事件可以重复，从上往下顺序执行  

# 低版本ie6，7,8
**低版本ie不支持addEventLstener  并且this指window**
changeColor.call(box1);.call改变this指向
用attachEvent("onclick",function(){});
# 冒泡阶段
DOM1属于冒泡
从内至外依次监听
# 捕获阶段
从外之内依次监听

# 事件对象属性方法
event.type返回事件的类型，没有on，比如”click”  
●event.target返回你点击的最小的那个元素，即使这个元素身上没有监听，也是返回它  
●event.currentTarget	返回自己，this一定和  event.currentTarget是一个元素，都是自己 
●event.bubbles	返回一个布尔值，表示这个事件是否冒泡      
# 穿入和穿出不冒泡
onmouseenter  穿入  
onmouseleave  穿出  