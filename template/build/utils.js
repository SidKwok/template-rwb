const path = require('path');
const config = require('../config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

exports.assetsPath = _path => {
    const assetsSubDirectory = isProd
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory;
    return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = options => {
    options = options || {};

    const cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: isProd,
            sourceMap: options.sourceMap,
            modules: config.base.cssModules
        }
    };

    // generate loader string to be used with extract text plugin
    function generateLoaders (loader, loaderOptions) {
        const loaders = [cssLoader];

        // enable postcss by default
        loaders.push({ loader: 'postcss-loader' });

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            });
        }

        // Extract CSS when in production build
        return [{
            loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader'
        }].concat(loaders);
    }

    return {
        css: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    };
}

exports.styleLoaders = options => {
    const output = [];
    const loaders = exports.cssLoaders(options);
    for (let extension in loaders) {
        const loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            loader: loader
        });
    }
    return output;
};
