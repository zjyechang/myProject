var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
    res.send({
        message:"我是一条消息",
    })
})

module.exports = router;