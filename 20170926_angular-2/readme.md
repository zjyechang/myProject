## 自定义filter
使用module的filter方法，返回一个函数，该函数接收输入值，并返回处理后的结果。比如我需要一个过滤器，它可以返回一个数组中下标为奇数的元素，代码如下：  
    app.filter('odditems',function(){
        return function(inputArray){
            var array = [];
            for(var i=0;i<inputArray.length;i++){
                if(i%2!==0){
                    array.push(inputArray[i]);
                }
            }
            return array;
        }
    });　　
例2：  
    {{name | firstUp:4 }}  

    m1.filter("firstUp",function(){
        return function(str,num){
            return str.charAt(0).toUpperCase()+str.substring(1,2)+str.charAt(2).toUpperCase()+str.substring(3,7);
        }
    })

## directive指令
通过使用模板，我们可以把model和controller中的数据组装起来呈现给浏览器，还可以通过数据绑定，实时更新视图，让我们的页面变成动态的。  
　 模板中可以使用的东西包括以下四种：
    1.指令(directive)：ng提供的或者自定义的标签和属性，用来增强HTML表现力；
    2.标记(markup)：即双大括号{{}}，可将数据单向绑定到HTML中；
    3.过滤器(filter)：用来格式化输出数据；
    4.表单控制：用来增强表单的验证功能。

### ng-repeat指令
    例如：ng-repeat="people in list"
    //可以指定开始与结束的标签不断重复
    <span ng-repeat-start="data in datalist">开始</span>
    <p>{{data}}</p>
    <div ng-repeat-end>结束{{data}}</div>

### 排序
$scope.list= $filter("orderBy")($scope.list,arg,true);   
第一个是数据列表，第二个是需要排序的数据，第三个是升序降序

### 数据插入的各种选择方法
    <li ng-repeat="data in datalist">{{ $index }}</li>
    <!-- $index:可以得到相应的下标 -->
    <li ng-repeat="data in datalist">{{ $first }}</li>
    <li class="{{ $first? 'red':'blue'}}" ng-repeat="data in datalist">{{ $first }}</li>
    <!-- 第一个为真true，其他是假false -->

    <li ng-repeat="data in datalist">{{ $middle }}</li>
    <!-- 第一个和最后一个为假false，中间部分为真true -->

    <li ng-repeat="data in datalist">{{ $last }}</li>
    <!-- 最后一个为真true，其他为false -->
    <li class="{{ $odd? 'red':'blue'}}" ng-repeat="data in datalist">{{ $odd }}</li>
    <!-- 偶数行是真true，奇数行是假false -->
    <li class="{{ $even? 'red':'blue'}}" ng-repeat="data in datalist">{{ $even }}</li>
    <!-- 偶数行是假false，奇数行是真true -->


### 样式与类名
**类名**  
ng-class="{{ xxx }}"  
还有ng-class-odd、ng-class-even   

**样式**  
ng-style="{}"  
例如： <div ng-style="{color:'red'}">ng-style测试</div>  
或者： <div ng-style="style">ng-style测试</div>  
        $scope.style = {color:'red'};　

### 表单控制相关
    ng-checked控制radio和checkbox的选中状态  
　　ng-selected控制下拉框的选中状态  
　　ng-disabled控制失效状态  
　　ng-multiple控制多选  
　　ng-readonly控制只读状态  
以上指令的取值均为boolean类型，当值为true时相关状态生效.

### 事件绑定相关
```ng-click
　　ng-change
　　ng-dblclick
　　ng-mousedown
　　ng-mouseenter
　　ng-mouseleave
　　ng-mousemove
　　ng-mouseover
　　ng-mouseup
　　ng-submit
```
事件绑定指令的取值为函数，并且需要加上括号，例如：  
```<select ng-change=”change($event)”></select>　　
然后在controller中定义如下：  
$scope.change = function($event){  
        alert($event.target);  
}
```


### 复制，粘贴，剪切后产生效果
ng-cut="xxx='true'  
ng-copy="xxx='false'"  
ng-paste="xxx='true'"

### 下拉列表选中
input里面填ng-model="yes"  
option里面填ng-select="yes"  

### ng-bind

1. ng-bind  
相当于{{ name }}  

2. ng-bind-template  
支持表达式的，所以可以支持多个表达式  

