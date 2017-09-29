//导入
var http=require('http');
var fs=require('fs');
var cheerio=require('cheerio');
var request=require('request');

var i=0;
var url='http://www.ss.pku.edu.cn/index.php/newscenter/news/2391';

function fetchPage(x) {
    startRequest(x);
}

function startRequest(x) {
    //根据url发送get请求
    http.get(x,function (res) {
        var html='';
        var titles = [];
        res.setEncoding('utf-8');
        //数据传输的过程中不断叠加
        res.on('data',function (chunk) {
            html+=chunk;
        });
        //数据结束后执行处理
        res.on('end',function () {
            //整理数据
            var $=cheerio.load(html);//cheerio解析,返回dom对象
            var time=$('.article-info a:first-child').next().text().trim();
            var news_item={
                title:$('div.article-title a').text().trim(),
                time:time,
                link:"http://www.ss.pku.edu.cn" + $("div.article-title a").attr('href'),
                author:$('[title=供稿]').text().trim(),
                i:i=i+1,
            };
            console.log(news_item);

            //将数据导出到文件中
            var news_title=news_item.title;
            savedContent($,news_title);
            savedImage($,news_title);

            //处理下一次get请求的地址
            var nextLink="http://www.ss.pku.edu.cn" + $("li.next a").attr('href');
            var strl=nextLink.split('-');
            var str=encodeURI(strl[0]);
            //这里用的是10次上限绕过限制
            if(i<=4){
                fetchPage(str);
            }
        });

    }).on('error',function (err) {
        console.error(err);
    });
}

function savedContent($,news_title) {
    $('.article-content p').each(function (index,item) {
        var x=$(this).text();
        var y=x.substring(0,2).trim();
        if(y==''){
            x=x+'\n';
            fs.appendFile('./data/'+news_title+'.txt',x,'utf-8',function (err) {
                if(err){
                    console.log(err);
                }
            });
        }
    });
}

function savedImage($,news_title){
    $('.article-content img').each(function (index,item) {
       var img_title=$(this).parent().next().text().trim();
       if(img_title.length>35||img_title==''){
           img_title="Null";
       }
       var img_filename=img_title+'.jpg';
       var img_src='http://www.ss.pku.edu.cn' + $(this).attr('src');

       //发送请求
       //设置请求头
       request.head(img_src,function (err,res,body) {
           if(err){
               console.log(err);
           }
       });
       //建立管道，通过流方式进行图片传输
       request(img_src).pipe(fs.createWriteStream('./image/'+news_title + '---' + img_filename));
    });
}

//开始
fetchPage(url);