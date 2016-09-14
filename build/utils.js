var path = require('path');
var config = require('../config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
exports.assetsPath = function (_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory;
    return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function (env) {
    var isProd = (env === 'production');
    var cssLoaders = [{
        test: /\.css$/,
        loader: isProd
            ? ExtractTextPlugin.extract('style', 'css!postcss')
            : 'style!css!postcss'
    }];
    if (config.cssLoaders.indexOf('less') !== -1) {
        cssLoaders.push({
            test: /\.less$/,
            loader: isProd
                ? ExtractTextPlugin.extract('style', 'css!less!postcss')
                : 'style!css!less!postcss'
        });
    };
    if (config.cssLoaders.indexOf('scss') !== -1 || config.cssLoaders.indexOf('sass') !== -1) {
        cssLoaders.push({
            test: /\.scss$/,
            loader: isProd
                ? ExtractTextPlugin.extract('style', 'css!sass!postcss')
                : 'style!css!sass!postcss'
        });
    };
    return cssLoaders;
}
