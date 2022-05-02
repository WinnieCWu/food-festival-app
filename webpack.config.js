const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
        },
    plugins: [
        //tell webpack which plugin we wnat to use
        //providePlugin plugin defines the $ and jQuery variables to use the installed npm package
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    mode: 'development'
};