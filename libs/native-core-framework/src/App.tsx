import React, {useEffect, useState} from 'react'
import * as Font from 'expo-font'
import {StatusBar, Text, View} from 'react-native'
import * as Splashscreen from 'expo-splash-screen'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const fetchFonts = () =>
  Font.loadAsync({
    /* eslint-disable global-require */
    'Open Sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'Open Sans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'Open Sans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
  })

const App = () => {
  const [errorLoading, setLoadingError] = useState<Error>()
  const [loadingFonts, setLoadingFonts] = useState(true)

  useEffect(() => {
    fetchFonts()
      .catch(() => fetchFonts().catch(setLoadingError))
      .finally(() => setLoadingFonts(false))
  }, [])

  useEffect(() => {
    StatusBar.setHidden(loadingFonts)
    if (!loadingFonts) {
      Splashscreen.hideAsync()
    }
  }, [loadingFonts])

  if (errorLoading) {
    return (<View>
      <Text>{errorLoading.message}</Text>
    </View>)
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle="dark-content"/>
      <Text>APP</Text>
    </GestureHandlerRootView>
  )
}

export default App
