/**
 * Created by waitfish on 15/5/11.
 */
// =======================
// 声明我们需要的模块 ============
// =======================


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要
var config = require('./config'); //读取配置文件config.js信息
var User = require('./app/models/user'); //获取 User model 信息
// =======================
// 配置 =========
// =======================
var port = process.env.PORT || 8080; // 设置启动端口
mongoose.connect(config.database); // 连接数据库
app.set('superSecret', config.secret); // 设置app 的超级密码--用来生成摘要的密码

//用body parser 来解析post和url信息中的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 使用 morgan 将请求日志打印到控制台
app.use(morgan('dev'));

// =======================
// 路由 ================
// =======================
// 基础路由
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});


app.get('/setup', function(req, res) {
    
      // 创建一个测试用户
      var nick = new User({
        name: 'yechang',
        password: '123456',
        admin: true
      });
    
      // 将测试用户保存到数据库
      nick.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully');
        res.json({ success: true });
      });
    });


// API 路由 -------------------
// 待会儿再添加
var router = express.Router();

// router.use(function(req,res,next){
//     // 找到token 通过post，get，或headers
//     var token = req.query.token || req.body.token || req.headers['x-access-token'];
//     if(token) {
//         // 确认token
//         jwt.verify(token, app.get('superSecret'),function(err, decoded){
            
//             if(err){
//                 return res.json({success:false,message:'无效的token值'})
//             }else{
//                 req.decoded = decoded;
//                 next();
//             }
//         })
//     }else{
//         // 没有token值的错误
//         return res.status(403).send({
//             success: false,
//             message: "没有提供的token"
//         } )
//     }
// })

router.get('/',function(req,res){
    res.json({message: '天气贼棒'})
})

router.get('/users',function(req,res){
    User.find({},function(error,users){
        res.json(users);
    })
})


// 登录后得到token，认证接口
router.post('/login',function(req,res){
    console.log(req.body.name);
    User.findOne({
        name: req.body.name
    },function(err,user){
            if(err) throw err;
            res.send(use);
            if(!user){
                res.json({
                    success:false,
                    message: '认证失败，找不到用户名'
                })
            }else if(user){
                //验证密码
                if(user.password != req.body.password){
                   res.json({
                        success:false,
                        message:"登陆失败，密码错误",
                    })
                }else{
                    var token = jwt.sign({name:'foo'},app.get("superSecret"))
                    
                     res.json({
                        success:true,
                        message:"登陆成功",
                        token: token,
                    })
                }
            }
        }
    )
})
// 应用router路由，前缀加api
app.use('/api',router);

// =======================
// 启动服务 ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);