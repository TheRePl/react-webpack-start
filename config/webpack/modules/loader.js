const base  = require('../base/base'),
      files = require('../base/files');

module.exports = (dev) => {
  return {
    //noParse: /jquery|vue/, // 忽略某些查找的库，提高构建速度
    rules: [
      {
        test: /\.jsx$|\.js$/,
        enforce: "pre",
        exclude: [],
        include: [files.viewPath],
        use: ['happypack/loader?id=ESLint']
      },
      {
        test: /\.(js|jsx)$/,
        include: [files.viewPath, files.staticPath, files.jsPath, files.htmlPath],
        use: ['happypack/loader?id=JSX']
      },
      {
        test: /\.(css|pcss)$/, // 标准的CSS编译
        include: [files.viewPath, files.cssPath],
        loaders: require('extract-text-webpack-plugin').extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            query: {
              modules: false,
              outputStyle: 'expanded',
              sourceMap: dev,
              sourceMapContents: dev
            }
          }, 'postcss-loader']
        })
      },

      {
        test: /\.(html)$/,
        include: [files.htmlPath],
        use: ['happypack/loader?id=HTML']
      },

      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        include: [files.imgPath, files.viewPath],
        use: ['happypack/loader?id=IMAGE']
      },

      {
        test: /\.(svg|ico|woff|eot|ttf)$/,
        include: [files.fontPath, files.viewPath],
        use:['happypack/loader?id=FILE']
      }
    ]
  };
};