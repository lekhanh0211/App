import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { WIDTH, HEIGHT } from '../utils/Dimensions'
import BannerSlider from '../components/BannerSlider'
import HeaderSearch from '../components/HeaderSearch'
import { FlatList } from 'react-native-gesture-handler'
import CategoryItem from '../components/CategoryItem'

const dataCate = [
  {
    id: 1,
    name: "Burger",
    imageUrl: require("../assets/img/Activity.png")
  },
  {
    id: 2,
    name: "Cake",
    imageUrl: require("../assets/img/BookCategories.png")
  },
  {
    id: 3,
    name: "Pasta",
    imageUrl: require("../assets/img/Children.png")
  },
  {
    id: 4,
    name: "Smoothies",
    imageUrl: require("../assets/img/TamLy.png")
  },
  {
    id: 5,
    name: "Steak",
    imageUrl: require("../assets/img/Test.png")
  },
  {
    id: 6,
    name: "Pizza",
    imageUrl: require("../assets/img/VanHoc.png")
  }
]

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("Burger")

  const renderItem = ({ item, index }) => {
    return <CategoryItem
      name={item.name}
      imageUrl={item.imageUrl}
      active={item.name === term}
      handlePress={() => setTerm(item.name)}
    />
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#154a8f" barStyle='light-content' />
        <HeaderSearch />
        <BannerSlider />
        <View style={styles.catContainer}>
          <FlatList style={styles.category}
            data={dataCate}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false} //ẩn thanh trượt ngang
            keyExtractor={(category) => category.name}
          />
         
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
  catContainer: {
    flex: 1,
    backgroundColor: '#FFF',

  }
  ,
  category: {
    marginTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginHorizontal: 20
  },

})