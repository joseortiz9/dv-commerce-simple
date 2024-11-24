const createWebpackConfig = require('../shared-native/webpack.config')

module.exports = async (env, argv) => {
  const config = await createWebpackConfig(env, argv)

  // custom market config here

  return config
}
