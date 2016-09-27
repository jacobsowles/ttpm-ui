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
        extensions: ['', '.js', '.jsx']
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
    }
};
