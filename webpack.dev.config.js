const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app : path.resolve(__dirname, './src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: './src/js/[name].js',
  },
  devServer: {
    port: 3500,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use:'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        use: [
          'file-loader?name=[name].[ext]',
          'extract-loader',
          'html-loader'
          ],
      },
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
      filename: './src/styles/css/[name].css',
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      title: '[name].html',
      template: path.resolve(__dirname, './src/pug/index.pug'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*', '**/commons.*'],
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: 'commons',
    }
  }
}