const path = require("path");

const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./demo/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    compress: true,
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.tsx/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(sc|c)ss/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new HTMLPlugin({
      template: "./demo/index.html"
    })
  ],
  externals: {
    react: {
      root: "commonjs React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react"
    },
    "react-dom": {
      root: "commonjs ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      umd: "react-dom"
    }
  }
};
