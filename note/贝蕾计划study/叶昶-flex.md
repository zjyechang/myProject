# flex
## 定义
CSS 弹性盒子布局是 CSS 的模块之一，定义了一种针对用户界面设计而优化的 CSS 盒子模型。在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。子元素的水平对齐和垂直对齐都能很方便的进行操控。通过嵌套这些框（水平框在垂直框内，或垂直框在水平框内）可以在两个维度上构建布局。

## 专业术语
<img src="https://mdn.mozillademos.org/files/12998/flexbox.png"> 

### 弹性容器(Flex container)
包含着弹性项目的父元素。通过设置 display 属性的值为 flex 或 inline-flex 来定义弹性容器。
### 弹性项目(Flex item)
弹性容器的每个子元素都称为弹性项目。弹性容器直接包含的文本将被包覆成匿名弹性单元。

### 轴(Axis)
每个弹性框布局包含两个轴。弹性项目沿其依次排列的那根轴称为主轴(main axis)。垂直于主轴的那根轴称为侧轴(cross axis)。

- flex-direction 确立主轴。
- justify-content 定义了在当前行上，弹性项目沿主轴如何排布。
- align-items 定义了在当前行上，弹性项目沿侧轴默认如何排布。
- align-self 定义了单个弹性项目在侧轴上应当如何对齐，这个定义会覆盖由 align-items 所确立的默认值。
### 方向(Direction)
弹性容器的主轴起点(main start)/主轴终点(main end)和侧轴起点(cross start)/侧轴终点(cross end)描述了弹性项目排布的起点与终点。它们具体取决于弹性容器的主轴与侧轴中，由 writing-mode 确立的方向（从左到右、从右到左，等等）。

order 属性将元素与序号关联起来，以此决定哪些元素先出现。
flex-flow 属性是 flex-direction 和 flex-wrap 属性的简写，决定弹性项目如何排布。
### 行(Line)
根据 flex-wrap 属性，弹性项目可以排布在单个行或者多个行中。此属性控制侧轴的方向和新行排列的方向。

### 尺寸(Dimension)
根据弹性容器的主轴与侧轴，弹性项目的宽和高中，对应主轴的称为主轴尺寸(main size) ，对应侧轴的称为 侧轴尺寸(cross size)。

min-height 与 min-width 属性初始值将为 0。
flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写，描述弹性项目的整体的伸缩性。

## 兼容性
<img src="http://img.blog.csdn.net/20160922210759487">

兼容写法
```
.box{
    display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. *
    display: -moz-box;     /* 老版本语法: Firefox (buggy) *
    display: -ms-flexbox;  /* 混合版本语法: IE 10 *
    display: -webkit-flex; /* 新版本语法: Chrome 21+ *
    display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ *
}
```
## 
弹性盒子的排布与书写模式是一致的，这意味着排布的主轴起点和主轴终点根据的是开始与结束的位置。

侧轴起点与侧轴终点依赖于开始或前面（before）的位置定义，而这个“前面”依赖于 direction 的值。

只要 break- 属性的设置值允许，在弹性框布局中是可以存在分页的。CSS3 中的 break-after、break-before 和 break-inside，以及 CSS 2.1 中的 page-break-before、page-break-after 和 page-break-inside 属性在弹性容器上、弹性项目上和弹性项目内均可以使用。



## 包含属性
容器样式

.box{
flex-direction: row | row-reverse | column | column-reverse;  
/*主轴方向：左到右（默认） | 右到左 | 上到下 | 下到上*

flex-wrap: nowrap | wrap | wrap-reverse;  
/*换行：不换行（默认） | 换行 | 换行并第一行在下方*

flex-flow: <flex-direction> || <flex-wrap>;  
/*主轴方向和换行简写*

justify-content: flex-start | flex-end | center | space-between | space-around;  
/*主轴对齐方式：左对齐（默认） | 右对齐 | 居中对齐 | 两端对齐 | 平均分布*

align-items: flex-start | flex-end | center | baseline | stretch;  
/*交叉轴对齐方式：顶部对齐（默认） | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐*

align-content: flex-start | flex-end | center | space-between | space-around | stretch;  
/*多主轴对齐：顶部对齐（默认） | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 上下平均分布*
}
子元素属性

.item{
order: <integer>;  
/*排序：数值越小，越排前，默认为0*

flex-grow: <number>;   /* default 0 *
/*放大：默认0（即如果有剩余空间也不放大，值为1则放大，2是1的双倍大小，以此类推）*
a
flex-shrink: <number>;   /* default 1 *
/*缩小：默认1（如果空间不足则会缩小，值为0不缩小）*

flex-basis: <length> | auto;   /* default auto *
/*固定大小：默认为0，可以设置px值，也可以设置百分比大小*

flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
/*flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto，*

align-self: auto | flex-start | flex-end | center | baseline | stretch;  
/*单独对齐方式：自动（默认） | 顶部对齐 | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐*
}