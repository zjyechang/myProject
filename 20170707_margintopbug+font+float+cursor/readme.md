<!-- TOC -->

- [1. margintop](#1-margintop)
    - [1.1. 外边距塌陷](#11-外边距塌陷)
- [2. font](#2-font)
    - [2.1. font-style](#21-font-style)
    - [2.2. font-weight](#22-font-weight)
    - [2.3. font-size](#23-font-size)
    - [2.4. font-family](#24-font-family)
    - [2.5. font叠加用法](#25-font叠加用法)
    - [2.6. white-space](#26-white-space)
    - [2.7. overflow：hidden；](#27-overflowhidden)
    - [2.8. text-overflow：](#28-text-overflow)
- [3. float浮动](#3-float浮动)
    - [3.1. 清除浮动](#31-清除浮动)
- [4. position定位](#4-position定位)
    - [4.1. static](#41-static)
    - [4.2. relative](#42-relative)
    - [4.3. absolute](#43-absolute)
    - [4.4. fixed](#44-fixed)
- [5. cursor 光标](#5-cursor-光标)

<!-- /TOC -->
# 1. margintop
## 1.1. 外边距塌陷
1、加空div并设置overflow：hidden；  
2、给父元素添加overflw：hidden；  
3、给父标签添加1像素padding-top  
4、给父元素30像素padding-top取代子代margin-top  
5、子元素加float:left;属性
6、添加给父元素伪类::before（推荐）
# 2. font
## 2.1. font-style 
## 2.2. font-weight
## 2.3. font-size
## 2.4. font-family
## 2.5. font叠加用法
## 2.6. white-space
normal 默认  
nowrap 不换行  
## 2.7. overflow：hidden；
## 2.8. text-overflow：
clip 默认 剪切
ellipsis 省略号显示
# 3. float浮动
一旦元素浮动，不会占用默认的margin区域  
浮动后，其后方的元素不能直接跟非浮动元素  
浮动元素之间产生了排版效果，从左到右，类似与inline-block  
不能撑开父元素的高度  
## 3.1. 清除浮动
1.给父元素添加overflow：auto；  
但是占用了父元素的overfloat属性
2.给浮动元素添加一个并列的空相同元素  
并且元素设置clear：both；但是多出空的元素
3.给父元素添加一个::after伪类  
{
    content:"";
    display:block;
    clear:both;
}
# 4. position定位
本身是css的属性值，不能独立使用  
必须搭配top，right，bottom，left  
优先级：left>right  
top>bottom
## 4.1. static
静止定位，  
top，right，bottom，left 定位对其不起作用
## 4.2. relative
相对定位，  
相对原来的位置偏移
原来的位置保留
能为负值，负值反向位移
## 4.3. absolute
绝对定位  
相对于外层第一个position且属性不为stasic的元素定位  
原来的位置不保留  
top，right，bottom，left 代表距离参考物边界的距离  
## 4.4. fixed
固定定位  
相对于浏览器页面窗口定位  
元素原来的位置不保留  
top，right，bottom，left距离html边距的定位  
# 5. cursor 光标
default 默认鼠标箭头
pointer 手势符号，常见于按钮，超链接
auto 自动，例如，放到文字上变竖线

