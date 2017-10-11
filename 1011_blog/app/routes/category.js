var express = require('express');
var Category = require('../modules/category')
var router = express.Router();
// 添加分类
router.post('/',function(req,res){
    console.log(req.body.title);

    var category = new Category({
        title: req.body.title,
    });
    category.save(function(err){
        if(err){
            res.json({
                success: false,
                message: '添加分类失败',
            })
        }else{
            res.json({success: true,message: '添加分类成功!'})
        }
    })
})
// 查看所有分类
router.get('/',function(req,res){

    Category.find({},function(err,categories){
        res.json({
            success: true,
            data: categories,
            message: '查看分类成功!',
        })
    })
})

// 更新分类
router.put('/',function(req,res){
    console.log('put category');
    // 结构赋值
    var {title,newTitle} = req.body;

    Category.findOneAndUpdate({title: title},{title: newTitle},function(err,category){
        if(err){
            res.json({
                success: false,
                message: "更新分类失败",
            })
        }else{
            res.json({
                success: true,
                message: "更新分类成功",
            })
        }
    })

})
// 删除分类
router.delete('/',function(req,res){
    console.log('delete category');

    var {title} = req.body;

    Category.remove({title:title},function(err){
        if(err){
            res.json({
                success: false,
                message: "删除分类失败",
            })
        }else{
            res.json({success: true,message: '删除分类成功!'})
        }
    })
})
module.exports = router;