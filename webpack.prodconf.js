'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

function pathResolve(yourPath) {
    return path.resolve(__dirname, yourPath);
}

module.exports = {
    context: path.resolve(__dirname, 'views'),

    entry: {
        index: './index'
    },

    output: {
        path: pathResolve('public'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        library: '[name]'
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.css']
    },

    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['-loader'],
        extensions: ['.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /\/node_modules\//,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style', use: 'css?importLoaders=1!postcss-loader' })
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ],
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            ReactDOM:   'react-dom',
            React:      'react',
            PropTypes:  'react/lib/ReactPropTypes',
            Component:  'react/lib/ReactComponent'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                properties: true,
                conditionals: true,
                loops: true,
                unused: true,
                collapse_vars: true,
                dead_code: true,
                drop_console: true,
                drop_debugger: true,
                warnings: false,
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
    ]
};
