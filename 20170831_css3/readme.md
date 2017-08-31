# css3选择器
## 直接选属性 [title="???"]
=  完全匹配  
^= 开头匹配  
$= 结尾匹配  
~= 空格匹配  
|= 短横匹配  
*= 任意匹配  


## 子代选择器
first-child()  
last-child()  
nth-child()  
nth-last-child()  
:first-of-type()  	
:last-of-type()   	
:nth-of-type()  		
:nth-last-of-type()    

# css变形(2d)
## 旋转变形:
transform:rotate(45deg);   
rotate就是旋转的意思，deg为单位，角度。

## 放大缩小:
transform:scale(0.1);  
transform:scaleX(0.1) scaleY(0.2);      
scale就是缩放的意思，值是正数，放大就是大于1，缩小就是0~1。值没有单位。 

## 斜切变形:
transform:skew(30deg,10deg);  
transform:skewX(30deg) skewY(10deg);  

# css变形(3d)

## 景深
**景深一定要加到父容器上**
就是div到电脑屏幕的距离  
3D变形就要有舞台的概念，舞台负责加perspective属性，表示景深，单位是px，表示你的眼睛离这个舞台的距离，也可以理解为里面变形的图片“陡峭”的程度。演员就是里面的img，img负责transform变形  

## rotateX()
正数是后仰，负数是磕头

## rotateY()
正数右边按下去,负数左边按下去

## 背面不可见
backface-visibility:hidden;

## 旋转轴
	transform-origin:0% 0px;
	transform:rotateY(45deg);
rotateY的时候，是绕着Y轴旋转，所以我们只关心轴的横向位置。即第一个参数起作用。  
rotateX的时候，是绕着X轴旋转，所以我们只关心轴的纵向位置。即第二个参数起作用。  

## 



