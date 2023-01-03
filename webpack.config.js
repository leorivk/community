const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: "./src/js/main.js",
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    mode: "development",
    plugins: [
        new MiniCssExtractPlugin({
          filename: "css/styles.css"
        }),
    ],
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [["@babel/preset-env", { targets: "defaults" }]],
                  },
                },
            },
            { 
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    }
}