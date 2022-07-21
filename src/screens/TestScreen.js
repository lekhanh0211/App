import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import dummyData from '../model/DataTest'
import Carousel from '../components/Carousel'
const TestScreen = () => {
    return (
        <View>
            <Carousel data={dummyData} />
        </View>
    )
}

export default TestScreen

const styles = StyleSheet.create({})