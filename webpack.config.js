const path = require("path");

module.exports = {  
    entry: "./src/index.tsx",
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: "ts-loader"
      }],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve("./dist/js"),
        publicPath: "/js"        
    },        
    devServer: {
        contentBase: "./dist",
        compress: true,
        hot: true,
        port: 5000
    }
};