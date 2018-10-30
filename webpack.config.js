const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


/*global
  __dirname
*/ 
module.exports = {
	mode: 'development',
	entry: {
		'bootstrap/js/bootstrap': './src/global/bootstrap/js/bootstrap.js',
		'common/js/commom' : './src/global/common/js/commom.js'
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
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.ejs$/,
				use: 'ejs-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Instant Blog',
			template: './src/views/index.ejs',
			filename: path.resolve(__dirname, 'dist/views/index/index.ejs'),
			inject: 'body'
		})
	]
}