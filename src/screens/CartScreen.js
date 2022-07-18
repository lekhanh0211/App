import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Icons from 'react-native-vector-icons/FontAwesome'

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Header name="Giỏ hàng" />
            <View style={styles.container}>
                <View style={styles.headCart}>
                    <View style={styles.title}>
                        <Icons name="book" color="" size={22} />
                        <Text style={styles.text}>Sản phẩm đã chọn</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{ color: "red" }}>Xóa tất cả</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.product}>
                        <View style={styles.productName}>
                            <Text style={{ color: '#000', fontSize: 16, }}> Tên Sản phẩm</Text>
                            <Text style={{ color: '#154a8f', fontSize: 16, fontWeight: 'bold' }}>698000 đ </Text>
                        </View>
                        <View style={styles.quantity}>
                            <TouchableOpacity>
                                <Icons style={styles.icons} name="minus" size={20} color="#FFF" />
                            </TouchableOpacity>
                            <Text style={{ color: '#000', fontSize: 18 }}>1</Text>
                            <TouchableOpacity>
                                <Icons style={styles.icons} name="plus" size={20} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footCart}>
                    <View style={styles.totalPrice}>
                        <Text style={styles.text}>Tổng tạm tính</Text>
                        <Text style={styles.textPrice}>0 đ</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textbtn}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    headCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignItems: 'center'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    textPrice: {
        color: '#154a8f',
        fontWeight: 'bold',
        fontSize: 18,
    },
    footCart: {
        flexDirection: 'column',
    },
    totalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    btn: {
        borderRadius: 10,
        backgroundColor: "#154a8f",
        padding: 12,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textbtn: {
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase',

    },
    product: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    productName: {
    },
    quantity: {
        flexDirection: 'row',
    },
    icons: {
        marginHorizontal: 5,
        width: 25,
        height: 25,
        backgroundColor: '#154a8f',
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center'
        // justifyContent: 'center',
        // alignItems: 'center'
    }
})