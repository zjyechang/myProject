
<!-- TOC -->

- [1. markdown语法](#1-markdown语法)
    - [1.1. 一级到六级标题](#11-一级到六级标题)
    - [1.2. 列表](#12-列表)
        - [1.2.1. 有序列表数字加空格](#121-有序列表数字加空格)
        - [1.2.2. 无序列表*或-加空格](#122-无序列表或-加空格)
    - [1.3. 注释](#13-注释)
    - [1.4. 换行](#14-换行)
    - [1.5. 强调](#15-强调)
    - [1.6. 目录](#16-目录)
    - [1.7. 转化格式](#17-转化格式)
- [2. git 命令](#2-git-命令)
    - [2.0. Git 安装](#20-git-安装)
    - [2.1. 初始化](#21-初始化)
    - [2.2. 添加远程链接](#22-添加远程链接)
    - [2.3. 提交缓存](#23-提交缓存)
    - [2.4. 拉取](#24-拉取)
    - [2.5. 推送](#25-推送)
    - [2.6. git config user.name ""](#26-git-config-username-)
    - [2.7. git reflogs](#27-git-reflogs)
    - [2.8. git log](#28-git-log)
    - [2.9. git reset [reflog里的版本号]](#29-git-reset-reflog里的版本号)
- [3. table](#3-table)
    - [3.1. table属性](#31-table属性)
    - [3.2. tr](#32-tr)
    - [3.3. td](#33-td)
    - [3.4. th](#34-th)
- [4. form表单](#4-form表单)
    - [4.1. action=""](#41-action)
    - [4.2. method=""](#42-method)
    - [4.3. input](#43-input)
        - [4.3.1. type](#431-type)
        - [4.3.2. name](#432-name)
        - [4.3.3. value](#433-value)

<!-- /TOC -->
# 1. markdown语法
标题
## 1.1. 一级到六级标题
## 1.2. 列表
### 1.2.1. 有序列表数字加空格
### 1.2.2. 无序列表*或-加空格
## 1.3. 注释
 ```开始```结束
## 1.4. 换行
两个空格以上加enter建
## 1.5. 强调
*强调*  
**强调**
## 1.6. 目录
TOC插件
## 1.7. 转化格式
convert   

ctrl+shift+p
<img src="#" alt="笔记">可用


# 2. git 命令
## 2.0. Git 安装
    勾选，use Git from window command promt
## 2.1. 初始化
git init
## 2.2. 添加远程链接
git remote add oringin [网络地址]
## 2.3. 提交缓存
git add .  
把我们当前目录下面的所有文件，添加到***待提交***中,暂时还没生成版本  
git commit -m "tianjia"  
  可以简单的理解为保存代码版本
## 2.4. 拉取
git pull origin master
## 2.5. 推送
git push origin master
## 2.6. git config user.name ""
添加用户名
## 2.7. git reflogs
查看以前的提交修改记录，所有版本改动都有
## 2.8. git log
只能看到以前版本，之后修改的看不到
## 2.9. git reset [reflog里的版本号]
加--hard强制提交

# 3. table
 标题标签caption无关表格大小，额外
分组thead tbody tfoot
tr 行 td 列
table tr td
## 3.1. table属性
height width border align
cellspacing单元格外的距离
cellpadding单元格框到内容距离
## 3.2. tr
align（left center right)
valign (top middle bottom)
## 3.3. td
align valign 
colspan 向右合并
rowspan 向下合并
## 3.4. th
加粗文本
# 4. form表单
## 4.1. action="" 
## 4.2. method=""
默认get网页上能看到提交
post不能看到
## 4.3. input
### 4.3.1. type
text 文本框
password 密码
email 邮箱
number 数字
date 日期
color 颜色
range 范围条
checkbox 多选
radio 单选
button 点击按钮
submit 提交
reset 重置
image 图片按钮
file 文件
### 4.3.2. name
### 4.3.3. value

1.1.1. input
输入框元素

属性:

    name            数据提交时的名字

    value           输入框的默认值

    placeholder     占位符

    maxlength       允许输入的字符长度，注意与max区分

    readonly        只读

    required        必须,非空。对于单选框，下拉列表，滚动列表比较常见

    type    text(default)  文本输入框
            password       密码输入框
            number         数字输入框    max min step
            email          邮箱输入框    不能全信
            date           日期输入框

            color          取色器
            range          滚动条

            checkbox 复选框
            radio 单选框
                同name属性的radio，只能选中一个
                一般必有一个radio具有checked属性

            button 默认按钮
            submit 提交按钮
            reset  重置按钮
            image  图片提交按钮

            file    文件提交

### 1.1.2. textarea

属性

    cols 按英文字符计算,默认显示的列数+2,也是textarea的最小宽度
    rows 默认显示行数，也是textarea的最小高度

    name            数据提交时的名字

    value           输入框的默认值

    placeholder     占位符

    maxlength       允许输入的字符长度，注意与max区分

    readonly        只读

    required        必须,非空
