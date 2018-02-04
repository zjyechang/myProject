## viewport：视口

viewport，一个移动专属的Meta值，用于定义视口的各种行为。

为了让手机也能获得良好的网页浏览体验，Apple找到了一个办法：在移动版(iOS)的Safari中定义了viewport meta标签，它的作用就是创建一个虚拟的窗口(viewport)，而且这个虚拟窗口的分辨率接近于桌面显示器，Apple将其定位为980px。以一代iphone下的Safari来说就是：

在iphone的320px物理屏幕上——视觉窗口(visual viewport)，创建出了一个980px的虚拟窗口——布局窗口(layout viewport)，在视觉窗口(visual viewport)中我们可以拖动横向竖向滑动条或者放大缩小网页，来达到最佳的浏览效果(类似桌面浏览器)；而布局窗口(layout viewport)用来配合CSS渲染布局，例如当我们设置一个容器的宽度为100%时，这个容器的实际值为980px而不是320px。如此一来大部分 网页就能以缩放的形式正常的显示在手机屏幕上了。

## layout viewport（布局视口）

一般移动设备的浏览器都默认设置了一个viewport 元标签，定义一个虚拟的layout viewport（布局视口），用于解决早期的页面在手机上显示的问题。iOS, Android基本都将这个视口分辨率设置为 980px，所以pc上的网页基本能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页。

## visual viewport（视觉视口）和物理像素

visual viewport（视觉视口）备物理屏幕的可视区域，屏幕显示器的物理像素，同样尺寸的屏幕，像素密度大的设备，硬件像素会更多。例如iPhone的物理像素：

iPhone5 ：640 * 1136
iPhone6：750 * 1334
iPhone6 Plus：1242 * 2208
ideal viewport（理想视口）和 dip （设备逻辑像素）

## ideal viewport（理想视口）通常是我们说的屏幕分辨率。

dip （设备逻辑像素）跟设备的硬件像素无关的。一个 dip 在任意像素密度的设备屏幕上都占据相同的空间。

比如MacBook Pro的 Retina （视网膜）屏显示器硬件像素是：2880 * 1800。当你设置屏幕分辨率为 1920 * 1200 的时候，ideal viewport（理想视口）的宽度值是1920像素， 那么 dip 的宽度值就是1920。设备像素比是1.5（2880/1920）。设备的逻辑像素宽度和物理像素宽度（像素分辨率）的关系满足如下公式：

逻辑像素宽度*倍率 = 物理像素宽度

而移动端手机屏幕通常不可以设置分辨率，一般都是设备厂家默认设置的固定值，换句话说 dip 的值就是 ideal viewport（理想视口）（也就是分辨率）的值，比如，iPhone的屏幕分辨率：

iPhone5 ：分辨率 320 * 568，物理像素 640 * 1136，@2x
iPhone6：分辨率 375 * 667，物理像素 750 * 1334，@2x
iPhone6 Plus ：分辨率 414 *  736，物理像素1242 * 2208，@3x，（注意，实际显示图像等比降低至1080×1920，具体原因查看：http://www.css88.com/archives/5972）

