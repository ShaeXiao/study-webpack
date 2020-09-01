const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// console.log(__dirname)
// console.log(process.cwd())

module.exports = {
    entry: {
        app:'./src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader',MiniCssExtractPlugin.loader, 'css-loader',{
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
                use: [MiniCssExtractPlugin.loader,'css-loader',{
                    loader:'postcss-loader',
                    options:{
                        plugins:[
                            require('autoprefixer')
                        ]
                    }
                },'sass-loader']
            },
            {
                test:/\.vue$/,
                exclude: /node_modules/,
                use:['vue-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                    loader: 'url-loader',
                    options: {
                        limit: 1 * 1024,
                        outputPath: 'img/',
                        esModule: false
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
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/index.css',
        })
    ],
    resolve:{
        alias:{
            com:path.resolve(__dirname,'src/components'),
            img:path.resolve(__dirname,'src/static/images'),
            css:path.resolve(__dirname,'src/static/css'),
        }
    }
  };