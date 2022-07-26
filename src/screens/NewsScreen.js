import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import news from '../api/news';
import IMAGES from '../common/images'
const BackgroundImage = "https://img.lovepik.com/background/20211101/medium/lovepik-cool-technology-background-mobile-phone-wallpaper-image_400502897.jpg";



const NewsScreen = () => {


  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  // const request = news.get('/api/bantin/list?sSearch=&index=1&size=10', { sSearch }, { index }, { size }).then((result) => {
  //   setData(result.data);
  // })

  useEffect(() => {
    getListNews(); // tên request
    return () => {
    }
  }, [])

  const getListNews = () => {
    const urlApi = "http://apinewbook.vtechedu.vn/api/bantin/list?sSearch=&index=1&size=10"; //đường dẫn API
    // const urlApi = "http://apinewbook.vtechedu.vn/api/banner"; //đường dẫn API


    fetch(urlApi)
      .then((res) => res.json())
      .then((resJson) => { // request API
        setData(JSON.stringify(resJson))

      }).catch((error) => {
        console.log("Request API error", error);
      }).finally(() => setIsloading(false))
  }



  const render = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image
          style={styles.image}
          source={{ uri: IMAGES.URLIMG + item.UrlHinhAnh }}
          resizeMode='contain'
        />
        <View style={styles.wrapText}>
          <Text style={styles.fontSize} >{index + '. ' + item.TomTat}</Text>
          <Text style={styles.fontTime} >{item.NguoiDang}</Text>
          <Text style={styles.fontTime} >{item.NgayDang}</Text>
        </View>
      </TouchableOpacity >
    )
  }

  return (
    <View style={styles.container}>
      <Image // set bgc
        source={{ uri: BackgroundImage }}
        style={StyleSheet.absoluteFill}
        blurRadius={10}
      />
      <Header name="Tin tức" />

      {
        isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            renderItem={render}
            keyExtractor={item => `key-${item.url}`}
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
    marginTop: 20,
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
    padding: 10
  },
  image: {
    width: 100,
    height: 100,
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