![image](http://newimg88.b0.upaiyun.com/newimg88/2016/03/51530583gw1ek7mqv36zxj20go099jrm.jpg)
## 如何设置viewport

有了layout viewport似乎解决手机浏览网页的难题，但如果遇到专门为手机优化的网页就又有新的问题：是的，因为iphone的layout viewport默认为980px，导致专为其优化的320px宽的页面只能以缩放的方式显示，这时就需要对viewport进行设置：
```
<meta name=”viewport” content=”width=device-width, initial-scale=1.0, user-scalable=no”/>
```

这个是最常见的一条viewport meta代码，将viewport定义为：宽度为设备宽度，初始缩放比例为1倍，禁止用户缩放。设置好后我们的页面就显示完美了

layout viewport的默认值在Apple实现viewport后，其他浏览器也加入了对viewport meta的支持，但彼此间还是有些差异，差异最大的是layout viewport的表现：
Safari iPhone: 980px
Opera: 850px
Android WebKit: 800px
IE: 974px


## 详细属性
这里是每个属性的详细介绍：
```
属性名	     |        取值   	    |        描述
width   	 | 正整数或device-width  |	定义视口的宽度，单位为像素
height       | 正整数或device-height |	定义视口的高度，单位为像素，一般不用
initial-scale|	    [0.0-10.0]     	|   定义初始缩放值
minimum-scale|	    [0.0-10.0]     	|   定义缩小最小比例，它必须小于或等于maximum-scale设置
maximum-scale|	    [0.0-10.0]     	|   定义放大最大比例，它必须大于或等于minimum-scale设置
user-scalable|	      yes/no       	|   定义是否允许用户手动缩放页面，默认值yes
```

### width
width属性被用来控制layout viewport（布局视口）的宽度，layout viewport（布局视口）宽度默认值是设备厂家指定的。iOS, Android基本都将这个视口分辨率设置为 980px。我们可以 width=320 这样设为确切的像素数，也可以设为device-width这一特殊值，一般为了自适应布局，普遍的做法是将width设置为device-width，例如：

html 代码:
```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```
width=device-width 也就是将layout viewport（布局视口）的宽度设置 ideal viewport（理想视口）的宽度。网页缩放比例为100%时，一个CSS像素就对应一个 dip（设备逻辑像素），而layout viewport（布局视口）的宽度，ideal viewport（理想视口）的宽度（通常说的分辨率），dip 的宽度值是相等的。

width=device-width其实这个属性值字面意应该是viewport宽度等于设备宽度（这里的设备宽度指的并不是物理像素而是设备独立像素，其中设备物理像素和设备独立像素比称为devicePixelRatio），浏览器给出了个定值：320px；这个值还是源于 Apple，因为早期iphone的分辨率为320px × 480px，大量为iphone量身定制的网站都设置了viewport:width=device-width，并且按照宽度320px来设计制作，所 以其他浏览器加入viewport支持时为了兼容性也将device-width定义为了320px。
### height

与width类似，但实际上却不常用。

### initial-scale

initial-scale用于指定页面的初始缩放比例：

html 代码:
```
<meta name="viewport" content="initial-scale=1.5" />
```
initial-scale=1 表示将layout viewport（布局视口）的宽度设置为 ideal viewport（理想视口）的宽度，initial-scale=1.5 表示将layout viewport（布局视口）的宽度设置为 ideal viewport（理想视口）的宽度的1.5倍。

### maximum-scale

maximum-scale用于指定用户能够放大的最大比例，例如

html 代码:
```
<meta name="viewport" content="initial-scale=1,maximum-scale=3" />
```
假设页面的默认缩放值initial-scale是1，那么用户最终能够将页面放大到这个初始页面大小的3倍。

### minimum-scale

类似maximum-scale的描述，不过minimum-scale是用来指定页面缩小比例的。通常情况下，不会定义该属性的值，页面太小将难以阅读。

### user-scalable

user-scalable来控制用户是否可以通过手势对页面进行缩放。该属性的默认值为yes，可被缩放，你也可以将该值设置为no，表示不允许用户缩放网页.

### 参考文档：
1. http://www.quirksmode.org/mobile/viewports.html 中文：http://www.cnblogs.com/2050/p/3877280.html 

2. https://developer.mozilla.org/zh-CN/docs/Mobile/Viewport_meta_tag

3. http://blog.doyoe.com/2015/10/13/mobile/%E7%A7%BB%E5%8A%A8%E5%89%8D%E7%AB%AF%E7%AC%AC%E4%B8%80%E5%BC%B9%EF%BC%9Aviewport%E8%AF%A6%E8%A7%A3/

4. http://www.css88.com/archives/5975

5. https://www.cnblogs.com/diantao/p/5292652.html