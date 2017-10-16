const path = require('path');

// 导出一个对象
module.exports = {
    entry: './src/index.js',        //指定入口文件
    output: {       //指定输出文件：名称，配置路径
        filename: "bundle.js",      //输出文件名
        path: path.resolve(__dirname, 'dist')    
        //__dirname 相当于是  当前文件夹路径下 /dist  
    }
}