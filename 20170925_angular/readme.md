# Angular
## 四大核心特性
### 1.MVC  
model：数据模型层  
view：视图层  
controller：业务逻辑与控制逻辑  
好处：职责清楚，代码模块化
### 2.模块化  
模块开发思想：1.减少全局污染和命名问题   
2.可以做到模块间相互依赖，不用手动依赖处理  

### 3.指令系统  
### 4.双向数据绑定  


## 使用angular的标签中添加 ng-app
    <html lang="en" ng-app="myapp">

## 数据双向绑定
显示变量用双大括号包裹{{name}}  
标签内添加 ng-model="name"

## 如何模块化
angular.module("myapp",[])  
第一个参数是模块名称，第二个是依赖模块的数组，如果不需要填空数组
## 作用域
$scope 自身局部作用域  
$rootScope 全局作用域
先找自身局部作用域，在找全局作用域    

## 服务
形参参数是不能变的，不然angular就不知道你这个形参要做什么事情？  
在angular中，这些注入的东西呢！有统一的名称就做 服务。
服务 以$开头、后面跟着一个名字，可以实现特有的功能。

## ng-开头的是AngularJS的指令
ng-controller：是控制器连接试图和数据的。
ng-app：初始化指令 从哪里开始执行AngularJS
ng-click ：点击指令

## 延时器
服务$timeout

## 过滤器
以 | 开始，例如 currency:"￥":2是一个金额过滤器

## 监听
$scope.$watch()
    *监听新值与旧值*
    $scope.$watch($scope.show,function(newVal,oldVal){
            console.log(newVal);
            console.log(oldVal);
            $scope.phone.fre = newVal >=100? 0:10;
        },true)
## 深度监听




## 代码压缩
上线时候，代码需要进行压缩
function($scope)经过压缩会变成function($s) angular不会识别$s
写成一个数组方式，可以解决这个问题
m1.controller('Aaa',['$scope',function($scope){
$scope.name='hello';
}]);

##  不用控制器，直接添加全局变量
    m1.run(["$rootScope",function($rootScope){
        $rootScope.name = "his";
        
    }])
## 工具方法
    angular.bind();改this指向
    angular.copy();拷贝对象
    angular.extend();对象继承

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
    angular.injector 注册器（内部工具方法）
    $scope
    $scope.$watch
    监听
    $scope.$apply
    放入原生js中，让原生代码可以实现功能

