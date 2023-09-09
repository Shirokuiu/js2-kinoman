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
    modules: [path.resolve(__dirname, './'), 'node_modules'],
    alias: {
      '@components': path.join(__dirname, 'src/components'),
      '@constants': path.join(__dirname, 'src/constants'),
    },
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    compress: true,
    port: 8080,
  },
};
