import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderSearch from '../components/HeaderSearch'

const ShopScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderSearch />
      
    </View>
  )
}

export default ShopScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})