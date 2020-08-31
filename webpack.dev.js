const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode: 'development',
    devtool: 'inline-source-map',
    module:{

    },
    devServer:{
      contentBase: './dist',
      hot:true,
      proxy:{
          '/':{
             target:'http://10.10.0.55:3000',
             changeOrigin:true
          }
      }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})