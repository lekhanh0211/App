import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen';
import BannerSlider from '../components/BannerSlider';
const Stack = createStackNavigator();

const Notification = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}



const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#154a8f" />
      <Header name="Thông báo" />


      <View style={styles.body}>
        <Text style={styles.textrequest}>Bạn cần phải đăng nhập để nhận thông báo</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.btnLogin}>Đăng nhập</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textrequest: {
    fontSize: 16,
    marginBottom: 20,
  },
  btnLogin: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#154a8f',
    borderColor: '#000000',
    borderBottomWidth: 3,
    borderRightWidth: 3,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },

})