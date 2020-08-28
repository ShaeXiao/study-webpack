const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
                use: ['style-loader', 'css-loader',{
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
        new VueLoaderPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
  };