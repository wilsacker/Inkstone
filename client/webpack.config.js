const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './client/src/js/index.js',
      install: './client/src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html', // Correct path for the HTML file
        title: 'JATE',
      }),
      new InjectManifest({
        swSrc: './client/src-sw.js', // Assuming your service worker source file is directly under the client folder
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
          src: path.resolve('client/src/images/logo.png'), // Correct path for icons
          sizes: [96, 128, 192, 256, 384, 512] // Multiple sizes
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