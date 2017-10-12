# 包管理bower,自动添加依赖，例如下载bootstrap自动补充jquery
cnpm install -g bower
bower install bootstrap

# Gulp
自动化构建工具增强你的工作流程

    工作流程
        HTML, CSS, JS
        HTML5, CSS3, ES5, ES6, ES7, ES8
        Node.JS, Angular, Less, Sass, Vue, React
        通过类似VScode，IDE实时自动编译

    构建工具
        帮我们把less，sass，stylus实时编译成css文件
        帮我们把ES6，ES7，ES8编译成ES5，ES3文件
        帮我们压缩文件，合并文件，整理文件
        提供一个实时同步的服务器

    自动化(通过流水线)
        写入一个gulpfile.js文件
        通过命令 gulp 启动

## gulp安装
第一步：全局安装  
cnpm i -g gulp  

第二步：本地安装  
cnpm i -D gulp  

第三步：安装模块  
### gulp-connect
cnpm i -D gulp-connect      //服务端的实时监听,实现实时编译的模块
###  gulp-htmlmin
cnpm i -D gulp-htmlmin      //压缩代码的模块  
https://www.npmjs.com/package/gulp-htmlmin
### 实时编译less的模块  
cnpm i -D gulp-less     
https://www.npmjs.com/package/gulp-less
### 压缩css代码
cnpm i -D gulp-cssmin       

https://www.npmjs.com/package/gulp-cssmin
### 改名
    rename = require('gulp-rename'),
    .pipe(cssmin())                       //压缩
    .pipe(rename({suffix: '.min'}))      //改名
###  less编译及自动兼容处理 
    第一个是导入模块，第二个是兼容版本
    LessAutoprefix = require('less-plugin--autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 5 versions']});
### 删除多余文件
cnpm i -D del  
    del  = require('del')       //引入
    gulp.task('clean', () => {
        del(['dist/*']);
    })


-S -D
-S就是--save的简写，就行npm默认一个start的字段，你可以不必输入npm run start 而只需输入npm start，这两个效果是一样的。
-D就是--save-dev 这样安装的包的名称及版本号就会存在package.json的devDependencies这个里面，而--save会将包的名称及版本号放在dependencies里面。


## gulp使用
1.加载模块    
let connect = require('gulp-connect');  

2.创建一个任务    
gulp.task(name[, deps], fn)   

3.匹配一个路径下的一个或多个文件   
gulp.src() 

4.写入文件输出到哪里，如果输出地址（文件夹）不存在，会自动创建  
gulp.desp() 

5.通过pipe()方法将模块应用进去


### 例如
//编辑less文件并压缩，放入生产环境
gulp.task('less', () => {
	return gulp.src('src/styles/*.less')
		.pipe(less({plugins: [autoprefix]}))
		.pipe(cssmin())                       //压缩
        .pipe(rename({suffix: '.min'}))      //改名
		.pipe(gulp.dest('dist/css'));
});



处理html  
    监听对应的文件，实时编译  
    开启一个服务器，实时预览  
    压缩文件  
    拷贝文件到指定位置

处理css
    less，sass，stylue的实时编译
