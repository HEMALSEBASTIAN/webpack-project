//for creating bundle
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path=require('path')
const  webpack  = require('webpack')

//all configuration will be inside module.exports
module.exports={
    mode:'development',
    entry:'./index.js',
    output: {
        path: path.resolve(__dirname, 'build.js'),
        filename : 'bundle.js',
        publicPath: 'build/'
    },
    devServer:{
        publicPath :'/build/'
    },
    module :{
        rules:[
            {
                test:/\.js$/,  //which particular files here it is '.js'
                use:'babel-loader',  //loader
                exclude: /node_modules/ //don't convert node_modules files
            },
            {
                test:/\.css$/, //which particular files here it is '.css'
                //use: ['style-loader','css-loader'] //reading from right to left, so first css-loader will loading the css, 
                //sttyle-loader will do the task of injecting the css to html
                use: [MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins:[ 
        new webpack.ProvidePlugin({
            "React" : "react" //so that we don't need to add react in all the import statement
        }),
        new MiniCssExtractPlugin({ //for telling the filename for index.css to be stored in build.js
            filename:'index1.css'
        })
    ]
}