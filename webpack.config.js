module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,         //表示所有的后缀为.css文件
                loader: "style-loader!css-loader" //加入处理.css文件的loader
            }
        ]
    }
};