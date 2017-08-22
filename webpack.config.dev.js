import path from 'path';
import webpack from 'webpack';

export default {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js')

	],
	output: {
      path: __dirname,
      filename: 'bundle.js',
      publicPath: '/'
  	}﻿,
  	plugins: [
  		new webpack.NoEmitOnErrorsPlugin(),
  		new webpack.HotModuleReplacementPlugin()
  	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'client'),
				loaders: ['react-hot-loader','babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js']
	}
}