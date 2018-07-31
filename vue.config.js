module.exports = {
  chainWebpack: config => {
    // remove the Preload plugin
    config.plugins.delete('preload')

  },
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single'
    }
  }
}
