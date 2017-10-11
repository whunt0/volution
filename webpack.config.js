var webpack = require('webpack');
var path = require('path');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context : __dirname + "/src",
    entry : './index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js'
    },
    //HtmlWebpackPlugin takes a template file and generates the root HTML element with a reference to the Javascript bundle.
    plugins : [
        new HtmlWebpackPlugin({
            template : "index.ejs",
            filename : "index.html",
            inject : "body"
        })
    ],
    //Generate source maps for debugging
    devtool : "source-map",
    module: {
        rules: [
            //Compile JSX with babel-loader
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query : {
                    presets : ['react']
                }
            },
            //Lint all Javascript files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            //Load JSON files
            {
                test: /\.json$/, 
                loader: 'json-loader'
            },
            //Compile sass
            {
                test: /\.sass$/,
                loader: 'css-loader!resolve-url!sass-loader?sourceMap'
            },
            //Load CSS
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            //Load static resources
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ],
    },
    node : {
        console : true,
        fs : "empty",
        net : "empty",
        tls : "empty"
    },
    devServer : {
        //Allows dev server to reload entire page on any URL refresh
        historyApiFallback : true,
        //Proxy requests to the server
        proxy: {
            //'/REST/**' : {
            '*' : {
                target : 'http://192.168.0.25',
                secure : false,
                //changeOrigin : true
            }
        },
        //Overlays warnings and errors in the browswer window
        overlay : {
            warnings : true,
            errors : true
        },
    }
}
