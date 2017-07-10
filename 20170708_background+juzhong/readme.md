<!-- TOC -->

- [1. 居中](#1-居中)
    - [1.1. 左右居中](#11-左右居中)
    - [1.2. 上下居中](#12-上下居中)
- [2. background](#2-background)
    - [2.1. background-color](#21-background-color)
    - [2.2. background-image](#22-background-image)
    - [2.3. background-position](#23-background-position)
    - [2.4. background-repeat](#24-background-repeat)
    - [2.5. background-attachment 附着](#25-background-attachment-附着)
    - [2.6. 缩写](#26-缩写)

<!-- /TOC -->
# 1. 居中
## 1.1. 左右居中
行内元素左右居中，父元素添加text-align：center；  
块元素左右居中，自身添加margin：0 auto；
## 1.2. 上下居中
行内元素上下居中，父元素添加line-height
块元素上下居中
1.父元素有固定的宽高
直接用margin设置
2.父元素没有固定宽高，子容器有宽高
.father{
    position:relative;
}
.box{
    width: 100px;
    height: 100px;
    background-color: #f00;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-50px;
    margin-left:-50px;
}
3.适用于各种情况?
.father{
    position:relative;
}
.box{
    width: 100px;
    height: 100px;
    background-color: #f00;
    position: absolute;
    margin:auto;
    top:0;
    bottom:0;
    right:0;
    left:0;
}
body{

    text-align: center;
}
.father::before,.father::after,.son{
    display: inline-block;
    vertical-align: middle;
}
.father::before,.father::after{
    content:"";
    height:100%;
}
# 2. background
## 2.1. background-color 
红色red
可用#ff000
rgb(255,0,0)
rgba(255,0,0,0.5)
hsl（360,50%,50%）
H：Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，也可取其他数值来指定颜色。取值为：0 - 360   

S：Saturation(饱和度)。取值为：0.0% - 100.0%  

L：Lightness(亮度)。取值为：0.0% - 100.0%   

hsla 色相、饱和度、亮度、透明度
## 2.2. background-image
background-image:url();
url("./1.jpg")
url('./1.jpg')
url(./1.jpg)不推荐
## 2.3. background-position
两个参数，第一位，x轴的偏移量，第二位，y轴的偏移量

100px   100px

50%     50%     相对 **容器尺寸 - 图片尺寸** 的差值  

                当background-attachment:fixed 的时候
                相对窗口尺寸计算 \*\*\*  

left    top     默认值  
center  center    
right   bottom   
background-position:50% 50%;图片水平和垂直居中。  
与 background-position:center center;效果等同。

## 2.4. background-repeat
repeat	默认。背景图像将在垂直方向和水平方向重复。  
repeat-x	背景图像将在水平方向重复。  
repeat-y	背景图像将在垂直方向重复。  
no-repeat	背景图像将仅显示一次。  
inherit	 规定应该从父元素继承 background-repeat 属性的设置。   
round       拉伸  但是超出一定图片比例的时候repeat  
space             容器空间足够的时候进行repeat  
## 2.5. background-attachment 附着

fixed       背景图片，固定，不随内容滚动  
scroll      默认，滚动，随内容滚动  
## 2.6. 缩写

background: color image repeat attachment position;  
background:#f00 url('./image.jpg') no-repeat;  
background:#f00 url('./image.jpg') no-repeat center top;