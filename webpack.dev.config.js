const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app : path.resolve(__dirname, './src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'src/[name].[hash].js',
    publicPath: 'dist/',
    // chunkFilename: 'src/js/[id].[chunkhash].js',
    // library: '[name]',
  },
  devServer: {
    port: 3500,
    // hot: true,
    open: true,
    contentBase: path.resolve(__dirname, 'dist'),
    // writeToDisk: true,
    host: '192.168.0.4',
    // watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use : [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use : [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        loader: 'file-loader',
        options: {
          outputPath: './src/assets/',
          name: '[name].[ext]',
        },
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './src/styles/[name].css',
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'dist'),
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      title: './[name].html',
      template: path.resolve(__dirname, './pug/index.pug'),
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ['**/app.*', '**/commons.*'],
    // })
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 0,
  //     name: 'commons',
  //   }
  // }
}