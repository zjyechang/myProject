#小知识点：  
## transform:translateY(-50%);  
向上移动自己身高的一半。可以轻松实现绝对定位的盒子垂直居中。  

## 给添加的元素添加样式
当一个元素是动态添加到DOM树的时候，transition不生效，需要时间准备。所以一定要记住：在创建元素之后，要把css的变化语句，放到1毫秒之后执行。


# 圆周运动
当一个角度确定的时候，此时的x、y的坐标是什么：
	o.style.left = a + r * Math.sin(degreeToRad(degree)) + "px";
	o.style.top = b - r * Math.cos(degreeToRad(degree))  + "px";
一定要记住，Math.sin()、Math.cos()里面的值都是弧度制，而不是角度制。所以要进行转换：
	function degreeToRad(degree){
		return degree * Math.PI / 180;3	}
    
#* animation

## 关键帧
必须定义关键帧及其名字搭配animation使用
    @-webkit-keyframes yundong{
        from{
            left: 100px;
        }
        to{
            left:700px;
        }
    }
可以用百分比替换from{}to{}


## 动画的调用
animation属性完整的调用一共有7个参数：  
	animation: yundong 1s linear 0s 5 alternate forwards;
第1个参数：动画的名字  
第2个参数：动画的总时长，别忘了写s  
第3个参数：缓冲  
第4个参数：延迟时间，注意如果动画进行很多次，只有第一次开始前有延迟  
第5个参数：运动次数，要无限次写infinite  
第6个参数：是否来回运动，如果写alternate那么第偶数次将是时间轴的逆向  
第7个参数：forwards表示当运动结束之后让这个元素保留在原地  

# velocity.js
velocity.js应运而生，是一个动画引擎，它能够独立于jQuery运行，但是自己不具备$()选择元素功能；它又能够给所有的jQuery对象加上一个方法叫做velocity方法。也就是说，velocity.js可以认为是jQuery插件。

官网：http://www.julian.com/research/velocity/

velocity给jQuery对象增加了velocity方法，API和jQuery中的animate函数一样一样的：
1	$("img").velocity({"width":400,"height":400},1000,function(){
2		$(this).hide();
3	});
通过观察，知道了velocity的动画机理还是定时器，底层还是setInterval那个运动框架。也就是说在动画机理层面上，velocity并没有做出质的改变。

那velocity有什么意义呢？它拓展了jQuery中的animate函数。

 
velocity能够实现rotateZ的动画：
1	$("img").velocity({"rotateZ":"40deg"},1000);
机理是定时器！！

velocity能够实现背景颜色的动画：
1	$("body").velocity({"backgroundColor":"#123"},10000);
机理是定时器！！

velocity能够实现3D的动画：
1	$("img").velocity({"rotateX":"40deg"},1000);
机理是定时器！！

总结一下：
velocity放弃了所有能够用过渡实现的动画效果。连rotateX这种3D的变化，都用定时器实现了。所以感觉是一种“退化”，明明用transition能实现，为什么还要用定时器呢？毕竟我们之前说过，transition的效率比定时器高过了。这就叫做“舍得”，有舍才有得，velocity放弃了效率，但是赢回了“正向编程”编程的快感。你会发现，动画时间不用写在css里面了，也有了回调函数。
一定要记住velocity就是jQuery的插件，丰富了jQuery中animate函数的功能。

1	$("img").velocity({
2		"rotateX":"40deg",
3		"rotateY":"40deg",
4		"translateZ":"400px"
5	},1000,function(){
6		//回调函数
7		$(this).fadeOut();
8	});

