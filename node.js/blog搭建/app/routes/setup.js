
var express = require('express');
var User = require('../modules/user');

var router = express.Router();

router.get('/', function(req, res) {

      // 创建一个测试用户
      var administrator = new User({
        name: 'charley',
        password: '123456',
        admin: true
      });
    
      // 将测试用户保存到数据库
      administrator.save(function(err) {
        if (err) {
            res.json({
                success:false,
                message:'管理员创建失败',
            })
        }else{
            res.json({ success: true, message: "管理员创建成功"});

            console.log('User saved successfully');
        }
      });
    });


module.exports = router;