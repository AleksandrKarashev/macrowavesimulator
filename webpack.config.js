//import path from 'path';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: "./app/app.jsx", // входная точка - исходный файл
   output: {
      path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
      publicPath: '/public/',
      filename: "bundle.js"       // название создаваемого файла
   },
   devServer: {
      historyApiFallback: true,
      port: 8081,
      open: true
   },
   module: {
      rules: [   //загрузчик для jsx
         {
            test: /\.jsx?$/, // определяем тип файлов
            exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
            loader: "babel-loader",   // определяем загрузчик
            options: {
               presets: ["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
            }
         },

         {
            test: /\.css$/,
            use: [
               'style-loader', 'css-loader'
            ]
         },
         // { test: /\.(js)$/, use: 'babel-loader' }
         // {
         //    test: /\.css$/i,
         //    use: [MiniCssExtractPlugin.loader, 'css-loader'],
         // }
         // {
         //    test: /\.(css|sass|scss)$/,
         //    use: [
         //       MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
         //    ]
         // }
      ],
   },
   plugins: [
      new HTMLWebpackPlugin(),
      new MiniCssExtractPlugin({
         filename: 'styles.css'
      })
   ]


}