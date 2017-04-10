const base = require('./base/base.js');
const files = require('./base/files');
const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

const vendors = [
  /**
   * babel-polyfill 支持到es5
   * */
  'babel-polyfill',

  // 其他依赖
  'immutable',
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'react-immutable-proptypes',
  'redux',
  'redux-actions',
  'redux-observable',
  'rxjs',
];

if (process.env.NODE_ENV === 'development') {
  const arr = [
    // 'react-hot-loader/patch',
    'react-hot-loader',
    'redux-logger',
  ];
  vendors.push(...arr);
}

let config = {
  output: {
    path: files.dllPath,
    filename: '[name].js',
    library: '[name]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(files.dllPath, 'vendors.json'),
      name: '[name]',
      context: '/',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new Visualizer({
      filename: './vendors.html',
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.unshift(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
