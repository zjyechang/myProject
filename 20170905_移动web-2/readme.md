
# display:box
父元素设置display:-webkit-box;子元素可按比例设置-webkit-box-flex:1;  **已经被淘汰**
现在用display:flex;替代了，子元素设置flex-grow:1;
# flex详细

## 容器中项目六个属性
**order**　　项目的排列顺序。数值越小，排列越靠前，默认为0。
**flex-grow**　　项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
**flex-shrink**　　项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
**flex-basis**　　在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
**flex**　　是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
**align-self**　　允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
### order
    .item {
        order: <integer>;
    }
### flex-grow
    .item {
       flex-grow: <number>; /* default 0 */
    }
### flex-shrink
    .item {
       flex-shrink: <number>; /* default 1 */
    }
### flex-basis
    .item {
        flex-basis: <length> | auto; /* default auto */
    }
### flex
    .item {
        flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
     }
### align-self
    .item {
       align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }


## 容器上六个属性
**flex-direction**　　容器内项目的排列方向(默认横向排列)　　
**flex-wrap**　　容器内项目换行方式
**flex-flow**　　以上两个属性的简写方式
**justify-content**　　项目在主轴上的对齐方式
**align-items**　　项目在交叉轴上如何对齐
**align-content**　　定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。


## flex-direction

    box { 2 flex-direction: row | row-reverse | column | column-reverse; 3 } 

属性可选值的范围为row(默认)沿水平主轴由左向右排列、row-reverse沿水平主轴由右向左排列、column沿垂直主轴右上到下和column-reverse。

 

## flex-wrap 
    box{ 2 flex-wrap: nowrap | wrap | wrap-reverse; 3 } 

属性可选值的范围为nowrap(默认)不换行、wrap换行（第一行在上方）和wrap-reverse（你懂的~）

 

## flex-flow

    box { 2 flex-flow: <flex-direction> || <flex-wrap>; 3 } 

写法属性中，将上述两种方法的值用||连接即可

 

## justify-content

    box { 2 justify-content: flex-start | flex-end | center | space-between | space-around; 3 } 

项目在主轴上的对齐方式(主轴究竟是哪个轴要看属性flex-direction的设置了)

flex-start：在主轴上由左或者上开始排列

flex-end：在主轴上由右或者下开始排列

center：在主轴上居中排列

 space-between：在主轴上左右两端或者上下两端开始排列

 space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

## align-items

    box { 2 align-items: flex-start | flex-end | center | baseline | stretch; 3 } 

## align-content

    box { 2 align-content: flex-start | flex-end | center | space-between | space-around | stretch; 3 } 
这里面直接上图片说明的更清楚一些
# 视口
	document.documentElement.clientWidth;
电脑为分辨率，手机端的视口viewport为960；
加一条视口约束，出来的则为物理视口
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

# box-sizing属性
默认content-box  只计算padding和content大小
border-box则计算大小时包括边框厚度

# calc
计算后样式，例如width:calc(100% - 400px);  
空格必须要,无空格不生效

# 布局方案
## 固定布局
## 浮动布局
## 流式布局
全用百分比布局   
**子元素的margin和padding百分比只根据父元素的width宽来确定**  
## 弹性布局
## 定位布局
## 多列布局
columu属性

## 圣杯布局
## 双飞翼布局
### 方案一
中间的width用calc(100% - 400px);

### 方案二
父元素设置display:-wbkit-box;  
子元素中间那个设置-webkit-box-flex:1;

### 方案三
利用绝对定位，两侧方块定位在左右两侧，中间方块设置width:100%,padding:0 200px;即可  

### 方案四
利用js计算中间方块的样式


# img只设定width的话会按照比例缩放
但是img在div中是最下方会有一条白边，可以用js计算得到div中的height属性，也可以将height设置为0；用padding-top与width比例为图片的长宽比设置。

# display
# css预处理器
## less

## sass


# 思维导图