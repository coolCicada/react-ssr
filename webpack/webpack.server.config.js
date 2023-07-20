const path = require('path');
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack');

//定一个通用的路径转换方法
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

process.env.BABEL_ENV = 'node';//设置 babel 的运行环境

module.exports = {
    mode: 'development',
    target: 'node',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    },
    entry: resolvePath('../src/server/app/index.ts'),//入口文件
    output: {
        filename: 'index.js', //设置打包后的文件名
        path: resolvePath('../dist/server')//设置构建结果的输出目录
    },
    module: {
        rules: [{
                test: /\.jsx?|\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
        'process.env': { NODE_ENV: `"${process.env.NODE_ENV}"`},
        '__IS_PROD__':isProd,
        '__SERVER__': true
        })
    ],
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, '../src/')
        }
    },
}
