const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const prod = (process.env.NODE_ENV = 'production');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    static: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@types': path.resolve(__dirname, './src/types'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@stories': path.resolve(__dirname, './src/stories'),
      '@store': path.resolve(__dirname, './src/store'),
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),

    new CopyPlugin({
      patterns: [{ from: 'public/mockServiceWorker.js', to: '' }],
    }),
  ],
};
