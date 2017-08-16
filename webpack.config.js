const webpack = require('webpack');
const path = require('path');

const config = {
	entry: {
		index: './index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'lazyloadnext.js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [
					path.resolve(__dirname, 'node_modules')
				],
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}
		]
	}
}

module.exports = config;
