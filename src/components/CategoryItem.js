import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
export default function CategoryItem({ name, imageUrl, active, handlePress }) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.container,
            active ? { backgroundColor: ("rgb(241,186,87)") } : { backgroundColor: "#FFF" }
            ]} >
                {/* <Button title='Click here!!! ' /> */}
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={imageUrl} />
                </View>
                <Text style={styles.textCate}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        width: 75,
        height: 80,
        borderRadius: 10,
        backgroundColor: "#FFF",
        marginVertical: 15,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textCate: {
        flex: 1,
        color: "#000",
        fontWeight: 'bold',
    },
    img: {
        width: 30,
        height: 30,
    },
    imgContainer: {
        marginTop: 5,
        width: 50,
        height: 50,
        backgroundColor: '#FFF',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: 5,
    },
})