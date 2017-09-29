//@ 目标：NodeJS最小量爬虫
//@ 技术栈：基于NodeJS，两个工具cheerio\request
//@ 扩展性：0  封装度：0
//@ 日期：2017.9.27

//一、导入
//http服务
var http=require('http');
//文件服务
var fs=require('fs');
//cheerio工具 npm install --save cheerio
var cheerio=require('cheerio');
// request工具 npm install --save request
var request=require('request');

var url='http://wphkj.cn';

//二、开始爬
startRequest(url);

//爬数据业务
function startRequest(x) {
    //根据url发送get请求
    http.get(x,function (res) {
        //临时变量保存
        var html='';
        var i=0;
        //设置编码
        res.setEncoding('utf-8');

        //1. 数据传输事件，执行回调
        res.on('data',function (chunk) {
            // 数据不断叠加
            // 可视化:可以加一条分隔线来看看有几次分块传输
            // console.log(++i+'-----------------------------------');
            html+=chunk;
        });

        //2. 传输结束事件，执行回调
        res.on('end',function () {
            //整理数据
            // cheerio解析,返回dom对象
            var $=cheerio.load(html);

            // 1. 取出副标题
            var desc=$('.site-description').text().trim();
            console.log(desc);

            // 1.2. 写入文件
            fs.appendFile(('./data/保存-'+desc+'.txt'),desc,'utf-8',function (err) {
            // 这个回调是可选的
            });

            // 2. 图片
            var href=$('.wp-custom-header img').attr('src');
            console.log(href);

            // 2.2 创建管道
            // 2.3 用流来传输保存图片
            request(href).pipe(fs.createWriteStream('./image/'+desc+'背景图.jpg'));
        });
    }).on('error',function (err) {
        console.error(err);
    });
}

