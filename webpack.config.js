const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
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
    mode: 'development'
};