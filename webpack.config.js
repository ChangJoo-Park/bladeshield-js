  const path = require('path');

  module.exports = {
    entry: './index.js',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    plugins: [],
    output: {
      filename: 'bladeshield.bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
