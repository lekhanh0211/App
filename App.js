import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import COLORS from './src/common/colors'
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './src/screens/StartScreen';
import TabNavigator from './src/navigation/TabNavigator'
import DetailProduct from './src/screens/DetailProduct';
import LoginScreen from './src/screens/LoginScreen';
import CartScreen from './src/screens/CartScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.color} barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Detail" component={DetailProduct} />
        <Stack.Screen name="Cart" component={CartScreen} />
        {/* <Stack.Screen name="Detail" component={DetailProduct} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
const styles = StyleSheet.create({})

