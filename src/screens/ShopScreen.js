import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList, TouchableHighlight, Dimensions } from 'react-native'
import React, { useState } from 'react'
import HeaderSearch from '../components/HeaderSearch'
import BannerSlider from '../components/BannerSlider'
import COLORS from '../common/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import books from '../model/books'
import Icons from 'react-native-vector-icons/Feather';
import categories from '../model/Categories'

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const ShopScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        numColumns={5}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...styles.categoryBtn,
              }}>
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.imageUrl}
                  style={{ height: 35, width: 35, resizeMode: 'cover' }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.color,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({ book }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Detail', book)}>
        <View style={styles.card}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image source={book.image} style={{ height: 120, width: 120 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{book.name}</Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {book.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              ${book.price}
            </Text>
            <View style={styles.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };


  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>

      <View style={styles.header}>
        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Hello,</Text>
          <Text style={{ color: 'red', fontWeight: 'bold' }}>VETT EDU</Text>
        </View>
        <View style={styles.inputSearch} >
          <TextInput placeholder='Search' />
          <Icons color="#FFF" size={22} name='search' />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Icons name="shopping-cart" color="#FFF" size={22} />
        </TouchableOpacity>
      </View>

      {/* <HeaderSearch /> */}
      <BannerSlider />
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={books}
        renderItem={({ item }) => <Card book={item} />}
      />

    </View>
  )
}

export default ShopScreen

const styles = StyleSheet.create({
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 60,
    width: 120,
    marginRight: 7,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.color,
    justifyContent: 'center',
    alignItems: 'center',
  },


  header: {
    width: "100%",
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
})