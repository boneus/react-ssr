const path = require('path');

module.exports = {
  mode: 'development',

  entry: './client/index.js',

  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public'),
  },

  resolve: {
    alias: {
      '@client': path.resolve(__dirname, 'client/'),
      '@server': path.resolve(__dirname, 'server/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
