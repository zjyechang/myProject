# 什么是FC
FC的全称是：Formatting Contexts，是W3C CSS2.1规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

# BFC
BFC(Block Formatting Contexts)直译为"块级格式化上下文"。Block Formatting Contexts就是页面上的一个隔离的渲染区域，容器里面的子元素不会在布局上影响到外面的元素，反之也是如此。如何产生BFC？
- float的值不为none。   
- overflow的值不为visible。   
- position的值不为relative和static。  
- display的值为table-cell, table-caption, inline-block中的任何一个。 

用于常见的多栏布局，结合块级别元素浮动，里面的元素则是在一个相对隔离的环境里运行。


# IFC
IFC(Inline Formatting Contexts)直译为"内联格式化上下文"，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)

## 布局规则
1. 框会从包含块的顶部开始，一个接一个地水平摆放。
2. 摆放这些框的时候，它们在水平方向上的外边距、边框、内边距所占用的空间都会被考虑在内。在垂直方向上，这些框可能会以不同形式来对齐：它们可能会把底部或顶部对齐，也可能把其内部的文本基线对齐。（通过vertical-align可以调整）能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。水平的margin、padding、border有效，垂直无效。不能指定宽高。
3. 行框的宽度是由包含块和存在的浮动来决定。行框的高度由行高计算这一章所描述的规则来决定。



IFC中的line box一般左右都贴紧整个IFC，但是会因为float元素而扰乱。float元素会位于IFC与与line box之间，使得line box宽度缩短。 同个ifc下的多个line box高度会不同。 IFC中时不可能有块级元素的，当插入块级元素时（如p中插入div）会产生两个匿名块与div分隔开，即产生两个IFC，每个IFC对外表现为块级元素，与div垂直排列。

## 总结
1. 一个line box总是足够高对于包含在它内的所有盒子。然后，它也许比包含在它内最高的盒子高。(比如，盒子对齐导致基线提高了)。
2. 当盒子B的高度比包含它的line box的高度低，在line box内的B的垂值对齐线通过’vertical align’属性决定。当几个行内级盒子在一个单独的line box内不能很好的水平放置，则他们被分配成了2个或者更多的垂直重叠的line boxs.因此,一个段落是很多个line boxs的垂直叠加。Line boxs被叠加没有垂直方向上的分离(特殊情况除外)，并且他们也不重叠。
3. 通常，line box的左边缘挨着它的包含块的左边缘，右边缘挨着它的包含块的右边缘。然而，浮动盒子也许会在包含块边缘和line box边缘之间。因此，尽管line boxs在同样的行内格式上下文中通常都有相同的宽度(就是他的包含块的宽度)，但是水平方向上的空间因为浮动被减少了，它的宽度也会变得复杂。Line boxs在同样的行内格式上下文中通常在高度上是多样的(比如，一行也许包含了一个最高的图片然后其他的也可以仅仅只包含文字)
4. 当在一行中行内级盒子的总宽度比包含他们的line box的宽度小，他们的在line box中的水平放置位置由’text align’属性决定。如果属性是’justify’，用户代理可能会拉伸空间和文字在inline boxs内。
5. 当一个行内盒子超过了line box的宽度，则它被分割成几个盒子并且这些盒子被分配成几个横穿过的line boxs。如果一个行内盒子不能被分割。则行内盒子溢出line box。
6. 当一个行内盒子被分割，分割发生则margins,borders,和padding便没有了视觉效果。
7. 在同样的line box内的行内盒子也许会被分割成几个盒子因为双向的文字。 
Line boxs在行内格式上下文中档需要包含行内级内容时被创造。Line boxs包含没有文字，没有空格，没有带着margins,padding和borders，以及没有其他在流中的内容(比如图片，行内盒子和行内表格)，也不会以新起一行结尾。对于在他们内的任何盒子的位置都以他们决定并且必须将他们视作没有高度的line boxs。

## 主要影响IFC内布局的css：
font-size
line-height
height
vertical-aligin

## IFC的作用
水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。
垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。


# GFC
GFC(GridLayout Formatting Contexts)直译为"网格布局格式化上下文"，当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。 

## 特点
grid栅格布局，二维布局模块，具有强大的内容尺寸和定位能力，适合需要在两个维度上对齐内容的布局

Grid Layout 是一种基于二维网格的布局系统，旨在完全改变我们设计基于网格的用户界面的方式，弥补网页开发在二维布局能力上的缺陷

与flex分为伸缩容器和伸缩项目类似，grid也分为网格容器和网格项目

## GFC有什么用呢，和table的区别
首先同样是一个二维的表格，但GridLayout会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。   
最最最普遍的例子----计算器界面


# FFC
FFC(Flex Formatting Contexts)直译为"自适应格式化上下文"，display值为flex或者inline-flex的元素将会生成自适应容器（flex container。  
Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。
伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。

## Flex兼容性
- Android   
2.3 开始就支持旧版本 display:-webkit-box;  
4.4 开始支持标准版本 display: flex;  
- IOS   
6.1 开始支持旧版本 display:-webkit-box;  
7.1 开始支持标准版本display: flex;  
- PC   
ie10开始支持，但是IE10的是-ms形式的。  


可以兼容到ie10及以上, 其他web浏览器基本没什么问题, 移动端不太好说, ios问题不打, 但是安卓像UC这类第三方浏览器太多了, 内核都是非常老的版本>,uc，微信等一些内核老的浏览器添加-webkit-前缀后支持，子属性也需要-webkit-前缀