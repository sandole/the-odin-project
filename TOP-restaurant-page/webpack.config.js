const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: "/",
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};