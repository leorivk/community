const path = require("path");

module.exports = {
    entry: {
        main: "./src/js/main.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist", "js"),
        clean: true
    },
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