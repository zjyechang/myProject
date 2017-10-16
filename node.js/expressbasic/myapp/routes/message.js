var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'sharetime',
})
connection.connect();


router.get("/",function(req,res){
    res.send({
        message:"留言所有数据",
    })
})


router.get("/add",function(req,res){
    console.log(req.query);
    
      connection.query("INSERT INTO `liuyan`(`liuyanid`, `title`, `content`) VALUES (NULL,'"+req.query.title+"','"+req.query.content+"')",function(error,retule){
        console.log(error,retule);
        error?res.send({
          code: 2001,
          message: "留言失败",
        }):res.send({
          code: 0,
          message: "留言成功",
        })
      })
})

router.get("/search",function(req,res){
    console.log(req.query);

    connection.query("SELECT * FROM `liuyan`",function(error,retule){
        console.log(error,retule);
        error?res.send({
          code: 2001,
          message: "查询失败",
        }):res.send({
          code: 0,
          message: "查询成功",
          data: retule
        })
      })
})

router.get("/delete",function(req,res){
  console.log(req.query);

  connection.query("DELETE FROM `liuyan` WHERE `title`='"+req.query.title+"'",function(error,retule){
      console.log(error,retule);
      error?res.send({
        code: 2001,
        message: "删除失败",
      }):res.send({
        code: 0,
        message: "删除成功",
        data: retule
      })
    })
})

module.exports = router;