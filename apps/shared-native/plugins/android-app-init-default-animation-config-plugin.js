const { withAndroidStyles, AndroidConfig } = require('@expo/config-plugins')

const { assignStylesValue, getAppThemeLightNoActionBarGroup } =
  AndroidConfig.Styles

const withoutDefaultAndroid12Animation = config =>
  withAndroidStyles(config, oldConfig => {
    const newConfig = { ...oldConfig }

    newConfig.modResults = assignStylesValue(newConfig.modResults, {
      add: true,
      parent: getAppThemeLightNoActionBarGroup(),
      name: 'android:windowIsTranslucent',
      value: 'true',
    })

    return newConfig
  })

module.exports = withoutDefaultAndroid12Animation
