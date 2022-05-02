const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("path");

module.exports = {
    entry: {
        app: "./assets/js/script.js",
        events: "./assets/js/event.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            //this obj in the rules array will ID the type of files to pre-process
            //using the test property to find a regex (with .jpg ext)
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                      loader: 'file-loader',
                      //options enable us to rename our files and change output path
                      options: {
                          //file-loader treats file as ES5 module and may improperly format imgs
                          //setting it to false would prevent improper formatting 
                        esModule: false,
                        name (file) {
                          return "[path][name].[ext]"
                        },
                        publicPath: function(url) {
                          return url.replace("../", "/assets/")
                        }
                      }  
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        //tell webpack which plugin we what to use
        //providePlugin plugin defines the $ and jQuery variables to use the installed npm package
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // the report outputs to an HTML file in the dist folder
                //can set to 'disable' to temporarily stop the reporting and automatic opening of this report in browser
        })
    ],
    mode: "development"
};

// module.exports = config;
