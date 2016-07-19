// webpack.config.js
module.exports = {
  entry: "./main.js",
  output: {
    path: './', // 图片和 JS 会到这里来
    publicPath: '', // 这个用来成成比如图片的 URL
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // 用 ! 来连接多个人 loader
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
    ]
  },
  watch: true,// 自动编译webpack --progress --colors --watch
  resolve: {
        //查找module的话从这里开始查找
        root: '', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.css'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
          //  AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
             Jquery : '../resources/js/jquery.js'
        }
    }

   
};// webpack.config.js


