const HtmlWebpackPlugin = require("html-webpack-plugin")
const path= require("path")


module.exports = {
    output: {
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.sc[a]ss$/,
                use: {
                    loader: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                }
            }
        ]
    },
    // configure dev server
    devServer: {
        historyApiFallback: true, // on reload, your paths are still accessible.
        port: 1931,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}