var path = require('path');

var config = {
    context: path.join(__dirname, 'src'),
    entry: [
        './main.js'
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.(png)$/,
                loaders: ['file-loader?name=img/[name].[ext]']
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true
                }
            }
        ]
    },
    resolveLoader: {
        root: [
            path.join(__dirname, 'node_modules')
        ]
    },
    resolve: {
        root: [
            path.join(__dirname, 'node_modules')
        ]
    }
};
module.exports = config;