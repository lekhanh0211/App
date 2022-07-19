import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Header = ({ name }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>{name}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 56,
        width: '100%',
        backgroundColor: '#154a8f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
})