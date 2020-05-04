var path = require("path")
var ISDEV = process.env.NODE_ENV === 'development';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    //hot: true,
    port: 8080

  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'react']
      }
    }, {
      test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
      loader: 'babel-loader', //使用的加载器名称
      exclude: /node_modules/,
      query: {  //es2015(npm intall babel-preset-es2015 -D)代替env              //babel的配置参数，可以写在.babelrc文件里也可以写在这里
        presets: ['env', 'react']   //{"presets": ["react", "env"]}
      }
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    },
    {
      test: /\.scss/, // 把scss转为webpack可识别的模块
      // 注意这里的"sass-loader": "^8.0.2",版本过高会有 this.getResolve is not a function
      // 需要降低版本7.3.1
      loaders: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            options: {},
          }
        },
        'sass-loader'
      ]
    },
    {
      test: /\.(png|jpg|svg)$/,
      loader: 'url-loader?limit=40000'
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.svg/,
      use: [
        {
          loader: 'svg-inline-loader'
        }
      ]
    }
    ]
  },
  plugins: [
    /* new ExtractTextPlugin({
      filename: 'asesst/css/[name].[contenthash].css',
      // set the following option to `true` if you want to extract CSS from
      // codesplit chunks into this main css file as well.
      // This will result in *all* of your app's CSS being loaded upfront.
      allChunks: false,
    }), */
  ]

}

module.exports = config;
