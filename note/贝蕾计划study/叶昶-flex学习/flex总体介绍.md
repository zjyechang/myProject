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

# 兼容性

兼容写法
```
.box{
    display: -webkit-box;  ** 老版本语法: Safari, iOS, Android browser, older WebKit browsers. **
    display: -moz-box;     ** 老版本语法: Firefox (buggy) **
    display: -ms-flexbox;  ** 混合版本语法: IE 10 **
    display: -webkit-flex; ** 新版本语法: Chrome 21+ **
    display: flex;         ** 新版本语法: Opera 12.1, Firefox 22+ **
}
```

## 包含属性
我们需要写09和标准两版语法，只有在两版语法中都存在属性才能使用

### 容器样式

.box{
flex-direction: row | row-reverse | column | column-reverse;  
**主轴方向：左到右（默认） | 右到左 | 上到下 | 下到上**

flex-wrap: nowrap | wrap | wrap-reverse;  
**换行：不换行（默认） | 换行 | 换行并第一行在下方**

flex-flow: <flex-direction> || <flex-wrap>;  
**主轴方向和换行简写**

justify-content: flex-start | flex-end | center | space-between | space-around;  
**主轴对齐方式：左对齐（默认） | 右对齐 | 居中对齐 | 两端对齐 | 平均分布**

align-items: flex-start | flex-end | center | baseline | stretch;  
**交叉轴对齐方式：顶部对齐（默认） | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐**

align-content: flex-start | flex-end | center | space-between | space-around | stretch;  
**多主轴对齐：顶部对齐（默认） | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 上下平均分布**

- align-items与align-content区别  
align-content决定行之间的间隔，而align-items决定元素整体在容器的什么位置。只有一行的时候align-content没有任何效果。
}
![image](https://pic1.zhimg.com/50/v2-8e8af8ed773cb0fe348a1ed804314ea8_hd.jpg)

### 子元素属性

.item{
order: <integer>;  
**排序：数值越小，越排前，默认为0**

flex-grow: <number>;   ** default 0 **  
**放大：默认0（即如果有剩余空间也不放大，值为1则放大，2是1的双倍大小，以此类推）**
a
flex-shrink: <number>;   ** default 1 **  
**缩小：默认1（如果空间不足则会缩小，值为0不缩小）**

flex-basis: <length> | auto;   ** default auto **  
**固定大小：默认为0，可以设置px值，也可以设置百分比大小**

flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]  
**flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto，**

align-self: auto | flex-start | flex-end | center | baseline | stretch;    
**单独对齐方式：自动（默认） | 顶部对齐 | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐**
}
![image](https://pic4.zhimg.com/50/v2-ad7c2e73a8323de4d5d35abbd2eb848d_hd.jpg)


###  微信，qq内置浏览器的内核X5
2016年4月，微信浏览器X5 升级Blink内核
基于BLINK的新X5内核已经在手机QQ浏览器上上线了

1. 内核基准从WebKit升级到Blink版本，更高的性能，更完善的H5/CSS3支持。
2. 内核版本号升级到362xx版本。 可以根据UserAgent判断当前环境是否已升级到 TBS2.0版本,包含（TBS/03xxxx）字段
3. 更完善的H5支持，HTML5跑分475
4. CSS3属性支持增强，完整支持flex
5. 更完善的filter支持
6. 支持Spdy 3.1
7. 动画性能提升
8. 支持伪元素动画效果
9. 更好的inspector支持

![image](https://pic2.zhimg.com/v2-0ea0d2af9d3240721395bdce9f815917_r.jpg)
![image](https://pic3.zhimg.com/50/v2-ef72c245e66fca96d257d37ee243ae06_hd.jpg)

- qq，微信的内置浏览器不用太担心了，但是uc还是比较坑的，要加前缀还只能支持09版的flex，而且很多属性还用不了


## 兼容解决
1. autoprefix插件
2. less，sass的预处理器mixin，但是其实大部分项目的mixin未必有人维护，哪天不需要前缀了不一定有人更新
3. css后处理器，例如postcss，babel也出了一个类似的babel-env，webpack中可以使用postcss-loader这个loader


## 踩坑与经验
1. 一般来说只要09版语法有对应功能，就可以使用了，但是移动端还有一些坑，导致某些属性不能用

2. justify-content: space-around 不能用，旧版语法没有，但是可以用space-between+容器的padding模拟

3. flex-wrap: wrap 不能用，对应的旧版语法 box-lines: mutiple 大部分浏览器不支持，也就是说不能折行

4. uc span行内元素作为子项时 display 必须设置为block，最好直接使用块级元素

5. 弹性盒子的排布与书写模式是一致的，这意味着排布的主轴起点和主轴终点根据的是开始与结束的位置。

6. 侧轴起点与侧轴终点依赖于开始或前面（before）的位置定义，而这个“前面”依赖于 direction 的值。

7. 只要 break- 属性的设置值允许，在弹性框布局中是可以存在分页的。CSS3 中的 break-after、break-before 和 break-inside，以及 CSS 2.1 中的 page-break-before、page-break-after 和 page-break-inside 属性在弹性容器上、弹性项目上和弹性项目内均可以使用。

8. 如果父元素设置了Flex容器，则子元素的float、clear和vertical-align属性将失效。


参考文档：
1. 微信内置浏览器对于 HTML5 的支持如何？  
https://www.zhihu.com/question/23595715  
2. 2017年如何在移动端优雅的使flex  
https://zhuanlan.zhihu.com/p/29637639  
3. Flex布局及在移动端的应用      
https://www.jianshu.com/p/9a504d3c18fc