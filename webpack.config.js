const htmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }, {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }, ],
            },
        ],
    },
    plugins: [
        new htmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './style.css',
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '',
    },
};