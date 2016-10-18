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
                    'plugins': [
                        'transform-decorators-legacy',
                        [
                            'babel-root-import', [{
                                'rootPathPrefix': '~',
                                'rootPathSuffix': 'src/components'
                            }, {
                                'rootPathPrefix': '@',
                                'rootPathSuffix': 'src'
                            }]
                        ]
                    ],
                    presets:[ 'es2015', 'stage-2', 'react' ]
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
            },
            {
                test: /.(jpe?g|gif|png)$/,
                loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
            }
        ]
    }
};
