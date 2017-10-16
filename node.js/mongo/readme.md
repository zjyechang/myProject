
# mongodb
## 进行环境配置
path路径添加C:\Program Files\MongoDB\Server\3.4\bin
## 开启数据库（命令行工具别关）
'/c/Program Files/MongoDB/Server/3.4/bin/mongod.exe' --dbpath=/d/data  
--dbpath=/d/MongoDB/data

## **库操作**
## 进入数据库
mongo
## 显示所有库
show dbs
## 选择库
use 库名  
如果不在库中增加集合或文档，则库还会消失。  
如果创建了集合文档，库就会被自动创建。  
## 删除当前库
db.dropDatabase()
## 查看库状态
db.stats()
## 获取库级别帮助
db.help()


## **集合操作**
## 创建集合
db.createCollect('表名')
## 查看所有集合
show collections
## 删除集合
db.集合名.drop()
##	改名集合
db.collection-name.renameCollection('new-collection-name')
##	获取集合帮助
db.collection-name.help()
##	获取集合状态
db.collection-name.stats()


## **数据（文档）操作**
## 设置数据
db.collection-name.insert(json对象)  
例如：db.student.insert({"name":"yechang","age":18,"sex":"man"})  
## 查看数据
查询数据  db.user.find();     
带条件查询  db.students.find({"age":22})  
## 修改数据
db.collection-name.update(条件，更新内容)  
例如：db.students.update({"name":"111"},{$set:{"age":22}})  
不写$set则覆盖那条数据  
## 删除数据
删除所有搜索数据  db.students.remove({"age":22})

**代码详见mongodb.js**


# mongoose
## 创建json文件
cnpm init -y
## 安装mongoose
cnpm i -S mongoose


## 引入mongoose
var mongoose = require("mongoose");
## 连接数据库
mongoose.connect("mongodb://localhost/people");//路径：协议/表名
## 获取db对象
var db = mongoose.connection;
## 添加报错事件
db.on("error",console.error.bind(console,"connection error"));
##  添加打开事件，只执行一次，执行则表示数据库正常打开
db.once("open",function(callback){
    console.log("success!");
})

**代码详见mongoose.js**