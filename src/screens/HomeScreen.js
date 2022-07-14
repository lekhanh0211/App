import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icons from 'react-native-vector-icons/Feather'
import { WIDTH, HEIGHT } from '../utils/Dimensions'
import BannerSlider from '../components/BannerSlider'


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#154a8f" barStyle='light-content' />
        <View style={styles.header}>
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Hello,</Text>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>VETT EDU</Text>
          </View>
          <View style={styles.inputSearch} >
            <TextInput placeholder='Search' />
            <Icons color="#FFF" size={22} name='search' />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <Icons name="shopping-cart" color="#FFF" size={22} />
          </TouchableOpacity>
        </View>
        <BannerSlider />
        <View style={styles.category}>
          <Text>dákl</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#154a8f'
  },
  header: {
    width: WIDTH,
    backgroundColor: '#154a8f',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHead: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red'

  },
  inputSearch: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  category: {
    marginTop:10,
    height: HEIGHT,
    backgroundColor: '#FF369F',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

  }

})