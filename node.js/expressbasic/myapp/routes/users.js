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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('response with a shit');
});

router.get('/register', function(req, res, next) {

  // res.send({
  //   code:0,
  //   message:"注册成功",
  //   data:{
  //     id:001,
  //   }
  // });

  //if、switch
  var info = {};

  if(!req.query.username){
    info= {
      code:2001,
      message:"注册失败，未传入用户名",
    }
  }else if(req.query.username = "yechang"){
    info= {
      code:2002,
      message:"注册失败，用户名已存在"
    }
  }else{
    info= {
      code:0,
        message:"注册成功",
        data:{
          id:2,
        }
    }
  }
  res.send(info)
});

router.get('/router',function(req,res){
  res.send("what the fuck?")
})


router.post('/register',function(req,res){
  console.log(req.body);

  connection.query("INSERT INTO `users`(`userid`, `username`, `phone`, `password`) VALUES (NULL,'"+req.body.username+"','"+req.body.phone+"','"+req.body.password+"')",function(error,retule){
    console.log(error,retule);
    error?res.send({
      code: 2001,
      message: "注册失败",
    }):res.send({
      code: 0,
      message: "注册成功",
    })
    // retule是用户的个人信息
    console.log(retule);
  })
  // res.send({
  //   code:0,
  //   message:"数据请求成功"
  // });
})


  router.post('/login',function(req,res){
    console.log(req.body);
  
    connection.query("SELECT * FROM `users` WHERE `username`='"+req.body.username+"'",function(error,retule){
      console.log(error,retule);

      error?res.send({
        code: 2001,
        message: "登录失败",
        data: error,
      }):res.send({
        code: 0,
        message: "登录成功",
        data: retule,
      })
    })
    
    res.send({
      code:0,
      message:"数据请求成功"
    });
})

module.exports = router;
