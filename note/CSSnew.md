
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

## 1.1.1.1. option

属性

    selected    设置为默认选中项

    disabled    设置为不可选中项

规范

    无论对于下拉里列表，还是滚动列表，最好设置一个selected

### 1.1.2. datalist

datalist vs select

datalist 必须与input结合使用,input的list属性值，需要是datalist的id

```html
datalist
<input list="data" name="city1" type="text">
<datalist id="data">
    <option value="beijing">
    <option value="shanghai">
    <option value="nanjing">
</datalist>

select
<select name="city2">
    <option value="bj">北京</option>
    <option value="hz">杭州</option>
    <option value="nj">南京</option>
</select>

# font
    text-indent:32px;
    <!-- 首行缩进 -->
    text-shadow: 3px 5px 1px #888;
    /*
        x-offset
        y-offset
        blur
        color
    */

    /*对于文字过长，显示省略号效果，必须先设置容器高宽*/
    white-space:nowrap;
    /*
        文本过长，是否换行
        normal 默认换行
        nowrap 不换行
    */

    overflow: hidden;
    /*
        超出隐藏
    */
    text-overflow: ellipsis;
    /*
        文字超出隐藏
        clip 默认，裁剪
        ellipsis 省略号显示
    */

#、基本概念

1.  基线、底线、顶线、中线[Css精通]深入理解CSS中的行高与基线 

注意：基线（base line）并不是汉字文字的下端沿，而是英文字母“x”的下端沿。

2. 内容区
内容区

内容区是指底线和顶线包裹的区域（行内元素display：inline可以通过background-color属性显示出来），实际中不一定看得到，但确实存在。内容区的大小依据font-size的值和字数进行变化。

3. 行距、行高
行距和行高

行高（line-height）：包括内容区与以内容区为基础对称拓展的空白区域，我们称之为行高。一般情况下，也可以认为是相邻文本行基线间的距离。

行距：指相邻文本行间上一个文本行基线和下一文本行顶线之间的距离。当然，我更愿意认为是（上文本行行高-内容区高度）/2+（下文本行行高-内容区高度）/2。

4. 行内框
行内框
行内框是一个浏览器渲染模型中的一个概念，无法显示出来，但是它又确实存在，它的高度就是行高指定的高度。

5. 行框
行框

行框（line box），同行内框类似的概念，行框是指本行的一个虚拟的矩形框，也是浏览器渲染模式中的一个概念。行框高度等于本行内所有元素中行内框最大的值（以行高值最大的行内框为基准，其他行内框采用自己的对齐方式向基准对齐，最终计算行框的高度）。



Vertical-align:垂直居中
上一节我们讲解了行高与单行纯文字的垂直居中（line-height），而如果行内含有图片和文字，在浏览器渲染出来后，读者可以发现文字和图片在垂直方向并不是沿中线居中，而是沿基线对齐。这是因为，元素默认的垂直对齐方式为基线对齐（vertical-align: baseline）。


CSS语法：vertical-align
语法：
baseline | sub | super | top | text-top | middle | bottom | text-bottom | <百分比> | <长度> | inherit
说明：
设置元素内容的垂直对齐方式。
参数：
baseline： 基线对齐；
sub： 下标显示；
super： 上标显示；
top： 顶端对齐；
text-top： 文本的顶端对齐；
middle： 中部对齐；  //没有研究透的属性
bottom： 底端对齐；
text-bottom：   文本的底端对齐；
百分比和长度： CSS2，可为负数。
初始值：baseline
继承性：不继承
 此处需要特别注意的是：垂直对齐属性只对文本有效（是指包含了#Text节点的元素节点才能正确地处理vertical-align属性）。同时，该属性不能继承。


属性值详解
在上面一节中，介绍了文本的基线、顶线、中线和底线，还有内容区、行内框和行框，而本节的垂直对齐和这几个概念密切相关。









.red::before {
    content: 'red';
    color: red;
}
## 方法一
使用JavaScript或者jquery切换<p>元素的类名，修改样式。
.green::before {
    content: 'green';
    color: green;
}
$('p').removeClass('red').addClass('green');
## 方法二
在已存在的<style>中动态插入新样式。
document.styleSheets[0].addRule('.red::before','color: green');
document.styleSheets[0].insertRule('.red::before { color: green }', 0);
## 方法三
创建一份新的样式表，并使用JavaScript或jQuery将其插入到<head>中
// Create a new style tag
var style = document.createElement("style");

// Append the style tag to head
document.head.appendChild(style);

// Grab the stylesheet object
sheet = style.sheet

// Use addRule or insertRule to inject styles
sheet.addRule('.red::before','color: green');
sheet.insertRule('.red::before { color: green }', 0);
jQuery
$('<style>.red::before{color:green}</style>').appendTo('head');
## 方法四
使用HTML5的data-属性，在属性中使用attr()动态修改。
<p class="red" data-attr="red">Hi, this is plain-old, sad-looking paragraph tag.</p>
.red::before {
    content: attr(data-attr);
    color: red;
}
$('.red').attr('data-attr', 'green');