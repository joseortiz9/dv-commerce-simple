module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-reanimated/plugin',
    'transform-inline-environment-variables',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
}
