var path = require('path');
var config = require('../config');
var utils = require('./utils');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, '../src/main.js')
    ],
    module: {
        loaders: utils.cssLoaders('development')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: true,
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        })
    ],
    devtool: 'eval-source-map',
});
