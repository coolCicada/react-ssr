const path = require('path');
const nodeExternals = require('webpack-node-externals')

//定一个通用的路径转换方法
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

process.env.BABEL_ENV = 'node';//设置 babel 的运行环境

module.exports = {
    mode: 'development',
    target: 'node',
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
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
