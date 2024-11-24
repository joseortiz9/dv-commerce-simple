const sharedConfig = require('../shared-native/babel.config')

module.exports = api => {
  api.cache(true)
  return {
    ...sharedConfig,
  }
}
