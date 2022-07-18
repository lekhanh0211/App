import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderSearch from '../components/HeaderSearch'
import BannerSlider from '../components/BannerSlider'




const ShopScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderSearch />
      <BannerSlider />
    </View>
  )
}

export default ShopScreen

const styles = StyleSheet.create({

})