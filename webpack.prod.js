const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
var WebpackAutoInject = require('webpack-auto-inject-version');

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new WebpackAutoInject({
            SILENT: false,
            PACKAGE_JSON_PATH: './package.json',
            PACKAGE_JSON_INDENT: 4,
            components: {
                AutoIncreaseVersion: true,
                InjectAsComment: false,
                InjectByTag: true
            },
            componentsOptions: {
                AutoIncreaseVersion: {
                    runInWatchMode: false // it will increase version with every single build!
                },
                InjectByTag: {
                    fileRegex: /\.+/,
                    // regexp to find [AIV] tag inside html, if you tag contains unallowed characters you can adjust the regex
                    // but also you can change [AIV] tag to anything you want
                    AIVTagRegexp: /(\[AIV])(([a-zA-Z{} ,:;!()_@\-"'\\\/])+)(\[\/AIV])/g,
                    dateFormat: 'd mmm yyyy H:MM:ss'
                }
            }
        })
    ]
});