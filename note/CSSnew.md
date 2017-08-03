
# a标签
样式一定要设置到a标签自身。  
设置在父元素的样式无效  


# margin:0 auto;不能居中问题
1.没设置宽度
2.设置了position：static；属性
3.元素浮动

解决方法  
1.只是在要居中的div外层添加多一个div,并使其居中。
2.设置宽度
3.去掉浮动及更改static

# box-shadow 
h-shadow	必需。水平阴影的位置。允许负值。  
v-shadow	必需。垂直阴影的位置。允许负值。	
blur	可选。模糊距离。  
spread	可选。阴影的尺寸。	
color	可选。阴影的颜色。请参阅 CSS 颜色值。	
inset	可选。将外部阴影 (outset) 改为内部阴影。  
*加上inset使得阴影在边框里面出现*

# 渐变色
background: linear-gradient(0deg to bottom, rgb(245,249,252),#fff);   
to left”实现的效果也可以使用角度值“90deg”和“270deg”：著作权归作者所有。    


# 定位问题
内层模块的最外层margin开始  
根据有定位的外层元素的*内容*定位
# 删除线
text-decoration:line-through
# 间隔
## 开头空两格p{text-indent:2em;}

　　*任意浏览器的默认字体高度16px（16像素）。  

　　*所有未经调整的浏览器都符合:1em=16px。  

　　*那么12px=0.75em,10px=0.625em。  

　　为了简化font-size的换算，需要在css中的body选择器中声明font-size=62.5%，这就使em值变为16px*62.5%=10px,这样12px=1.2em,10px=1em,也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。  

　　注：建议不要使用em作为中文站点的文字单位，会导致文字变形十分严重的。  
##  letter-spacing 英文的字母间距 可以为负数
##  word-spacing 英文单词间距 可以为负数