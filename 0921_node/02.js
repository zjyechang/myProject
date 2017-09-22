//模块化 将http导入，http是系统模块
var http = require("http");
var i = 0;

// createServe创建一个web服务器 里面有一个回调函数
// 每次请求这个web服务器都会请求里面的代码，回调里面有两个参数(请求，)  
var app = http.createServer(function(req,res){
    i++;
    if(i>9){
        throw new Error("妈的炸了")
    }
    console.log("有个sb'进来了");
    res.end("hello node");//类似php中的输出，end方法是到这步结束
})

app.listen(8080);//端口设置
console.log("serve running");
