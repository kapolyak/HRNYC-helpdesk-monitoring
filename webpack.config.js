const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: { 
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: {presets: ['@babel/react', '@babel/env']}},
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader", options: {presets: ['@babel/react', '@babel/env']} }
    ]
  }
};