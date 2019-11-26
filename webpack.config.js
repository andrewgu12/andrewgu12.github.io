const path = require('path');

module.exports = {
  entry: './ts/library.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader'}
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};