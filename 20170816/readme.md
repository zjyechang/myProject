# jquery 

## 序与迭代

### eq()方法
与index(),lt、gt、odd、even、first、last相同序列号  
都是从父元素下的子元素开始计算，不同父元素从0开始重新计算  

### index()
返回这个元素在亲兄弟中的排名，无视选择器怎么选。

### each()
each()表示遍历节点，也叫作迭代符合条件的节点。
``` $("p").each(function(i){
        $(this).animate({"width":50 * i},1000);
    });
```
each()方法中自带序列号i  

### size()方法 
与.length属性相同 

## get()
与eq()的序列号相同，get()获得的是js原生对象，eq()获得的是jq对象.   
   $("p").eq(2).html("哈哈哈哈哈哈");
等价于：
   $("p").get(2).innerHTML = "哈哈哈哈哈哈";
等价于：
   $("p").eq(2)[0].innerHTML = "哈哈哈哈哈哈";

## 动画相关

### 内置 show(),hide(),toggle()方法 
show()显示、hide()隐藏、toggle()切换

   $("div").show();        //让一个本身是display:none;元素显示
   $("div").hide();        //隐藏元素display:none;
   $("div").toggle();      //切换显示状态。

特别的，如果show()、hide()、toggle()里面有数值，将变为动画：
1  $("div").show(1000);
效果：此时display:none;的元素，将从左上角徐徐展开。动画机理：
这个display:none;的元素会变为显示的，然后瞬间将宽度、高度、opacity设为0，然后徐徐展开。  
   $("div").show([时间],[回调函数]);

### slideDown()、slideUp()、slideToggle()方法
slideDown : 下滑展开  
slideUp：上滑收回  
slideToggle : 滑动切换  

### stop
停止当前的animate动画，但是不清除队列，立即执行后面的animate动画：
	$("div").stop(); //等价于$(“div”).stop(false,false);

停止当前的animate动画，并且清除队列，盒子留在了此时的位置：
	$("div").stop(true);//等价于$(“div”).stop(true,false);

瞬间完成当前的animate动画，并且清除队列：
	$("div").stop(true,true);

瞬间完成当前的animate动画，但是不清楚队列，立即执行后面的动画：
	$("div").stop(false,true);
  
结束后可以进行下一个动画，例如：

### finish()
瞬间完成所有动画队列并瞬间出现在动画最终结束的位置  

### delay()
小窍门，让所有的img元素，都延迟不同的时间入场：

	$("img").each(function(i){
		//attr就表示得到标签内的属性
		$(this).delay(i * 1000).fadeIn(1000);
	});

### is()
is()方法表示身份探测，返回true、false。  
	$(this).is("p:odd")  
	$(this).is("p:lt(3)")  
	$(this).is(":animated")  //可以用作节流


