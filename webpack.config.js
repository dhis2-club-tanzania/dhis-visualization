const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TypedocWebpackPlugin = require('typedoc-webpack-plugin');
const { env } = require('yargs').argv;
const package = require('./package.json');

const isProduction = env === 'prod';
const libraryName = package.name;

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './lib/src/index.ts',
  devtool: 'inline-source-map',
  // optimization: {
  //   minimizer: [new UglifyJsPlugin()],
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    library: libraryName,
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
    '@iapps/function-analytics': '@iapps/function-analytics',
    highcharts: 'highcharts',
    'highcharts-grouped-categories': 'highcharts-grouped-categories',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'lib/package.json', to: '' },
        { from: 'lib/*.md', to: '' },
        { from: 'LICENSE', to: '' },
      ],
    }),
    // new TypedocWebpackPlugin(
    //   {
    //     name: 'Typescript Library',
    //     mode: 'file',
    //     out: '../docs',
    //     theme: 'default',
    //     exclude: ['**/*.spec.ts'],
    //     includeDeclarations: false,
    //     ignoreCompilerErrors: true,
    //     excludeExternals: true,
    //     excludeNotExported: true,
    //     excludePrivate: true,
    //   },
    //   './lib'
    // ),
  ],
};
