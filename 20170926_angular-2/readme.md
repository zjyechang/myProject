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

### ng-src和ng-href
可以设置ng-src和ng-href为一个变量

### 自定义属性
自定义属性名称

### 显示，隐藏
ng-show   
ng-hide   
ng-show和ng-hide的值为boolean类型的表达式，当值为true时，对应的show或hide生效。框架会用display:block和display:none来控制元素的显隐。  

### 复制，粘贴，剪切后产生效果
ng-cut="xxx='true'  
ng-copy="xxx='false'"  
ng-paste="xxx='true'"

### 下拉列表选中
input里面填ng-model="yes"  
option里面填ng-select="yes"  


# 练习
1.背景图  

2.数据不低于12条  

3.数据内容 (商品名，id，单价，数量，产地，品种)不低于6个  

4.id、单价、数量、（排序，升序降序）  

5.样式美观  

6.数据放在表格内  