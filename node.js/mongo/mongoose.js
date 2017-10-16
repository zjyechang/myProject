// 引入mongoose
var mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://localhost/people");//路径：协议/表名
// 获取db对象
var db = mongoose.connection;
// 添加报错事件
db.on("error",console.error.bind(console,"connection error"));
// 添加打开事件，只执行一次，执行则表示数据库正常打开
db.once("open",function(callback){
    console.log("success!");
    // 定义一个样式，里面有name属性的配置，（数据加上一些设定，类型）
    var kittySchema = mongoose.Schema({
        name:String
    })
    // 类似在原型中添加方法，用的很少，methods里面储存方法
    kittySchema.methods.speak = function(){
        var greeting = this.name? "Meow name is "+this.name : "I don't have a name";
        console.log(greeting);
    }

    // 将样式放入一个叫kitty模型的类中
    var kittenss = mongoose.model("kitten",kittySchema);

    // 实例化
    var silence = new kittenss({"name":" 小黑"});
    console.log(silence.name);

    silence.save(function(err){
        if(err) return console.error(err);
        silence.speak();
    })
    // 查找所有
    // kitten.find(function(err,kittens){
    //     if(err) return console.error(err);
    //     console.log(kittens);
    // })
    // 过滤查找
    kittenss.find({"name":/^h/},function(err,kittenss){
        if(err) return console.error(err);
        console.log(kittenss);
    })
})
