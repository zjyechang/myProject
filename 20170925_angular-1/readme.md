# Angular

## 五大核心特性
**1.MVC**
model：数据模型层  
view：视图层  
controller：业务逻辑与控制逻辑  
好处：职责清楚，代码模块化  

**2.模块化**  
模块开发思想：1.减少全局污染和命名问题。2.可以做到模块间相互依赖，不用手动依赖处理  

**3.指令系统**   
ng-开头的是AngularJS的指令   
ng-controller：是控制器连接试图和数据的。 ng-app：初始化指令 从哪里开始执行AngularJS ng-click ：点击指令  

**4.双向数据绑定**  
你的Model是你用来读取或者更新的部分。数据绑定指令提供了你的Model投射到view的方法。

**5.服务和依赖注入**  
形参参数是不能变的，不然angular就不知道你这个形参要做什么事情？  
在angular中，这些注入的东西呢！有统一的名称就做 服务。 服务 以$开头、后面跟着一个名字，可以实现特有的功能。  


## 数据绑定
关键： ng-app 、 ng-model 和 { {user.name } } 
    首先： <html>元素的ng-app属性。标识这个DOM里面的内容将启用AngularJS应用。
    其次：告诉AngularJS，对页面上的“user.name” 这个Model进行双向数据绑定。
    第三：告诉AngularJS，在“{{ user.name}}”这个指令模版上显示“user.name”这个Model的数据。
    从Server到Controller再到View的数据交互
    例如：<html ng-app="demoApp">

## scopes、module、controller 

### $scope
$scope是一个把view（一个DOM元素）连结到controller上的对象。但 $scope 实际上就是一个JavaScript对象，controller和view都可以访问它，所以我们可以利用它在两者间传递信息。在这个 $scope 对象里，我们既存储数据，又存储将要运行在view上的函数。  
$scope 自身局部作用域  
$rootScope 全局作用域 先找自身局部作用域，在找全局作用域  
### module
angular.module("myapp",[])
第一个参数是模块名称，第二个是依赖模块的数组，如果不需要填空数组.   
在<html>标签上多了一个属性ng-app=”MyApp”，它的作用就是用来指定ng的作用域是在<html>标签以内部分。在js中，我们调用angular对象的module方法来声明一个模块，模块的名字和ng-app的值对应。这样声明一下就可以让ng运行起来了。  


## 延时器
服务$timeout

## 过滤器
currency(货币)、date(日期)、filter(子串匹配)、json(格式化json对象)、limitTo(限制个数)、lowercase(小写)、uppercase(大写)、number(数字)、orderBy(排序)。
### 使用方式
1.在模板中使用filter(直接使用)   
{{ expression | filter1 | filter2 | ... }}　  

2.在controller和service中使用filter(JS中使用)  
### 内置过滤器
1. currency (货币处理)  
{{num | currency : '￥':3}}　  
默认美元且保留2位小数  

2. date (日期格式化)  
{{date | date : 'yyyy-MM-dd hh:mm:ss EEEE'}}  
y M d h m s E 分别表示 年 月 日 时 分 秒 星期  

3. filter(匹配子串)  
{{ childrenArray | filter : {name : 'i'} }}   
//参数是对象，匹配name属性中含有i的  

4. json(格式化json对象)  
{{ jsonTest | json}}  
把一个js对象格式化为json字符串  

5. limitTo(限制数组长度或字符串长度)  
{{ childrenArray | limitTo : 2 }}   
//将会显示数组中的前两项,如果参数是负值，则从数组尾部开始截取

6. lowercase(小写)  
　　把数据转化为全部小写。  
7. uppercase(大写)  
　　同上。  
8. number(格式化数字)　  
{{ num | number : 2 }}  
加上千位分割，像这样，123,456,789。默认保留三位小数

9. orderBy(排序)  
{{ childrenArray | orderBy : 'age' }}      
//按age属性值进行排序，若是-age，则倒序



## 监听
$scope.$watch() 监听新值与旧值 $scope.$watch($scope.show,function(newVal,oldVal){ },true)
最后一个函数是true则深度监听，可以监听集合


## 注意事项,代码压缩
上线时候，代码需要进行压缩 function($scope)经过压缩会变成function($s) angular不会识别$s 写成一个数组方式，可以解决这个问题 m1.controller('Aaa',['$scope',function($scope){ $scope.name='hello'; }]);

不用控制器，直接添加全局变量

m1.run(["$rootScope",function($rootScope){
    $rootScope.name = "his";
    
}])
## 工具方法

angular.bind();改this指向  
angular.copy();拷贝对象  
angular.extend();对象继承  

### 判断
angular.isArray //判断是否是数组  
angular.isDate //判断是否是时间  
angular.isDefined //判断元素是否是存在  
angular.isUndefined //判断元素是否是不存在  
angular.isFunction //判断是否是方法  
angular.isNumber //判断是否是数字  
angular.isObject //判断是否是对象  
angular.isString //判断是否是字符串  
angular.isElement //判断是否是元素  
angular.version //判断当前angular的版本  

### 运算
console.log(angular.version);
angular.equals //判断两个元素是否相等
varvalues = ['a','b','c'];
varvalues = ['name','hello','age','20'];
angular.forEach(values,function(valur,i){
console.log(value);
console.log(i);
this.push(value + i);
}resule);
console.log(result);
angular.fromJson/toJson //对字符串格式的json解析和对json字符串的转换
varstr = ['name','hello','age','20'];
var json = angular.fromJson(str);
console.log(json);
var json = ['name','hello','age','20'];
varstr = angular.toJson(json);
console.log(str);
angular.identity/noop 第一个是返回传递的变量 noop是一个undefined
varstr=‘hello';
console.log(angular.identity(str)); //结果是hello
function identity(str){
return str; //和这个是一样的
}
console.log(angular.noop()); //undefined
function noop(){
}
辅助作用~在一些编程过程中~需要一些默认的设置
angular.lowercase/uppercase 转换大写小写
console.log(angular.upparcase('hello'));把小写转换大写
angular.element. 可以使用jQ中的部分方法
angular.element(oDiv).css('background','red')
angular.bootstrap 初始化作用、动态添加ng-App
document.onclick = function(){
angular.bootstrap(document.,['myApp'])
}
当有多个初始化的时候。只能识别一个！
可以动态添加多个初始化

### $scope.$apply
放入原生js中，让原生代码可以实现功能