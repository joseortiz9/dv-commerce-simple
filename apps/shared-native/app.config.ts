import 'ts-node/register' // Required because expo only transplies the app.config.ts file. https://docs.expo.dev/workflow/configuration/#using-typescript-for-configuration-appconfigts-instead-of-appconfigjs
import 'tsconfig-paths/register'

import type { ExpoConfig } from 'expo/config'

const buildType = process.env.BUILD_TYPE || 'prod'

const getAppName = (marketName: string) => {
  if (buildType === 'prod') {
    return `Pizza Hut ${marketName.toUpperCase()}`
  }
  return `Mvk ${marketName} ${buildType} `
}

export const createAppConfig = (
  projectRoot: string,
  marketName: string,
  packageId: string,
  expoProjectId: string
) => {

  return {
    extra: {
      eas: {
        projectId: `${expoProjectId}`,
      },
    },
    name: getAppName(marketName),
    slug: 'dv-commerce',
    owner: 'phdv',
    version: '0.0.1', // replaced dynamically in CI
    runtimeVersion: {
      policy: 'appVersion',
    },
    orientation: 'portrait',
    icon: '../shared-native/assets/icon.png',
    scheme: `pizzahut.${marketName}`,
    splash: {
      barStyle: 'light-content',
      image: '../shared-native/assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#000000',
    },
    updates: {
      fallbackToCacheTimeout: 3000,
      url: `https://u.expo.dev/${expoProjectId}`,
    },
    assetBundlePatterns: ['**/*'],
    plugins: [
      '../shared-native/plugins/android-app-init-default-animation-config-plugin.js',
      [
        'expo-build-properties',
        {
          ios: {
            deploymentTarget: '13.4',
          },
          android: {
            minSdkVersion: 24,
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            buildToolsVersion: '34.0.0',
            // needed for webview native package
            // https://github.com/react-native-webview/react-native-webview/issues/3024
            kotlinVersion: '1.9.0',
          },
        },
      ],
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: packageId,
      config: {
        usesNonExemptEncryption: false,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: '../shared-native/assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: packageId,
      config: {
      },
      intentFilters: [
        {
          autoVerify: true,
          action: 'VIEW',
          data: {
            scheme: `pizzahut.${marketName}`,
          },
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    web: {
      favicon: '../shared-native/assets/favicon.png',
    },
  } as ExpoConfig
}
