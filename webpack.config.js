'use strict';

/* eslint no-console: "off" */
const webpackConfigs = require('./config/webpack');
const defaultConfig = 'dev';

module.exports = (configName) => {

    // If there was no configuration give, assume default
    const requestedConfig = configName || defaultConfig;

    // Return a new instance of the webpack config
    // or the default one if it cannot be found.
    let LoadedConfig = defaultConfig;

    if (webpackConfigs[requestedConfig] !== undefined) {
        LoadedConfig = webpackConfigs[requestedConfig];
    } else {
        console.warn(`
      Provided environment "${configName}" was not found.
      Please use one of the following ones:
      ${Object.keys(webpackConfigs).join(' ')}
    `);
        LoadedConfig = webpackConfigs[defaultConfig];
    }

    const loadedInstance = new LoadedConfig();

    // Set the global environment
    process.env.NODE_ENV = loadedInstance.env;

    return loadedInstance.config;
};





// var webpack = require("webpack");
// var path = require('path');
//
// var DIST_DIR = path.resolve(__dirname, "dist");
// var SRC_DIR = path.resolve(__dirname, "src");
//
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//
// var config =  {
//     entry: SRC_DIR + "/app/index.js",
//     output: {
//         path: DIST_DIR + "/app",
//         filename: "bundle.js",
//         publicPath: "/app/"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader"
//                 }
//             },
//             {
//                 test: /\.html$/,
//                 use: [
//                     {
//                         loader: "html-loader",
//                         options: { minimize: true }
//                     }
//                 ]
//             },
//             {
//                 test: /\.css$/,
//                 use: [MiniCssExtractPlugin.loader, "css-loader"]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: "./src/index.html",
//             filename: "./index.html"
//         }),
//         new MiniCssExtractPlugin({
//             filename: "[name].css",
//             chunkFilename: "[id].css"
//         })
//     ]
// };
//
//
// module.exports = config;