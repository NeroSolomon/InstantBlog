const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*global
  __dirname
*/ 
module.exports = {
  mode: 'development',
  entry: {
    'bootstrap/js/bootstrap': './src/global/bootstrap/js/bootstrap.js',
    'common/js/commom': './src/global/common/js/commom.js',
    'index/js/index': './src/global/index/js/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/global'), // path = path + filename
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: require.resolve('jquery'), // 全局变量设置，注意添加在所有 rules 之前
        use: ['expose-loader?jQuery', 'expose-loader?$']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.ejs$/,
        use: 'ejs-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'url-loader?limit=1024&name=[path][name].[ext]?[hash:8]'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      favicon: './src/global/common/image/favicon.ico',
      title: 'Instant Blog',
      template: './src/views/index.ejs',
      filename: path.resolve(__dirname, 'dist/views/index/index.ejs'),
      inject: 'body'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        // 处理 loader 输出路径
        customInterpolateName: url => {
          // eg: src/global/index/images => global/index/images
          const regex = /src\/global\//;
          const oMatch = url.match(regex);
          if (oMatch) {
            url = url.replace(regex, '');
          }
          
          return url;
        }
      },
    }),
    // 从 js 中分离 css 到独立的文件，文件保存路径相对于 output 配置中的 publicPath
    new ExtractTextPlugin({
      filename: getPath => {
        return getPath('[name].css?[hash:8]')
          .replace(/\/js\/(.+)\.css/, (match, p1) => 
            '/css/' + p1 + '.css'
          );
      }
    }),
  ]
};