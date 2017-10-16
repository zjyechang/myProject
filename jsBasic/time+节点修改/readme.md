# 电子时钟
var oDate = new Date();  
获取小时oDate.getHours();  
获取分钟oDate.getMinutes();
获取秒oDate.getSeconds();
# 数学运算
Math.floor();  //向下取整  
Math.ceil();  //向上取整  
Math.round();   //四舍五入取整
# inner
innerHTML 可以得到标签及里面内容  
innerTEXT 只得到里面的文本  
# 节点 
## 类型
console.log(oDiv.nodeType);  
console.log(oDiv.childNodes.length);  
console.log(oDiv.childNodes[0].nodeType);  
元素节点类型  1  
文本节点类型  3  
## childen 
选择里面的所有元素节点  
不是一个标准的属性，但是每个浏览器都支持  
## 节点关系 
childNodes、firstChild、lastChild、parentNode、nextSibling、previousSibling  

## 后面添加节点
appendChild()  一般来说就是用来追加新创建的节点。   
已有的节点的移动属于剪切   

## 任意添加节点
可以在任意一个位置添加节点。
1	父亲.insertBefore(新儿子,原有标杆儿子);  
会在原有标杆儿子之前插入。  

如果想每次添加都在开头添加，那么就是：  
1	ul.insertBefore(oLi, lis[0]);  
lis这个变量是动态的，这次添加的li，下回就是lis[0]  


## 删除节点 
1	父亲.removeChild(儿子);  
1	this.parentNode.removeChild(this);   
## 替换节点
1	父亲.replaceChild(替换后, 替换前);  
## 克隆节点
克隆节点，参数true表示深复制，节点里面的所有内容一同复制。  false则不复制内容   
复制之后的节点是个孤儿节点，所以也需要使用appendChild、  inserBefore、replaceChild来添加上DOM树。  
1	ul.appendChild(lis[0].cloneNode(true));  

