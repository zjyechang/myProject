# for 循环  
    for(var i = 1; i<=5;alert("你好")){
        i++;    
        console.long(i)  
    }  
      <!-- 2, 3 ,4 ,5 弹出4个框    -->

    for(var i =1 ;i<10;i++){  
        for(var j =1; j<10;j++){  
            console.log(i+"乘"+j+"等于"+(i*j))  
        }  
    }  
 
  
    for(var i =1; i<=48;i++){  
        if(48%i == 0){  
            console.log(i)  
        }  
    }  


    var sum = 0;
    for(var i = 1;i<=48;i++){  
        if (48%i == 0){  
            console.log(i)  
            sum++;
        }  
    }  

## break
打断此循环（外层循环不打断）
//break只能终止内层循环，但是我们就是想要终止外层循环  
2			//就要给外层循环加label：  
3			waiceng : for(var i = 1 ; i <= 10 ; i++){  
4				for(var j = 1 ; j <= 10 ; j++){  
5					console.log(i,j);  
6					if(j == 5){  
7						break waiceng;	 	//break label的语法
8					}  
9				}  
10			}  

## continue
跳过此循环，继续下次循环


<!-- 寻找2~100之内的所有质数 -->
			waiceng : 
			for(var i = 2 ; i <= 100 ; i++){  
				//我们要测试i是不是质数，之前我们的算法是测试i的约数个数（不包括1和自己）  
				//约数个数如果为0，那么就是质数。  
				//凭什么我要测试约数个数？？  
				//只要你有约数，你就不是质数！！！！  
				for(var j = 2 ; j <= Math.sqrt(i) ; j++){  
					if(i % j == 0){  
						continue waiceng;	//如果这数字，被某一个数字整除了，那么立即放弃他  
											//开始验证下一个i  
					}  
				}  
	
				console.log(i);	//如果一个数字有约数，就会执行  continue，就遇不见这个语句了。  
			}  

# do whihle 循环


# while 循环
		var n = 1;  
			while(n <= 100){   
				console.log(n);   
			n++;   
			}   
*步长自己设置*
## Math.random
(0,1)之间的开区间  
如果想要在[a,b]闭区间取随机数，能取到a，也能取到b：  
	parseInt(Math.random() * (b - a + 1)) + a;  
## 调试
F12里面的sources  
右侧watch里面加想要看的变量  
鼠标点击想要看的代码行，点击刷新  
右侧watch可以开始下一步看故障