const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    entry: {
        app: "./src/js/app.js",
    },
    output: {
        "path": path.resolve(__dirname, 'static'),
        "filename": "[name].[chunkhash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader",
                options: {
                    precompileOptions: {
                        knownHelpersOnly: true,
                        knownHelpers: ["to_time", "if_gt"]
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
                            ['@babel/preset-env', {
                                "targets": {
                                    "chrome": "82",
                                    "safari": "13"
                                },
                                useBuiltIns: "entry",
                                corejs: { version: 3, proposals: true }
                            }]
                        ],
                        plugins: ["@babel/plugin-transform-arrow-functions",
                            "@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            }
        ]
    },
    optimization: {
        minimize: true,
        //minimizer: [new CssMinimizerPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            inject: true,
            title: 'Fitness Routine Timer',
            mobile: true,
            meta: {
                "apple-mobile-web-app-status-bar": "#db4938",
                "theme-color": "#db4938"
            },
            appMountId: 'app',
            appMountHtmlSnippet: '<div id="routine_list"></div><div id="routine_detail"></div><div id="routine_timer"></div>',
        }),
        new CssMinimizerPlugin(),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        }),
        new WebpackPwaManifest({
            name: 'Fitness Routine Timer',
            short_name: 'Fit Timer',
            description: 'Fitness Routine Timer',
            background_color: '#fdfdfd',
            theme_color: "#db4938",
            icons: [
              {
                src: path.resolve('src/images/large_icon.png'),
                sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
              },
              {
                src: path.resolve('src/images/large_icon.png'),
                size: '1024x1024' // you can also use the specifications pattern
              },
              {
                src: path.resolve('src/images/maskable_icon.png'),
                size: '1280x1280',
                purpose: 'maskable'
              }
            ]
          })
    ]
}