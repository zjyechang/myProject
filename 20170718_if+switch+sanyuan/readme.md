# 算数运算符
    +  
    -  
    *   
    /  
    %

# 比较运算符 
    >   
    <  
    >=   
    <=  
    ==  
    === 全等于    类型也要判断
    != 不等与    
    !== 不全等   
## ASCAII 表（背）

# 逻辑运算符
  
## && 与运算   
    遇到假 输出，全真 输出最后一个
## || 或运算  
    遇到真 输出，全假 最后一个输出
## ！非运算  


## 赋值运算符
=	赋值
+=	简便写法
-=	简便写法
*=	简便写法
/=	简便写法
%=	简便写法
++
--

**运算顺序是非、与、或**

  
**运算符的计算顺序？：**
++ -- !贴身的→→→数学→→→比较→→→逻辑→→→赋值

# if 条件语句
if(condition){  
    ......  
}else{  
    .....  
}


中间添加多个else if(){  

}

var str = prompt("请输入红包口令")  
    if(str = "html"){  
        alert("恭喜你获得1元)  
    }else if(str = "css"){  
        alert(""恭喜你获得5元)  
    }else if (str = "js"){  
        alert("恭喜你获百元大奖")  
    }else{  
        alert("恭喜你！没中奖~")  
    }
    
# switch case语句
 switch (待检测值){   
     case ?:      
        ......;   
        break;  
    case ??:  
        ......;   
        break;  
    default:
        ......;
        break;
 }
 *类型不一样不会弹出*  

 不写break不会中断。
# 三元运算符
	条件? val1 : val2  
    1	var xishu = salary > 8000 ? 1.2 : 1;
等价于：
1	if(salary > 8000){
2		xishu = 1.2;
3	}else{
4		xishu = 1;5	}

wo