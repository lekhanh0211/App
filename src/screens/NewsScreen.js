import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View, FlatList, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

const BackgroundImage = "https://img.lovepik.com/background/20211101/medium/lovepik-cool-technology-background-mobile-phone-wallpaper-image_400502897.jpg";

const HEIGHT_IMG = 100;
const ITEM_PADDING = 10;
const ITEM_MARGIN_TOP = 20;
const ITEM_SIZE = HEIGHT_IMG + ITEM_PADDING * 2 + ITEM_MARGIN_TOP;

const NewsScreen = () => {
  // const ScrollY = React.useRef(new Animated.Value(0)).current;

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);


  useEffect(() => {
    getListNews(); // tên request
    return () => {
    }
  }, [])

  getListNews = () => {
    const urlApi = "https://jsonplaceholder.typicode.com/photos";
    fetch(urlApi)
      .then((res) => res.json())
      .then((resJson) => { // request API
        setData(resJson)
      }).catch((error) => {
        console.log("Request API error", error);
      }).finally(() => setIsloading(false))
  }
  const renderItem = ({ item, index }) => {

    // const scale = ScrollY.interpolate({
    //   inputRange: [
    //     -1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)
    //   ],
    //   outputRange: [
    //     1, 1, 1, 0
    //   ]
    // })

    return (
      <View >
        {/* <Animated.TouchableOpacity style={[
          {
            transform: [{ scale }] 
          }
          styles.item,
        ]}> */}
        <Animated.TouchableOpacity style={styles.item}>
          <Image
            style={styles.image}
            source={{ uri: item.url }}
            resizeMode='contain'
          />
          <View style={styles.wrapText}>
            <Text style={styles.fontSize} >{index + '. ' + item.title}</Text>
            <Text style={styles.fontTime} >15:10, 15/07/2022</Text>
          </View>
        </Animated.TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>


      <Image // set bgc cho nền
        source={{ uri: BackgroundImage }}
        style={StyleSheet.absoluteFill}
        blurRadius={10}
      />


      <Header name="Tin tức" />
      {
        isLoading ? <ActivityIndicator /> : (
          <Animated.FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => `key-${item.id}`}

          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffSet: { y: ScrollY } } }],
          //   { useNativeDriver: true }
          // )}
          />
        )
      }
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    marginTop: ITEM_MARGIN_TOP,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: "#FFF",
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 10,
    shadowRadius: 20,
    padding: ITEM_PADDING
  },
  image: {
    width: 100,
    height: HEIGHT_IMG,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,

  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 10
  },
  fontSize: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1

  },
  fontTime: {
    fontSize: 12,
    fontStyle: 'italic',
  }
})