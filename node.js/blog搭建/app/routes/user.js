
var express = require('express');
var User = require('../modules/user');
var router = express.Router();

var app = express();

var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要
var config = require('../../config'); //读取配置文件config.js信息
app.set('superSecret', config.secret);


router.post('/login',function(req,res){
    console.log(req.body)
    User.findOne({
        name: req.body.name
    },function(err,user){
        if(err){
            res.json({ success:false, message: '登录失败'})
        }else{
            if(!user){
                res.json({success:false, message: "认证失败，找不到用户名"});
            }else{
                var token = jwt.sign({name:'foo'},app.get('superSecret'));

                res.json({
                    success: true,
                    message: "登陆成功",
                    token: token,
                })
            }
        }
    })
})

module.exports = router;