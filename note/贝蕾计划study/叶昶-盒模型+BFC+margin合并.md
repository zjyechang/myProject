# 2017/12/20   叶昶
## 盒模分为：
从里到外 content，padding，border，margin组成一个完整的盒模型


### 宽高的计算方式
1、W3C的标准Box Model，按content计算宽高。  
2、IE传统下Box Model（IE6以下，不含IE6版本或“QuirksMode下IE5.5+”，盒模型相同，只是大小计算不同）height，width计算包括了padding和border  

box-sizing属性可以控制width的计算区域。  
box-sizing ： content-box || border-box 

### padding
```
值	描述
auto	浏览器计算内边距。
length	规定以具体单位计的内边距值，比如像素、厘米等。默认值是 0px。但不允许使用负值。
%	规定基于父元素的宽度的百分比的内边距。
```
实际测试padding的百分比，测试结果并不是等于，而是近似等于。浏览器计算会存在偏差，

### border
1. border绘制在“元素的背景之上”,换句话来说，元素的背景是内容、内边距和边框区的背景。
2. border默认样式border-style:none;
3. 默认颜色border-color: 元素文本颜色。利用这个特性，解决边框和文本颜色需要保持的设计要求。
4. 实现透明边框 border-color:transparent;

### margin
```
值	描述
auto	浏览器计算外边距。
length	规定以具体单位计的外边距值，比如像素、厘米等。
%	规定基于父元素的宽度的百分比的外边距
margin: auto计算规则
```
设置margin: auto后，

- 行内元素，行内块级元素margin取值0；

- 块级元素，在文档流中

```
margin-bottom和margin-top取值0；
margin-left和margin-right取值相同，按照下面公式计算
'margin-left' + 'border' + 'padding' + 'width' + 'margin-right' = width of containing block
```

- 块级元素，不在文档流中
```
margin-left和margin-right取值相同，按照下面公式计算
'margin-left' + 'border' + 'padding' + 'width' + 'margin-right' = width of containing block
margin-top和margin-bottom取值相同，按照下面公式计算
'margin-top' + 'border' + 'padding' + 'height' + 'margin-bottom' = height of containing block
```


## margin合并产生原因及解决
### 原因：
这些margin都处于普通文档流流中，并在同一个BFC中；  
这些margin没有被非空内容、padding、border 或 clear 分隔开；  
这些margin在垂直方向上是毗邻的，包括以下几种情况：  
1、一个box的top margin与第一个子box的top margin  
2、一个box的bottom margin与最后一个子box的bottom margin，但须在该box的height 为auto的情况下  
3、一个box的bottom margin与紧接着的下一个box的top margin  
4、一个box的top margin与其自身的bottom margin，但须满足没创建BFC、零min-height、零或者“auto”的height、没有普通流的子box  
垂直方向上毗邻的box不会发生折叠的情况：  
根元素的外边距不会参与折叠  
一个有clearance的box的上下margin毗邻，它会与紧接着的下一个box发生margin折叠，但折叠后的margin不会再与它们父box的bottom margin折叠  

### 折叠边距的计算
当两个margin都是正值的时候，取两者的最大值；当 margin 都是负值的时候，取的是其中绝对值较大的，然后，从 0 位置，负向位移；当有正有负的时候，先取出负 margin 中绝对值中最大的，然后，和正 margin 值中最大的 margin 相加。但必须注意，所有毗邻的margin要一起参与运算，不能分步进行。  

### 解决：
创建不同的BFC，具体一些操作：  
1.float为 left|right  
2.overflow为 hidden|auto|scroll  
3.display为 table-cell|table-caption|inline-block  
4.position为 absolute|fixed  
5.设置zoom: 1;（zoom属性为IE中的属性，用于缩放元素，现在除了firefox其他的都能使用，但是不推荐非IE使用）  
6.添加before伪元素，设置display为 table|block（必须添加content，否则伪元素不起作用）  



## BFC(Block Formatting Context)块级格式化上下文
    一个块格式化的内容是网页的视觉CSS渲染的一部分。这是模块的布独立的区域，浮动元素与其他元素相互作用。  
。   简单来讲，我们可以把它理解为，我们在进行盒模型布局的时候，如果一个元素符合了成为BFC的条件，该元素成为一个隔离了的独立容器，元素内部元素会垂直的沿着其父元素的边框排列，和外部元素互不影响 。比如浮动元素会触发BFC，浮动元素内部的子元素主要受到该浮动元素的影响，而两个浮动元素之间是互不影响的。  
    在BFC中，每一个盒子的左外边缘（margin-left）会触碰到容器的左边缘(border-left)（对于从右到左的格式来说，则触碰到右边缘）。
　　在CSS3 中，BFC 叫做Flow Root。在早期的ie中也有类似的概念haslayout IE6、7的很多布局产生的bug（如3px间隙、绝对定位的继承宽度）都可以通过触发hasLayout修复，比较推荐的方法为zoom:1与height:1%，不会破坏已有的样式  

一个BFC包含创建该上下文元素的所有子元素，但不包括创建了新BFC的子元素的内部元素。这从另一方角度说明，一个元素不能同时存在于两个BFC中。BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然；  


BFC的产生至少满足以下其中一项：
1.float的值不为none
2.position的值不为static或者relative
3.display的值为 table-cell, table-caption, inline-block, flex, 或者 inline-flex中的其中一个
4.overflow的值不为visible

### BFC的特性
1.边缘不和浮动元素重叠，浮动盒区域不叠加到BFC上；  
2.不同BFC之间不存在collapsing margins问题，处于同一个BFC中的元素相互影响，可能会发生margin collapse；  
3.内部的盒会在垂直方向一个接一个排列（可以看作BFC中有一个的常规流）；  
4.每个元素的margin box的左边，与容器块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此；  
5.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然；  
6.计算BFC的高度时，考虑BFC所包含的所有元素，连浮动元素也参与计算；  


### BFC的由来
遵循以前报纸的排版，以前的报纸将margin合并后文字排版比较好看，网页最早都是一些文字，就按报社的标准来了


###一些作用
1.利用BFC可以消除Margin Collapse  
2.利用BFC去qq清除内部浮动  
3.利用BFC阻止文本换行
<img src="https://upload-images.jianshu.io/upload_images/192464-47f55b6a8de7b3c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/654"> 
图片为浮动的，默认是上图，当给文字创建新的BFC后b变为下图
<img src="https://upload-images.jianshu.io/upload_images/192464-2620aa5e31bd83f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/658">

