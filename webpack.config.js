const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // 设置为开发模式
  entry: "./src/index.js", // 指定入口文件
  watch: true, // 开启文件监视

  output: {
    filename: "index.bundle.js", // 输出文件名
    path: path.resolve(__dirname, "dist"), // 输出路径
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css', // 提取的 CSS 文件名
    }),
  ],
};
