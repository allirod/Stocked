const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/client/index.tsx',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },
    devServer: {
        port: 8080,
        static: {
            directory: path.join(__dirname, './dist')
        },
        proxy: {
            '/api': 'http://localhost:3000',
            secure: false
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Development',
            template: './src/client/index.html',
        })
    ]
}