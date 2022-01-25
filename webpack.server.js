const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',

  mode: 'development',

  entry: './server/index.js',

  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [nodeExternals()],

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
