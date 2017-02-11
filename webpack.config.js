const webpack = require('webpack');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    eslint: {
        configFile: '.eslintrc'
    },
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        new LiveReloadPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            actions: path.join(__dirname, 'src/actions'),
            assets: path.join(__dirname, 'assets'),
            components: path.join(__dirname, 'src/components'),
            constants: path.join(__dirname, 'src/constants'),
            containers: path.join(__dirname, 'src/containers'),
            reducers: path.join(__dirname, 'src/reducers'),
            api: path.join(__dirname, 'src/api'),
            utils: path.join(__dirname, 'src/utils')
        }
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /(\.scss|\.css)$/,
                loaders: ['style', 'css', 'sass'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /.(jpe?g|gif|png)$/,
                loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
            }
        ]
    }
};
