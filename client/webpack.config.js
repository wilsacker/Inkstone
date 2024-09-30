const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: "production",
    entry: {
      main: './src/js/index.js',  // Adjusted path
      install: './src/js/install.js',  // Adjusted path
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
      new HtmlWebpackPlugin({
        template: './index.html',  // Adjusted path for the HTML template
        title: 'J.A.T.E',
      }),
      new InjectManifest({
        swSrc: './src-sw.js',  // Adjusted path for service worker
        swDest: 'src-sw.js',
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'Takes notes with JavaScript syntax highlighting!',
        background_color: '#225cca',
        theme_color: '#225cca',
        start_url: '/',
        publicPath: '/',
        inject: true, 
        icons: [
          {
            src: path.resolve('src/images/logo.png'),  // Path for the logo
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
            filename: ({ size }) => `icon_${size}x${size}.png`,  // Custom filename based on the size from the array
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Handle image files
          type: 'asset/resource',
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
  };
};