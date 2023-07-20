const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack=require('webpack');

//定一个通用的路径转换方法
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

module.exports = {
    mode: 'development',
    entry: {
        main: ['react-hot-loader/patch', resolvePath('../src/client/app/index.tsx')],//入口文件
    },
    output: {
        filename: 'index.js', //设置打包后的文件名
        path: resolvePath('../dist/static'), //设置构建结果的输出目录
        publicPath: 'http://localhost:9002/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?|\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    // {
                    //     loader: 'style-loader'
                    // },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]' //配置图片的输出路径和名称
                    }
                }]

            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css' //设置名称
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"development"' },
            '__IS_PROD__': false,
            '__SERVER__': false
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, '../src/')
        }
    },
}
