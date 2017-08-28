# 服务器环境
# echo
# 变量以$开头
# 连字符.
# 数据类型
# 变量的作用域
# 运算符
# 数组
# php手册
# php 是弱类型语言
# js 也是弱类型语言
# java 是强类型语言
# 弱类型： 在赋值时没有强制赋值类型
# 动态类型：变量可以改变类型


检查手机号的api
http://chongzhi.jd.com/json/order/search_searchPhone.action?mobile=

# 超全局变量
$_SERVER
$_GET
$_POST

# 连字符
PHP连字符是.，不过很少用。因为PHP很智能：
连字符：
	<?php
		$a = 100;
		echo "我买了" . $a ."个苹果";
	?>
等价于：
	<?php
		$a = 100;
		echo "我买了{$a}个苹果";
	?>
注意，只能用双引号。单引号就是原样输出，不智能了：

# 数组
PHP中定义一个数组，不是用[]，用$xx = array("a","b","c")
数组长度 count($xx)

## 遍历
PHP推出了一个语法，叫做foreach循环语句，专门用来遍历有键名的数组：

$chengji = array("yuewen"=>100,"shuxue"=>99,"yingyu"=>44,"huaxue"=>33,"wuli"=>87);
		
foreach($chengji as $k => $v){
	echo "我的{$k}科目成绩是{$v}" . "<br />";
}

## 连接两个数组：
$array = array_combine($array1,$array2)

## 差数组：
	<?php
		$mingxing = array("杨幂","黄海波","柯震东","房祖名","黄晓明");
		$fanshier = array("黄海波","柯震东","房祖名");

		$haoren = array_diff($mingxing, $fanshier);

		print_r($haoren);
	?>
 

## 计算数组的交集：
array_intersect()


## 返回所有键：
array_keys()
 
## 头尾操作：
array_push();
array_pop();
array_unshift();
array_shift();
比如：
$yuebing = array();
array_push($yuebing, "韭菜");
array_push($yuebing, "五仁","豆沙");
print_r($yuebing);
 


## 去重：
$array = array("a","b","b","a","c","c","d");
$quchong = array_unique($array);
print_r($quchong);
 


