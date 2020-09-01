const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode: 'development',
    devtool: 'inline-source-map',
    module:{
      rules:[
        {
          test: /\.scss$/,
          use: ['style-loader','css-loader',{
              loader:'postcss-loader',
              options:{
                  plugins:[
                      require('autoprefixer')
                  ]
              }
          },'sass-loader']
      },
      ]
    },
    devServer:{
      contentBase: './dist',
      hot:true,
    //   proxy:{
    //       '/api':{
    //          target:'http://10.10.0.55:3000',
    //          changeOrigin:true,
    //          pathRewrite: {"^/api" : ""}
    //       },
    //       '/apu':{
    //         target:'http://10.10.0.55:4000',
    //         changeOrigin:true,
    //         pathRewrite: {"^/apu" : ""}
    //      },
    //   },
      proxy:[
        {
            context:['/api','/data'],
            target:'http://10.10.0.55:3000',
            changeOrigin:true,
            // pathRewrite: {"^/api" : ""}
        }
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})