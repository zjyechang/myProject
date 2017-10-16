# canvas
## 设置canvas的宽高，行内设置，无单位

## 获取canvas

## 创建画笔
ctx = canvas.getContext("2d);

## 填充颜色，描边颜色
ctx.fillStyle = "red";  
ctx.strokeStyle = "red";  

## 实心矩形，空心矩形
ctx.fillRect(a,b,c,d);  
ctx.strokeReck(a,b,c,d);  
a：X轴坐标  
b：y轴坐标  
c：宽度  
d：高度  

## 画圆
 ctx.arc(200,200,i,0.5*Math.PI,1.5*Math.PI,false);   
,参数圆心x坐标，y坐标，半径，起始角弧度，结束角弧度,正负时针方向(false顺时针)  

## 开始，移动画笔，画线,结束
ctx.beginPath();  
ctx.moveTo(120,100);//移动到x：120，y：100  
ctx.lineTo(20,20);//画到x：20，y：20  
ctx.closePath();  

## 画笔线宽
ctx.lineWidth = 5;//无单位

## 添加图片
ctx.drawImage(img,79*m,216,79,108,150,100,79,108);  
//图片，图片x坐标，图片y坐标，截取图片的宽度，截取图片的高度，在画布中的x坐标，在画布中的y坐标，图片尺寸宽，图片尺寸高    

## 移动原点位置
ctx.translate(100,200);//原点移到x：100，y：200  

# 旋转画布
ctx.rotate(0.5*Math.PI);

# 添加文本
ctx.font="20px 微软雅黑";
ctx.fillText("文本内容",x坐标,y坐标);

## 保存，读取
ctx.save();
ctx.restore();

## svg使用，字体图标的转换和使用

## 百度地图api调用

## less使用
利用git bash 输入$ npm install -g less

配置，利用easy less  
