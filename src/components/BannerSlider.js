import { SafeAreaView, Text, Dimensions, View, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { WIDTH, HEIGHT } from '../utils/Dimensions'

const images = [
    'https://bizweb.dktcdn.net/100/081/322/articles/tuong-nu-than-tu-do-5.jpg?v=1604652066680',
    'http://icdn.dantri.com.vn/zoom/1200_630/2018/9/27/1-1538014956870633545249.jpg',
    'https://image.shutterstock.com/image-photo/view-eiffel-tower-river-seine-260nw-1517605952.jpg'
]

const BannerSlider = () => {
    const [imgActive, setimgActive] = useState(0);
    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}>
                    {
                        images.map((e, index) =>
                            <Image key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={{ uri: e }}
                            />
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                            <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot}>●
                            </Text>
                        )
                    }
                </View>
            </View>
        </View>
    )
}

export default BannerSlider

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    wrap: {
        width: WIDTH * 0.9,
        height: HEIGHT * 0.25,
        borderRadius: 15
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dotActive: {
        margin: 3,
        color: '#000000',
    },
    dot: {
        margin: 3,
        color: '#FFFFFF',
    },
})