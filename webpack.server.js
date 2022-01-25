const path = require('path');
const nodeExternals = require('webpack-node-externals');
const {merge} = require('webpack-merge');

const baseConfig = require('./webpack.base');

const serverConfig = {
  target: 'node',

  entry: './server/index.js',

  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [nodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
