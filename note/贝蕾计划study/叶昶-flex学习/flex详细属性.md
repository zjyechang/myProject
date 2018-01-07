# 以下为父元素属性
# align-content

> flex-start | flex-end | center | space-between | space-around | space-evenly | stretch

## 部分属性介绍
1. space-evenly
每行平均分配剩下的空间，每行间隔相同

2. start | end （chroem未实现）
flex-start | flex-end 必须要求是是flex容器的子元素，start | end 没有此限定

3. left | right（chrome未实现）
如果属性轴不与内联轴平行，就跟start | end相同

4. flex-start（flex-end）
所有行从垂直轴起点开始填充。第一行的垂直轴起点边和容器的垂直轴起点边对齐。接下来的每一行紧跟前一行。

5. space-between
所有行在容器中平均分布。相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的边对齐。

6. space-around
所有行在容器中平均分布，相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的距离是相邻两行间距的一半。

7. stretch
拉伸所有行来填满剩余空间。剩余空间平均的分配给每一行

8. safe | unsafe (chorme未实现)
溢出时如果队列都是start的元素那也对齐？
不管相对元素的尺寸，队列是好看的？



# align-items
> flex-start | flex-end | center | space-between | space-around | space-evenly | stretch
align-content决定行之间的间隔，而align-items决定元素整体在容器的什么位置。只有一行的时候align-content没有任何效果。

属性值与align-content相同


# justify-content
> flex-start | flex-end | center | space-between | space-around | space-evenly | stretch
定义了浏览器如何分配顺着父容器主轴的弹性元素之间及其周围的空间


属性值与align-content相同

# flex-wrap
> nowrap | wrap | wrap-reverse 
 flex 元素单行显示还是多行显示 。如果允许换行，这个属性允许你控制行的堆叠方向。

1. nowrap
flex 的元素被摆放到到一行，这可能导致溢出 flex 容器。 cross-start  会根据 flex-direction 的值 相当于 start 或 before。
2. wrap
flex 元素 被打断到多个行中。cross-start 会根据 flex-direction 的值选择等于start 或before。cross-end 为确定的 cross-start 的另一端。
3. wrap-reverse
和 wrap 的行为一样，但是 cross-start 和 cross-end 互换。


# flex-direction
> row | row-reverse | column | column-reverse
指定了内部元素是如何在 flex 容器中布局的，定义了主轴的方向(正方向或反方向)。

1. row
flex容器的主轴被定义为与文本方向相同。 主轴起点和主轴终点与内容方向相同。
2. row-reverse
表现和row相同，但是置换了主轴起点和主轴终点
3. column
flex容器的主轴和块轴相同。主轴起点与主轴终点和书写模式的前后点相同
4. column-reverse
表现和column相同，但是置换了主轴起点和主轴终点 


# flex-flow
> <'flex-direction'> || <'flex-wrap'>
flex-flow 属性是 flex-direction 和 flex-wrap 的简写。


# 以下为子元素属性


# order 
> <integer> 可以为负值
规定了弹性容器中的可伸缩项目在布局时的顺序。元素按照 order 属性的值的增序进行布局。拥有相同 order 属性值的元素按照它们在源代码中出现的顺序进行布局。

# align-self 
> auto | flex-start | flex-end | center | baseline | stretch

指定元素自身的情况

1. auto
设置为父元素的 align-items 值，如果该元素没有父元素的话，就设置为 stretch。
2. flex-start
flex 元素会对齐到 cross-axis 的首端。
3. flex-end
flex 元素会对齐到 cross-axis 的尾端。
4. center
flex 元素会对齐到 cross-axis 的中间，如果该元素的 cross-size 的尺寸大于 flex 容器，将在两个方向均等溢出。
5. baseline
所有的 flex 元素会沿着基线对齐
6. stretch
flex 元素将会基于容器的宽和高，按照自身 margin box 的 cross-size 拉伸。



# flex-grow
拉伸因数
1. <number> default 0  负值无效。
放大：默认0（即如果有剩余空间也不放大，值为1则放大，2是1的双倍大小，以此类推）



# flex-shink
属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。
1. <number>;   default 1  负值无效。
缩小：默认1（如果空间不足则会缩小，值为0不缩小）



# flex-basic
1. <'width'>
width 值可以是一个数字后面跟着绝对单位例如 px, mm, pt; 该值也可以是一个百分数，那么这个百分数就是相对于其父弹性盒容器的宽或者高（取决于主轴方向）。负值是不被允许的。
2. content
基于 flex 的元素的内容自动调整大小。  
由于最初规范中没有包括这个值，在一些早期的浏览器实现的flex布局中，content值无效，可以利用设置(width 或 height) 为 auto达到同样的效果

# flex
flex 属性可以指定1个，2个或3个值。

## 单值语法: 值必须为以下其中之一:
一个无单位数(<number>): 它会被当作<flex-grow>的值。
一个有效的宽度(width)值: 它会被当作 <flex-basis>的值。
关键字none, auto,或initial.

## 双值语法: 
第一个值必须为一个无单位数，并且它会被当作<flex-grow>的值。第二个值必须为以下之一：
一个无单位数：它会被当作<flex-shrink>的值。
一个有效的宽度值: 它会被当作<flex-basis>的值。

## 三值语法:
第一个值必须为一个无单位数，并且它会被当作<flex-grow>的值。
第二个值必须为一个无单位数，并且它会被当作 <flex-shrink>的值。
第三个值必须为一个有效的宽度值， 并且它会被当作<flex-basis>的值。
取值

<'flex-grow'>
定义 flex 元素的 flex-grow 属性，详见 <number>。默认值为 1，负值无效。  

<'flex-shrink'>
定义 flex 元素的 flex-shrink 属性，详见 <number>。默认值为 1，负值无效。  

<'flex-basis'>
定义 flex 元素的 flex-basis 属性。任何可用于 width 和 height 的值都可接受。若值为0，则必须加上单位，以免被视作伸缩性。 默认值为0%。  

none
该关键字等于 0 0 auto.   

> 当使用一个或两个无单位数时, flex-basis会从auto变为0. 可以参考Flexible Box Layout Module

 
## flex-grow flex-shrink flex-basis 搭配使用的作用
flex-grow 是扩展比率  
flex-shrink 是收缩比率  
flex-basis 伸缩基准值  


- 假设flex盒子父级宽度固定为800px，子元素的flex-basis总和加起来为1000px； 那么 1000px > 800px (父级的宽度)；子元素势必要压缩；，最后的选择是flex-shrink来进行压缩计算
- 同样上面的例子，我们改下父级宽度为1200px;
flex-basis的总和为 1000px，小于父级宽度，将有200px的剩余宽度；既然有剩余，我们就不要加权计算，剩余的宽度将根据flex-grow，值得总和进行百分比，那么200px就会根据份数比来分配剩余的空间；  

剩余后宽度 w = (子元素flex-grow值 /所有子元素flex-grow的总和) * 剩余值

所以以上两种情况下，第一种flex-grow是不列入计算公式的，第二种flex-basis和flex-shrink是不列入计算公式的。

很多时候我们的父级是不固定的，那么怎么办，其实很简单了，对照上面的公式，前提是已经设置了flex-basis值得元素，如果宽度的随机值小于flex-basis的时候就按第一种计算，反之第二种


