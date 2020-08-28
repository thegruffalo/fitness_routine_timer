const path = require('path');

module.exports = {
    "mode": "development",
    "entry": "./src/js/app.js",
    "output": {
        "path": __dirname + '/static',
        //"filename": "[name].[chunkhash:8].js"
        "filename": "[name].js"
    },
    "devtool": "source-map",
    module: {
        rules: [
            { 
                test: /\.handlebars$/, 
                loader: "handlebars-loader",
                options: {
                    precompileOptions: {
                      knownHelpersOnly: true,
                      knownHelpers:["to_time","if_gt"]
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env',{
                                "targets": {
                                    "chrome": "82",
                                    "safari": "13"
                                  },
                                  useBuiltIns:"entry",
                                  corejs: { version: 3, proposals: true }
                            }]
                        ],
                        plugins:["@babel/plugin-transform-arrow-functions",
                        "@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    }
}