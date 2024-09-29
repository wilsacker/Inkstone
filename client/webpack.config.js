const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js', // Path relative to the client folder
      install: './src/js/install.js' // Path relative to the client folder
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../dist'), // Adjusted to output to the dist folder in the root
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html', // Path relative to the client folder
        title: 'JATE',
      }),
      new InjectManifest({
        swSrc: './src/js/src-sw.js', // Path relative to the client folder
        swDest: 'service-worker.js'
      }),
      new WebpackPwaManifest({
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'A text editor that works offline.',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        fingerprints: false,
        inject: true,
        icons: [{
          src: path.resolve('src/images/logo.png'), // Path relative to the client folder
          sizes: [96, 128, 192, 256, 384, 512]
        }]
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'] // Transpile ES6 to ES5
            }
          }
        }
      ],
    }
  };
};