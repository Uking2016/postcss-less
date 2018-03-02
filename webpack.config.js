var webpack = require('webpack');
module.exports = {
    entry: './index.js', //入口文件
    output: {
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
        path: __dirname, //输出位置
        filename: 'output.js' //输入文件
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ["css-loader", "less-loader"],

            }
        ]
    },
    //其他解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.css', '.lcss'] //添加在此的后缀所对应的文件可以省略后缀
    },
    //插件
    plugins: []
}