const path = require("path");

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
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}