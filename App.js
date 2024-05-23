import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import { StatusBar } from 'react-native'

const { Navigator, Screen } = createNativeStackNavigator()

const App = () => {
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor="transparent"
      />

      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Home" component={HomeScreen} />
        </Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
