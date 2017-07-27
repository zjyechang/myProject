## 以class名做轮播图
## 以src属性做轮播图（图片名称必须为1,2,3,4有序）

# 获取样式
## 高级浏览器:
完整:window.getComputedStyle(oDiv).getPropertyvalue("padding-left")  

简写getComputedStyle(oDiv)["padding-left"]  
或getComputedStyle(oDiv)["paddingLeft"]

## 低级浏览器 
oDiv.currentStyle.paddingLeft  
或oDiv.currentStyle["height"]

## 能力测试（兼容）
if (getComputedStyle){  
    alert(getComputedStyle(oDiv)["padding-left"])  
}else{  
    alert(oDiv.cuttentStyle.paddingLeft);  
}
##封装一个函数
 function fetchComputedStyle(obj,property){  
            if (getComputedStyle){    
                alert(getComputedStyle(obj)[property]);     
            }else{    
                alert  (oDiv.currentStyle.property);     
            }  
        }  
# 透明度 opacity

# offset

# 定时器
单位：毫秒    
设表先关
