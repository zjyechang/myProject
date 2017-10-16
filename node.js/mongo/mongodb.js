
var MongoClient = require("mongodb").MongoClient;

var DB_CONN_STR = "mongodb://localhost:27017/people";//路径：协议/表名

// 添加数据
var insertData = function(db,cb){//ship
    // 连接到表 students
    var collection = db.collection("students");
    // var collection = db.collection("programmer");//新建了表programmer
    // 插入数据
    var data = [{"name":"yechang","age":20},{"name":"mdd","age":23},{"name":"wph","age":25}];
    collection.insert(data,function(err,result){
        if(err){
            console.log("Error"+err);
        }
        cb(result);
        // 如果有错误打印，无错误执行回调
    })
}

// 查询数据
var SelectData = function(db,cb){
    // 连接到students
    var collection = db.collection("students");

    var whereStr = {"name":"wph"};

    collection.find(whereStr).toArray(function(err,result){
        if(err){
            console.log("Error"+err);
        }
        cb(result);
    })
}

// 删除数据
var deleteData = function(db,cb){
    // 连接到students
    var collection = db.collection("students");

    var data = {"name":"mdd"};

    collection.remove(data,function(err,result){
        if(err){
            console.log("Error"+err);
        }
        cb(result);
    })
}

var updateData = function(db,cb){

    var collection = db.collection("students");

    var searchName = ({"name":"wph"});

    // var setData = ({"age":30});
    var setData = {$set:{"age":30}};
    collection.update(searchName,setData,function(err,result){
        if(err){
            console.log("Error"+err);
        }
        cb(result);
    })
}

MongoClient.connect( DB_CONN_STR,function(err,db){
    console.log("连接成功");

    // // 添加数据
    // insertData(db,function(result){
    //     console.log(result);
    // })
    // // 查询数据
    // SelectData(db,function(result){
    //     console.log(result);
    // })
    // 删除数据
    deleteData(db,function(result){
        console.log(result);
    })
    // 更新数据
    updateData(db,function(result){
        console.log(result);
    })
})