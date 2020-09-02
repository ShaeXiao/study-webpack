const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
                use:['style-loader','css-loader',{
                    loader:'postcss-loader',
                    options:{
                        plugins:[
                            require('autoprefixer')
                        ]
                    }
                }]
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
                        // publicPath:'img',
                        outputPath: 'img/',
                        esModule: false
                    }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins:[
                            [
                                "import", 
                                { 
                                    "libraryName": "ant-design-vue", 
                                    "libraryDirectory": "es", 
                                    "style": "css" 
                                }
                            ]
                        ]
                    }
                }],
                exclude: /node_modules/
            },
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
    ],
    resolve:{
        alias:{
            com:path.resolve(__dirname,'src/components'),
            img:path.resolve(__dirname,'src/static/images'),
            css:path.resolve(__dirname,'src/static/css'),
        }
    }
  };