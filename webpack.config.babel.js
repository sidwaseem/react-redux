import path from 'path';
import { EnvironmentPlugin } from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const envPlugin = new EnvironmentPlugin({
    NODE_ENV: 'development'
});

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
});

const buildHTML = new HtmlWebpackPlugin({
    title: 'Coding Excercise',
    filename: 'index.html',
    template: 'src/index.html'
});

const copyAssets = new CopyWebpackPlugin([
    { from: 'src/images/', to: 'images/' },
    { from: 'src/sass/fonts/', to: 'fonts/', },
    { from: 'src/data/', to: 'data/', },
]);

export default {
    entry: [
        'babel-polyfill',
        './src/js/index.js'
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    // use style-loader in development
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)*$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        envPlugin,
        extractSass,
        buildHTML,
        copyAssets
    ],

    stats: { colors: true },

    devtool: 'cheap-module-source-map',

    devServer: {
        port: process.env.PORT || 9000,
        host: '0.0.0.0',
        contentBase: './src',
        historyApiFallback: true
    }
};
