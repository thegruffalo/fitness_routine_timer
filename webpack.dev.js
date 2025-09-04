const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WorkboxPlugin = require('workbox-webpack-plugin');

// Create a new config without the service worker plugin
const commonConfig = {
    ...common,
    plugins: common.plugins.filter(plugin => !(plugin instanceof WorkboxPlugin.GenerateSW))
};

module.exports = merge(commonConfig,{
    mode: "development",
    devtool: "source-map",
    devServer: {
        static: {
            directory: './docs'
        }
    }
});