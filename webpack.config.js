var path = require('path');
var webpack = require('webpack');

var config ={
  entry: [
    './app/index.js',
  ],

  output: {
    path: path.resolve(__dirname,'./app/assets/webpack'),
    publicPath: 'assets/webpack',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['','.js','.jsx','.scss'],
    modulesDirectories: [
      'node_modules'
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  devServer: {
    inline: true,
    port: 5001
  },
 
  module: {
    loaders: [
      {test: /\.jsx?$/,loader: 'babel',exclude: /node_modules/},
      {test: /\.scss$/,loader: 'style!css!sass'},
      {test: /\.css$/,loader: 'style!css'},
      {test: /\.(png|jpg)$/,loader: 'url?limit=8192'}
    ]
  },
};

module.exports = config;