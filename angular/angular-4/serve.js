var m1 = angular.module('myapp',[]);
// 用angular.module()方法创建一个模块化，存入m1变量。


m1.factory("myServics",function(){
    return {
        name:"hellow",
        show: function(){
            return this.name+" angular.js"
        }
    }
})
// m1.factory(),自定义服务，接受两个参数，第一个是名称，第二个是
// 自定义服务名称不要用$ 开头，$开头是angular内部服务

m1.factory("myNum",function(){
    return function(num1,num2){
        return Math.random()*(num2-num1)+num1;
    }
})
m1.controller("Aaa",function($scope,myServics,myNum){
// 在m1之下绑定controller控制器，把相关的视图和控制器连接到一起
    $scope.name="yechang";

    console.log(myServics.show());

    console.log(myNum(3,8))
})