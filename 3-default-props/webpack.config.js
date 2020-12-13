const path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "index.pack.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            }
        ]
    }
};