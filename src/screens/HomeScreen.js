import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { WIDTH, HEIGHT } from '../utils/Dimensions'
import BannerSlider from '../components/BannerSlider'
import { FlatList } from 'react-native-gesture-handler'
import CategoryItem from '../components/CategoryItem'
import HeaderSearch from '../components/HeaderSearch'
import COLORS from '../common/colors'

const dataCate = [
  {
    id: 1,
    name: "Sach giáo khoa",
    imageUrl: require("../assets/img/Activity.png")
  },
  {
    id: 2,
    name: "Sách tham khảo",
    imageUrl: require("../assets/img/BookCategories.png")
  },
  {
    id: 3,
    name: "Sách thiếu nhi",
    imageUrl: require("../assets/img/Children.png")
  },
  {
    id: 4,
    name: "Sách văn học",
    imageUrl: require("../assets/img/TamLy.png")
  },
  {
    id: 5,
    name: "Kiến thức - khoa học",
    imageUrl: require("../assets/img/Test.png")
  },
  {
    id: 6,
    name: "Đời sống - Tâm lý",
    imageUrl: require("../assets/img/VanHoc.png")
  },
  {
    id: 7,
    name: "Sách giáo viên",
    imageUrl: require("../assets/img/BookCategories.png")
  },
  {
    id: 8,
    name: "Sách ngoại ngữ",
    imageUrl: require("../assets/img/BookCategories.png")
  },
  {
    id: 9,
    name: "Sách kinh tế",
    imageUrl: require("../assets/img/BookCategories.png")
  },
  {
    id: 10,
    name: "Sách chính trị",
    imageUrl: require("../assets/img/BookCategories.png")
  }
]



const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("Sách văn học")

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
      <HeaderSearch />

      <ScrollView>
        <BannerSlider />
        <StatusBar backgroundColor={COLORS.color} barStyle='light-content' />

        <View style={styles.catContainer}>
          <FlatList style={styles.category}
            data={dataCate}
            horizontal
            renderItem={renderItem}
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
    backgroundColor: "#FFF"
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