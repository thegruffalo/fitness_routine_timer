const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { DefinePlugin } = require('webpack');
const { version, buildDate } = require('./src/js/version');

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new DefinePlugin({
            'process.env.VERSION': JSON.stringify(version),
            'process.env.BUILD_DATE': JSON.stringify(buildDate)
        })
    ]
});