3. ng-bind-html  
可以识别和显示标签,,不过需要额外导入包angular-sanitize

4. ng-non-bindable  
让我的表达式不被解析

### ng-src和ng-href
可以设置ng-src和ng-href为一个变量

### ng-attr-添加属性
    <a ng-href="{{ url }}" ng-attr-title="{{name}}">百度</a>

### 自定义属性
自定义属性名称

### 显示，隐藏
ng-show   
ng-hide   
ng-show和ng-hide的值为boolean类型的表达式，当值为true时，对应的show或hide生效。框架会用display:block和display:none来控制元素的显隐。  
### ng-if
通过添加元素的方法来显示或隐藏  
例如:
```<div ng-controller="Aaa">
    <input type="checkbox" ng-model="show">
    <div ng-show="show">{{name}}</div>
    <!-- 通过display控制显示，隐藏，true是显示，false是隐藏 -->
    <div ng-hide="show">{{name1}}</div>
    <!-- 跟show相反 -->
    <div ng-if="show">{{name}}</div>
    <!-- 通过添加和删除元素的方式操作 -->
    <div ng-switch on="show">
        <span ng-switch-default>默认显示效果</span>
        <span ng-switch-when="true">切换显示效果</span>
    </div>
</div>
```
### ng-cloak
控制css让当前标签在加载中时候是隐藏的。加载完成后显示  

### ng-swtich
–on
–default
–when
<div ng-switch on="show">
<span ng-switch-default>默认显示的效果</span>
<span ng-switch-when="false">切换后显示的效果</span>
</div>
ng-open：控制部分标签的显示、隐藏


### ng-init内容
ng-init="arr1Index=$index"    
ng-init="name='hello'"  
<!-- 相当于$scope.name="hello"; -->

### ng-inculde导入
ng-inculde="'temp.html'"  
可以导入html内容  

### ng-model-options
 <!-- 规则指定事件发生后绑定数据 -->  
ng-model-options="{updateOn:'blur'}"    
<!-- 延迟2000毫秒改变数据 -->  
ng-model-options="{debounce:2000}"    

### 面向对象的方式创建
ng-controller="Aaa as a1"  
<!-- 通过as实例化 -->  {{a1.name}}  
fun.prototype.name="hellow";

### ng-options 选项
    <select ng-options="(color.name) for color in colors" ng-model="mmp">
        <option value="">---请选择---</option>
    </select>
    <p>{{mmp.name}}</p>
    <div class="{{mmp.name}}"></div>

     $scope.colors=[
            {name:"red"},
            {name:"purple"},
            {name:"yellow"},
            {name:"blue"},
        ]

### 表单验证
<input type="text" ng-model="text" name="oInput" required ng-minlength="6" ng-maxlength="10" ng-pattern="/^[a-zA-Z]+$/"/>
    <p>验证通过:{{ oForm.oInput.$valid}}</p>
    <p>验证失败:{{ oForm.oInput.$invalid}}</p>
    <p>初始值:{{ oForm.oInput.$pristine}}</p>
    <p>改变值:{{ oForm.oInput.$dirty}}</p>
    <p>error信息:{{ oForm.oInput.$error}}</p>


### 选项卡



### 自定义指令
    m1.directive("myHi",function(){
        // 要用驼峰命名
        // 使用时必须写成<my-hi></my-hi>    <div my-hi></div>
        return {
            // restrict:'E',
            // hi的类型定义为E  element标签（一定要大写，小写不识别）
            // A 属性  C class类名  M 注释

            // 可以组合使用，就是标签属性都支持
            restrict:'EAMC',

            // 替换外层包裹的标签和替换注释
            replace:true,

            scope:{
                myClass:"@",
                // @绑定字符串,输入什么，解析什么
                myName:"=",
                // =绑定数据，是作用域下的变量名
                myFn:"&",
            },
            // 隔离作用域，让数据隔离
            // 给hi这个指令自定义模板
            template:"<h2>angular</h2>",
            //导入模板
            // templateUrl:"temp2.html"
        }

        <!-- directive:hi -->
        <!-- 注释后要有空格,且必须设置replace为true -->
### 

# 练习
1.背景图  

2.数据不低于12条  

3.数据内容 (商品名，id，单价，数量，产地，品种)不低于6个  

4.id、单价、数量、（排序，升序降序）  

5.样式美观  

6.数据放在表格内(隔行变色)  