const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app:'./src/index.js',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader',{
                    loader:'postcss-loader',
                    options:{
                        plugins:[
                            require('autoprefixer')
                        ]
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                    }
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'study',
            template:path.resolve(__dirname, './src/index.html'),
            inject:'body'
        }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
  };