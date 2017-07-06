<!-- TOC -->

- [1. form 2](#1-form-2)
    - [1.1. input 属性](#11-input-属性)
    - [1.2. textarea 文本域](#12-textarea-文本域)
    - [1.3. label](#13-label)
    - [1.4. select 选择列表](#14-select-选择列表)
        - [1.4.1. option](#141-option)
    - [1.5. datalist](#15-datalist)
        - [1.5.1. option可以只有开始标签，也可以写完整](#151-option可以只有开始标签也可以写完整)
    - [1.6. fieldset](#16-fieldset)
    - [1.7. 转义字符](#17-转义字符)
    - [css选择器的组合使用](#css选择器的组合使用)
        - [#id.class](#idclass)
        - [#id .class](#id-class)
        - [#id>.class](#idclass)
        - [#id+.class](#idclass)
- [伪类](#伪类)

<!-- /TOC -->
# 1. form 2
## 1.1. input 属性
maxlength 最大字符数  
placeholder 占位符  
readonly 只读  
required  必填非空
## 1.2. textarea 文本域
cols 显示列数  
rows 显示行数  
## 1.3. label
for 通过id来绑定目标  
经常与radio checkbox搭配使用
## 1.4. select 选择列表
required  
size 显示的行数,默认1  
multiple 多选，通过ctrl+单机选  
### 1.4.1. option
value  
selected 默认选项  
disabled 不可选中项  
## 1.5. datalist 
不能单独使用,搭配input使用  
通过input的list指定datalist的id
### 1.5.1. option可以只有开始标签，也可以写完整
<option value="">？</option>  
<option value="">
## 1.6. fieldset 
对表单进行分区
legend 是fieldset的标题
## 1.7. 转义字符
&nbsp;空格
&gt;大于
&lt;小于
&copy;版权
## css选择器的组合使用
### #id.class
分类分组选择器
### #id .class
后代选择器
### #id>.class
子代选择器
### #id+.class
兄弟选择器
# 伪类
link 访问前  
visited 访问后  
hover 鼠标经过  
active 鼠标按着
