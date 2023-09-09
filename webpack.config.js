const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      '@components': path.join(__dirname, 'src/components'),
    },
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    compress: true,
    port: 8080,
  },
};
