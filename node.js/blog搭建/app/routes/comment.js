
var express = require('express');

var Blog = require('../modules/blog');

var router = express.Router();

router.post('/',function(req,res){
    var {id,body} = req.body;

    Blog.findById(id,function(err, blog){
        if(err){
            return res.json({success: false, message: "发送评论失败!"});
        }
        blog.comments.push( {body} ); //添加评论

        blog.save(function(err){
            if(err){
                return res.json({success: true, false: "发布评论失败!"});
            }
        });
        return res.json({success: true, message: "发布评论成功!"});
    });
});

// 删除评论
router.delete('/',function(req,res){
    
    var {id,body} = req.body;
    
        Blog.findById(id,function(err,blog){
            if(err){
                return res.json({success: false, message: "删除评论失败!"});
            }
            let comments = [];
            blog.comments.forEach( (item,index) => {
                if(blog.comments[index].body != body){
                    comments.push(blog.comments[index]);
                }
            })
   
            blog.comments = comments;
            blog.save(function(err){
                if(err){
                    return res.json({
                        success: true, false: "删除评论失败!",
                    });
                }
            });
            return res.json({
                success: true, message: "删除评论成功!",
            });
        });
    });
    
module.exports = router;