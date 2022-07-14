import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Icons from "react-native-vector-icons/Feather";



const AccountScreen = () => {
  const AccountData = [
    { id: 1, text: 'Đăng nhập vào VETT' },
    { id: 2, icon: "shopping-bag", text: 'Lịch sử mua hàng', seeName: "Xem thêm" },
    { id: 3, icon: "phone", text: 'Liên hệ', seeName: "Xem thêm" },
    { id: 4, icon: "codesandbox", text: 'Hỗ trợ', seeName: "Xem thêm" }
  ]
  const [data, setData] = useState(AccountData);
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity style={styles.item}>
          <View style={styles.title}>
            <Icons name={item.icon} color="color" size={22} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
          <View style={styles.seemore}>
            <Text style={styles.textSee}>{item.seeName}</Text>
            <Icons name="chevron-right" color="color" size={22} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Header name="Thành viên VEtt" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfccc6'
  },

  item: {
    backgroundColor: '#FFF',
    borderBottomWidth: 4,
    borderBottomColor: '#cfccc6',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20

  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20

  },
  text: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 10
  },
  seemore: {
    flexDirection: 'row',
  },
  textSee: {
    fontSize: 16,
    paddingRight: 10
  }
})