# webpack

文件打包，将很多模块打包成一个

可以通过js文件，打包成一个文件.js     

第一步：创建一个进入文件夹  
    cnpm init -y  
    cnpm i -D webpack  

第二步：
    创建index.html于dist文件夹   index.js于src文件夹  

第三步：
    写入内容  
    _.join 这个方法的依赖在js中知道吗？      
    只能从html文件里面找到！且部分版本可能不同     

    如果代码里面_.join 这个语法没了。那么这个引入的资源浪费了！       

依赖关系不明了！我们可以通过webpack解决问题       

首先我们调整目录结构！ 把src里面的开发文件，和 dist里面的项目文件分隔开        

第一种方式       
    ./node_modules/.bin/webpack  src/index.js dist/bundle.js
    ./node_modules/.bin/webpack     模块中的webpack，
    src/index.js                    入口输出文件！
    dist/bundle.js                  输出到哪里

第二种方式
    ./node_modules/.bin/webpack --config webpack.config.js
    --config                        配置config的文件名称
    webpack.config.js               配置文件名称

第三种方式
    在package.json中的script中添加一句话     
    "scripts": {"start": "webpack"}     