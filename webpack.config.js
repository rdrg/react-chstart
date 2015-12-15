var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer      = require('autoprefixer-core');
var csswring          = require('csswring');
var webpack           = require('webpack');
var path              = require('path');
var fs                = require('fs');

var config = {
  devServer: {
      historyApiFallback: true,
      proxy: {
          '/ch/*': {
              target: 'http://54.175.165.253:8080',
              //target : 'http://localhost:8080',
              secure: true,
          },
          '/chs/*': {
              target: 'http://54.175.165.253:8080',
              //target: 'http://localhost:8080',
              secure: true,
          },
      },
  },
  entry: ['babel-polyfill', 'webpack/hot/dev-server', './src/app.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  eslint: {
    reporter: require("eslint-friendly-formatter"),
    // reporter: require("eslint/lib/formatters/stylish")
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [
        'react-hot',
        'babel?cacheDirectory=true&presets[]=es2015&presets[]=react&presets[]=stage-0&plugins[]=transform-decorators-legacy'
      ],
      exclude: /node_modules/
    },{
      test: /\.scss$/,
      loader: 'style!css!postcss!sass'
    }, {
      test: /\.woff$|\.ttf$|\.wav$|\.mp3$|\.eot$/,
      loader: 'file'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
      loaders: [
        'url?limit=8192&hash=sha512&digest=hex&name=[hash].[ext]',
        'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'exports?global.Promise!es6-promise'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body' // Inject all scripts into the body
    })
  ],
  postcss: [autoprefixer, csswring],
  debug : true,
  devtool: 'source-map'
  //devtool: 'eval'
};

module.exports = config;
