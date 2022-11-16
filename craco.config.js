const path = require('path')
const resolve = pathname => path.resolve(__dirname, pathname)

const CracoLessPlugin = require('craco-less')
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'cpns': resolve('src/components'),
      'utils': resolve('src/utils')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      // ant-design中的配置
      // options: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: { '@primary-color': '#1da57a' },
      //       javascriptEnabled: true
      //     }
      //   }
      // }
    }
  ]
}