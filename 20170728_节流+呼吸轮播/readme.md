# apply和call语句初步
			var obj = {  
				"name" : "考拉",  
				"age" : 18,  
				"jiehun" : false}  
		  
		function xi(a,b,c){  
			console.log(this.name);  
				console.log(a + b + c);  
			}  
	  
			xi.call(obj,2,3,4);  
			xi.apply(obj,[2,3,4]);  
  
call和apply功能一样，就是让一个函数里面的this设置为一个对象。
拿上例来说，xi函数里面的this就是obj对象。但是我们发现，xi这个函数，有参数。那么我们现在又想设置this是谁，又想把参数往里传，此时就有区别了：

    fn.call(obj,参数1,参数2,参数3……);  
	fn.apply(obj,[参数1,参数2,参数3……]);  
# 运动算法
他们的参数，都是t、b、c、d：  
	function easeIn(t,b,c,d){  
	    return c * ( t /= d) * t + b;  
	}  
		第一个参数t表示当前帧编号  
		第二个参数b表示起始位置  
		第三个参数c表示变化量  
		第四个参数d表示总帧数  
tween.js文件里有封装代码
# setTimeout 延时器

# 函数节流
判断一个值是否执行完毕后
