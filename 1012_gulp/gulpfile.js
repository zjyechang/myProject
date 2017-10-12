
let gulp = require('gulp'),
    connect = require('gulp-connect'),      //服务器实时编译
    htmlmin = require('gulp-htmlmin'),      //压缩html
    less = require('gulp-less'),            //实时编译less
    cssmin = require('gulp-cssmin'),           //压缩css
    rename = require('gulp-rename'),        //重命名
    concat = require('gulp-concat'),        //合并文件
    del = require('del'),                   //删除文件

    LessAutoprefix = require('less-plugin-autoprefix'),                 //less自动编译
    autoprefix = new LessAutoprefix({ browsers: ['last 5 versions']});  // 兼容最新的n个版本

//调用task(任务)api，任务名称：default是默认执行的任务，第二参数写回调
gulp.task('default',['clean','study','copy-html','less','watch','server'],() => console.log("666"));

gulp.task('eat',() => console.log("eat a big banana"));

gulp.task('sleep',() => console.log("sleep at noon"));

gulp.task('study',['eat','sleep'],() => console.log("studying new position"));

// 找到html文件，拷贝输出到指定位置
gulp.task("copy-html", function(){
    return gulp.src('index.html')                       //找到文件
            .pipe(htmlmin({collapseWhitespace: true}))  //文件压缩
            .pipe(gulp.dest('dist/'))                   //输出到指定目录
            .pipe(connect.reload());                    //服务器实时预览
});

// 实时监听index的变化，如果发生变化则执行copy
//监听中枢
gulp.task('watch',['watch-html', 'watch-less', 'watch-js']);

gulp.task('watch-html',() => {
    return gulp.watch("index.html", ['copy-html']);
});

gulp.task('watch-less',() => {
    return gulp.watch("./src/style/**/*", ['less']);
});

gulp.task('watch-js',() => {
    
});



//开启一个服务器，实时加载
gulp.task('server',() => {
    connect.server({
        root: 'dist',         //服务器根目录
        port: 9090,         //端口号
        livereload: true,
    });
});

//编译less文件并压缩，放入生产环境
gulp.task('less',() => {
    return gulp.src('src/style/*.less')             //找到目录下的所有less文件
            .pipe(less({                            //实时编译并处理兼容
                plugins: [autoprefix]
            }))
            .pipe(cssmin())                         //压缩
            // .pipe(rename({suffix: 'balabala'}))      //改名
            .pipe(concat('main.min.css'))           //合并文件并改名
            .pipe(gulp.dest("dist/css"));           //输出到指定目录
});

// 删除任务
gulp.task('clean', () => {
    del(['dist/*']);
});