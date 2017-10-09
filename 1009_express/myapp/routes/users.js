var express = require('express');
var router = express.Router();

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
module.exports = router;
