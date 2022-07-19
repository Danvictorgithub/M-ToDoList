const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: './src/index.js',
   output: {
    filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
     assetModuleFilename: 'images/[hash][ext][query]',
     clean: true,
   },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Minimalistic To-Do-List',
      template: "./src/index.html",
    }),

  ],
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
       test: /\.png/,
       type: 'asset/resource'
     }
    ],
  },
  mode: 'development',
  devtool: 'inline-source-map',
 };