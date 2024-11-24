const path = require('path')

const { getDefaultConfig } = require('@expo/metro-config')
const { withNxMetro } = require('@nrwl/expo')
const exclusionList = require('metro-config/src/defaults/exclusionList')

module.exports = async function createMetroConfig(projectRoot) {
  const defaultConfig = await getDefaultConfig(projectRoot)

  defaultConfig.transformer.babelTransformerPath = require.resolve(
    'react-native-svg-transformer'
  )
  defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
    ext => ext !== 'svg'
  )
  defaultConfig.resolver.sourceExts.push('svg')
  return withNxMetro(defaultConfig, {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    debug: false,
    // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx'
    extensions: [],
    // the project root to start the metro server
    projectRoot,
    // Specify any additional (to projectRoot) watch folders, this is used to know which files to watch
    watchFolders: [
      path.resolve(__dirname, '../shared-native'),
      path.resolve(__dirname, '../../libs/native-core-framework'),
    ],
    resolver: {
      blacklistRE: exclusionList([/.yalc\/.*/]),
    },
  })
}
