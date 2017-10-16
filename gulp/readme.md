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

1.  服务端的实时监听,实现实时编译的模块
cnpm i -D gulp-connect      

2.  压缩html代码的模块 
cnpm i -D gulp-htmlmin      
https://www.npmjs.com/package/gulp-htmlmin

3.  合并文件并重命名
cnpm i -D gulp-concat      

4.  实时编译less的模块  
cnpm i -D gulp-less     
https://www.npmjs.com/package/gulp-less

5.  压缩css代码
cnpm i -D gulp-cssmin       
https://www.npmjs.com/package/gulp-cssmin

6. 改名
无需安装  
    rename = require('gulp-rename'),
    .pipe(rename({suffix: '.min'}))      //改名
    
7. less编译及自动兼容处理 
第一个是导入模块，第二个是兼容版本   
LessAutoprefix = require('less-plugin--autoprefix'),
autoprefix = new LessAutoprefix({ browsers: ['last 5 versions']});

8. 删除多余文件
cnpm i -D del  
    del  = require('del')       //引入
    gulp.task('clean', () => {
        del(['dist/*']);
    })

9. sass
cnpm i -D gulp-sass
.sass 后缀语法更加严格，不能用小括号什么的
.scss 更符合css书写

10. stylus
cnpm i -D gulp-stylus

11. babel  
cnpm i -D gulp-babel  
执行  cnpm i -D babel-core

用于转化js代码,将es6转化为es6    

需要配置 根目录下创建一个文件名为.babelrc 用于设置编译的格式
    {"presets": ["es2015"]}     
    npm install --save-dev babel-preset-es2015     

12. 压缩js
cnpm i -D gulp-uglify   

13. js纠错
cnpm i -D gulp-esint

14. 防止报错后崩溃
cnpm i -D gulp-plumber  

15. 压缩图片
cnpm i -D gulp-imagemin  
  
    

## 奇技淫巧
路径('./src/style/**/*')      代表路径下的所有文件  
路径('./src/style/*.less')    代表当前路径下的less文件  
箭头函数  
解构赋值  

## gulp使用

1. 请求，加载模块    
    let gulp = require('gulp'),
    connect = require('gulp-connect');  

2. 创建一个任务    
gulp.task(任务名称, [前置任务数组], 回调函数)   

3. 匹配一个路径下的一个或多个文件   
gulp.src() 

4. 输出文件到指定目录，如果输出地址（文件夹）不存在，会自动创建  
gulp.desp() 

5. 监听文件变化，并实时编译（执行任务）
gulp.watch('文件目录',文件改变执行的任务数组)

6. 通过pipe()方法将模块应用进去


### 例如
//编辑less文件并压缩，放入生产环境
gulp.task('less', () => {
	return gulp.src('src/styles/*.less')
		.pipe(less({plugins: [autoprefix]}))
		.pipe(cssmin())                       //压缩
        .pipe(rename({suffix: '.min'}))      //改名
		.pipe(gulp.dest('dist/css'));
});

### 总步骤
1. 下载并请求加载模块  
2. 写任务，工作流
3. 写监听

## 执行gulp
1. 命令gulp
会执行gulpfile.js里的default任务       
let gulp = require('gulp');     //导入模块      

通过default定义工作流，

2. gulp XXX
会执行gulpfile.js里的指定任务任务      



处理html          
    监听对应的文件，实时编译        
    开启一个服务器，实时预览        
    压缩文件        
    拷贝文件到指定位置       

处理css       
    less，sass，stylue的实时编译       
    css文件压缩和改名      
    css合并       
    自动兼容模块      
    拷贝到目标位置     

处理js文件      
    ES6文件 实时编译成ES5标准文件      

处理图片        
    压缩图片        

-S --save       使用必须的模块     
-D --save-dev   开发时候运行的模块，使用时不需要        

-S -D
-S就是--save的简写，就行npm默认一个start的字段，你可以不必输入npm run start 而只需输入npm start，这两个效果是一样的。      
-D就是--save-dev 这样安装的包的名称及版本号就会存在package.json的devDependencies这个里面，而--save会将包的名称及版本号放在dependencies里面。     