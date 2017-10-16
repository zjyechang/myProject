# em 和 rem
em是根据自己的字体大小（自己没有则寻找父集字体大小）来定的  
rem是根据html的字体大小来定的（可以用js读取屏宽修改html根字体）  
# 媒体查询
    例如@media screen and (min-width:600) and (max-width:1200px){
        html{
            font-size:18px;
        }
    }
screen 代表屏幕，不是打印机或残疾人听力设备  
用and 连接所有条件


## 携程建设
手机的真实像素，和手机的视口像素基本上是2.几 : 1
比如iPhone6plus的真实物理像素是1080px，视口是414px。基本就是2.几比1。
也就是说，你写了一个div，它的width是200px，那么机器要用大约400多个真实物理像素当做width。
所以，一张图片width:100px;  而真实物理像素在一行有200多个，所以你的图片如果是200px宽度，然后用background-size:100px auto; 那么图片就更精确。
