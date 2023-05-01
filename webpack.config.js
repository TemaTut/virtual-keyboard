const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/scripts/script.js', // same entry: path.resolve(__dirname, 'src', 'js', 'script.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: "index.html"
    }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'pets.html'),
    //   filename: "pets.html"
    // }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: "./src/assets", to: "./assets/" },
    //   ],
    // }),
  ],
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i, // for scss: test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};