
var express = require('express');
var Blog = require('../modules/blog');
var router = express.Router();

// 显示所有文章内容
router.get('/',function(req,res){
    // 根据分类查找
    var {category} = req.query;
    var whereObj = {};

    if(category){
        var reg = new RegExp("^"+category+"$");
        var whereObj = {category: reg};
    }

    Blog.find(whereObj,function(err,blogs){
        res.json({
            success: true,
            data: blogs,
        })
    })
})


//发布博客文章
router.post('/',function(req,res){
    //结构赋值
    var {title, body, author, tags, hidden, category}= req.body;
    if(title.length < 3){
        res.json({
            success: false,
            message: "文章标题长度必须大于3",
        })
    }

    // 把标签分割成数组，然后存储成数组对象的格式
    var tagsArr = tags.split(",");
        var tagsObj = [];
        tagsArr.forEach(function(v){
            tagsObj.push = [ {title: v} ];
    })

    var blog=new Blog({
        title,
        body,
        author,
        tag: tagsObj,
        hidden,
        category,
    });
    blog.save(function(err){
        if(err){
            res.json({ success: false, message: "博文发布失败" })
        }else{
            res.json({ success: true, message: "博文发布成功" })
        };
    });
});

router.delete('/',function(req,res){

})
module.exports = router;