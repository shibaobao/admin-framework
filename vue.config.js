const path = require('path')

function resolve (_path) {
  return path.resolve(__dirname, _path)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('common', resolve('./src/common'))
      .set('components', resolve('./src/components'))
      .set('plugins', resolve('./src/plugins'))
      .set('views', resolve('./src/views'))
      .set('store', resolve('./src/store'))
  }
}
