const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./ts/library.ts', './scss/library.scss'],
  output: {
    filename: 'library.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','resolve-url-loader', 'sass-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.css']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'library.css',
      chunkFilename: '[id].css'
    })
  ]
};
