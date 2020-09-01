const webpack = require('webpack');
const {merge} = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

 module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module:{
        rules:[
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    }
                }, 'css-loader',{
                    loader:'postcss-loader',
                    options:{
                        plugins:[
                            require('autoprefixer')
                        ]
                    }
                },'sass-loader']
            },
        ],
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/index.css',
        })
    ]
    });