
## node 安装

# 淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

## 配置php路径
path路径里面添加D:\phpStudy\php\php-5.2.17
## 使用php
php 01.php
## 查看安装进度
npm config set loglevel=http
## 安装PM2
npm install pm2 -g 
## 使用PM2
pm2 start 02.js


## 创建文件夹
mkdir myapp
cd myapp  进入myapp文件夹
### 直接生成所有参数的文件
npm init -y  
### 安装express
npm i -s express 与 npm install express --save 

## npm删除模块
npm uninstall 模块：删除模块，但不删除模块留在package.json中的对应信息
npm uninstall 模块 --save 删除模块，同时删除模块留在package.json中dependencies下的对应信息
npm uninstall 模块 --save-dev 删除模块，同时删除模块留在package.json中devDependencies下的对应信息

rm -rfv node_modules  删除当前目录的文件
 
## 通过package.json重装
npm i

## express
"scripts": {
    "start": "node ./bin/www"  
  },
  "dependencies": {
    "body-parser": "~1.17.1",   接受get、post请求处理
    "cookie-parser": "~1.4.3",	针对cookie
    "debug": "~2.6.3",			调试
    "express": "~4.15.2",		当前用的
    "jade": "~1.11.0",			模板引擎
    "morgan": "~1.8.1",			命令行
    "serve-favicon": "~2.4.2"	小图标
  }


## 全局中输出中文
res.setHead(200,{'Content-Type':'text/html; charset=utf-8'})