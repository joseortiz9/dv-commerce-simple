import 'ts-node/register' // Enables TypeScript support for config
import 'tsconfig-paths/register' // Ensures TS paths are mapped
import {type ExpoConfig} from 'expo/config'
import isArray from 'lodash/isArray'
import mergeWith from 'lodash/mergeWith'
import {createAppConfig} from '../shared-native/app.config'

const marketName = 'mx'
const buildType = process.env.BUILD_TYPE || 'prod'

const expoProjectId = ''

// eslint-disable-next-line consistent-return
const concatArrays = (objValue, srcValue) => {
  if (isArray(objValue)) {
    return objValue.concat(srcValue)
  }
}

let packageId
if (buildType === 'local') {
  packageId = 'com.phdv.devclient'
} else if (buildType === 'prod') {
  packageId = 'com.phdv.mx.prod'
} else {
  packageId = `com.phdv.mx.${buildType}`
}

const appConfig = mergeWith(
  createAppConfig(__dirname, marketName, packageId, expoProjectId),
  {
    slug: 'dv-commerce-mx',
    version: '0.0.1',
  } as ExpoConfig,
  concatArrays
)

export default appConfig