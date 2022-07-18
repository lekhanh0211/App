import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Feather';
import { WIDTH } from '../utils/Dimensions';
import CartScreen from '../screens/CartScreen'
import SearchScreen from '../screens/SearchScreen'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const HeaderS = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HeaderSearch" component={HeaderSearch} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    )
}

const HeaderSearch = ({ navigation }) => {
    return (
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
    )
}





export default HeaderS

const styles = StyleSheet.create({
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
})