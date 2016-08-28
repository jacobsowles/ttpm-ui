const webpack = require('webpack');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './src/index.js',
    eslint: {
        configFile: '.eslintrc'
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets:[ 'es2015', 'react', 'stage-2' ]
                }
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        new LiveReloadPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
