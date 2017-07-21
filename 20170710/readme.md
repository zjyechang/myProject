# css3 选择器
## 属性选择器
```
.class [src=""]{  

}
```  

css2:  

    [attribute]  

    [attribute=""]必须是完整的属性值  

    [attribute~=""]只要包含其中一个属性值就能选中  

    *[attribute|=""]必须是完整的属性值或者以“-”连接的完整属性值的首个单词  

      
css3：
    [attribute^="text1"]属性值以text1开头的  
 
    [attribute$="text2"]属性值以text2结尾的  

    [attribute*="text3"]属性值包含text3的  

    element:first-of-type 一段并列的标签中的第一个  
    element:last-of-type 一段并列标签中的最后一个  

    .father :first-child 一定要指明父元素是谁  
    .father :last-child 一定要指明父元素是谁  

两者区别：  
    :first-of-type 相对于并列的元素而言  
    :first-child 相对于父容器而言  

    :nth-child 相对于父容器而言  
    ```
    :nth-child(2n){  

    }
    ```  

# css3 边框
## border-radius:0 90px 0 50%;
左上开始，顺时针
## box-shadow:;
x轴 y轴 模糊度
## *border-image
# css3 背景
## background-size
background-size:10px 50% ;  
可用像素，百分比（根据父容器计算）  

cover 最小一条边达到父容器大小  ，另外一条边超出

contain 只要一条边达到父容器大小，就不再放大  
## background-origin/background-clip
origin：指定背景图从哪开始铺  
clip：指定背景图从哪开始裁剪  

padding-box 默认，背景图从padding左上角开始  

content-box 背景图从content（内容）左上角开始

border-box 背景图从border左上角开始  

## background--blend-mode

1. 当一个div有两个背景图的时候
  

# 浮动元素本身，可以被正常撑开的



# a标签
样式一定要设置到a标签自身。  
设置在父元素的样式无效  

# margin:0 auto;不能居中问题
1.没设置宽度
2.设置了position：static；属性
3.元素不能浮动

解决方法  
1.只是在要居中的div外层添加多一个div,并使其居中。
2.设置宽度
3,。去掉浮动及更改static