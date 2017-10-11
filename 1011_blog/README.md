
##模型
user模型
name: String,
password: String,
admin: Boolean

分类模型：
title: String

博客类型：
title: String,
body: String,
author: String,
conmments: [{body: String, date: Date}],
date: {type: Date ,default: date.now},
tags: [{title: String}],
hidden: Boolean,
mete: {
	votes: Number,
	favs: Number
}



## api 有以下部分
1.注册管理员     √
2.登录（授权，以下api需要token才能访问）   √
3.发布，修改，删除博文   √×
4.删除评论

5.博文分类 (增删改查)   √
6.博文分类显示
7.分页显示
8.发布评论
9.点赞