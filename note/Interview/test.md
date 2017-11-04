前端测试题
1. 聊一聊css3的新特性 ：把你知道的相关表达方式写出来
a. 边框   border-radius    border-image     
b. 背景   background-image   
c. 文本效果       text-shadow    
d. 字体           font-family
e. 2D             transform:
f. 3D             transform: translate
g. 过渡           transition
h. 动画           animate
i. 多列           ...
2. 请列举在CSS中可以被继承和属性和不能被继承的属性  
可以继承：font-size，不能被继承：
3. 前端与后端通过ajax通信的具体操作流程是什么  
通过get，post，delete等方法，将具体的请求地址及所需要的请求数据发过来。后端根据发过来的不同数据做具体的操作。
4. 清除浮动的几种方式，各自的优缺点  
（1）overflow，（2）后面加一个空元素，写上clear属性，（3）写一个after伪元素，添加clear：both属性
5. HTML5都有哪些新的JS API？  
查看电池状态，查看地址，
6. html5 的CSS3新增的伪类？  
太多了focus，placeholder，
7. CSS3都有哪些新特性呢？
动画流畅
8. 标签上title与alt属性的区别是什么？
title是鼠标停留是的提示文字，alt是图片不显示时的提示文字
9. 描述css reset的作用和用途。
重置默认样式
10. Document.write 和innerTHML区别
 Document.write是在body里面直接写内容,innerTHML是某个元素内部的内容
11. split() join() 的区别
split()是将字符串按规则分割成数组，join()是将数组按规则组合成字符串
12. 事件绑定和普通事件有什么区别

13. 如何阻止事件冒泡和默认事件
方案一：return false。方案二：event.preventBuble()。方案三：
14. 解释jsonp的原理
通过正常访问的方式获取数据
15. document load 和document ready的区别

16. 写一个正则验证URL
/^http[s]:\/\/[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/
17. 请写出下面分别弹出的值
1. +function() {
2. var a = 5;
3. function a() {};
4. alert(a);
5. function b() {}
6. b = 6;
7. alert(b);
8. var c = d = b;
9. }();
10. alert(d);       //6
11. alert(c);       //undefined
18. 请写出如下点击li的输出值，并用三种办法正确输出li里的数字。
1. <ul>
2. <li>1</li>
3. <li>2</li>
4. <li>3</li>
5. <li>4</li>
6. <li>5</li>
7. <li>6</li>
8. </ul>
9. <script type="text/javascript">
10. var list_li = document.getElementsByTagName("li");
11. for (var i = 0; i < list_li.length; i++) {
12. list_li[i].onclick = function() {
13. console.log(i);
14. }
15. }
16. </script>

        var list_li = document.getElementsByTagName("li");
方案1:  list_li.onclick = function() {
        console.log(this.innerHTML);}
方案2:  Array.forEach.call([1,2,3],function(i){console.log(i)})

19. 请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等生以此类推。不允许使用if switch等。
x<100? (x>90? 1:(x>80? 2:(x>70? 3:(x>60? 4:(x>50? 5:(x>40? 6:(x>30? 7:(x>20? 8:(x>10? 9:(x>0? 10:'请输入大于0的数')))))))))):'请输入小于100的数'
20. 请写出如下输出值，并写出把注释掉的代码取消注释的值，并解释为什么
1. this.a = 20;
2. var test = {
3. a:40,
4. init : function(){
5. function go(){
7. console.log(this.a);
8. }
9. go.prototype.a = 50;
10. return go;
11. }
12. }
13. var p = test.init();
14. p();
15.
16. new(test.init())();

20  50
