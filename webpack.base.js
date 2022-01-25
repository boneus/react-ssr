const path = require('path');

module.exports = {
  mode: 'development',

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
