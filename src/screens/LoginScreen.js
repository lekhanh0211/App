import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Icons from 'react-native-vector-icons/FontAwesome';


const LoginScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false)

    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground style={styles.container} source={require('../assets/images/bgc2.webp')} resizeMode='cover' >
                    <StatusBar barStyle={'light-content'} />
                    <View style={styles.title}>
                        <Text style={styles.text}>    🅥🅔🅣🅣 🅢🅒🅗🅞🅞🅛</Text>
                    </View>
                    <View style={styles.input}>
                        <View style={styles.inputUser}>
                            <Text style={{ color: "#000000" }}>Tên đăng nhập</Text>
                            <View style={styles.inputText}>
                                <TextInput placeholder='Nhập số điện thoại' />
                                <Icons name="phone" color={'#369369'} size={25} />
                            </View>
                        </View>
                        <View style={styles.inputUser}>
                            <Text style={{ color: "#000000" }}>Mât khẩu</Text>
                            <View style={styles.inputText}>
                                <TextInput placeholder='Nhập mật khẩu'
                                    secureTextEntry={visible ? false : true}
                                />

                                <TouchableOpacity
                                    onPress={() => {
                                        setVisible(!visible)
                                    }}
                                >
                                    {visible ?
                                        < Icons name="eye-slash" color={'#369369'} size={25} /> :
                                        < Icons name="eye" color={'#369369'} size={25} />
                                    }
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity>
                                <Text style={{ color: "#369369", textAlign: 'right' }}>Quên mật khẩu ?</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.btnLogin} >
                            <Text style={styles.textLogin}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <Text style={{ color: "#000000", marginTop: 10 }}>
                            Bạn chưa có tài khoản?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{ fontWeight: 'bold', color: 'red' }}>Đăng ký ngay!</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 40,
        color: 'red',
        alignItems: 'center'
    },
    input: {
        flex: 2,
        marginHorizontal: 20,
    },
    inputUser: {
        marginVertical: 10,
    },
    inputText: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    button: {
        flex: 2,
        alignItems: 'center',
    },

    btnLogin: {
        backgroundColor: '#1fc250',
        width: '40%',
        borderRadius: 10,
        paddingVertical: 10
    },
    textLogin: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    regis: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})