/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import OnBoarding from './src/screens/OnBoarding';
import { View } from 'react-native';
import BootSplash from 'react-native-bootsplash'


function App() {
  useEffect(()=>{
    BootSplash.hide();
  })

  return (
    <AppNavigator/>
    
  )
}






export default App;
