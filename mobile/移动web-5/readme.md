# 手机轮播图

# 手机滚滚屏
原理和滑动轮播图是一样一样的，就是手指移动的时候，实时跟随手指，手指抬起来的时候，要进行一个决断：是滑动成功还是没有滑动成功，用过渡的动画显示出来。
所以，滑动的时候：
1	transition:none;
滑动结束之后，手指抬起来之后
1	transition:all 0.4s ease 0s;

手指滚滚屏和我们PC的滚滚屏（微信T管家）有很大的区别，就是没有鼠标滚轮事件监听，而是手指事件。手指滑动的时候，实时跟随手指的。

1	touchstart:	
2		记录起点位置
3	
4	touchmove:
5		让idx、prev、next有实时的translateY
6	
7	touchend:
8		信号量的改变
9		判断是否成功滑动

# zepto
阉割版的jquery，但是动画部分是css3原版的；

# 惯性滑动
实现原理，就是利用touchmove事件并不是每一像素都触发，而是有一个固有的时间周期。我们只需要记录每一个时间周期手指的位置，就能够判断出来手指移动的速度快慢。

# web响应式

## css 方式
利用1	@media screen and(min-width:1200px){}媒体查询实现
直接写在link里面
    <link rel="stylesheet" type="text/css" href="css/index980.css" media="screen and (min-width:980px) and (max-width:1200px)"/>
## js 方式实现
	document.documentElement.clientWidth利用js读取屏幕宽度实现


# bootstrap
## 十二栅格布局  
超小屏幕 手机 (<768px)	.col-xs-  
小屏幕 平板 (≥768px)	    .col-sm-  
中等屏幕 桌面显示器 (≥992px)	    .col-md-  
大屏幕 大桌面显示器 (≥1200px)    .col-lg-  

## 列偏移
.col-md-3 .col-md-offset-3左边空出三列

## 列嵌套
    <div class="row">
        <div class="col-sm-9">
            Level 1: .col-sm-9
            <div class="row">
            <div class="col-xs-8 col-sm-6">
                Level 2: .col-xs-8 .col-sm-6
            </div>
            <div class="col-xs-4 col-sm-6">
                Level 2: .col-xs-4 .col-sm-6
            </div>
            </div>
        </div>
    </div>

## 列排序
通过使用 .col-md-push-* 和 .col-md-pull-* 类就可以很容易的改变列（column）的顺序。

## 排版
有单独的h1-h6样式，可以用small标签包裹使得字号小一圈

## 各种样式模板自行复制