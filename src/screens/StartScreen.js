import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../common/colors'
import { PrimaryButton } from '../components/Button'

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: 400 }}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            top: -250
          }}
          source={require('../assets/images/battlefield-2042.webp')}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>

        <PrimaryButton
          onPress={() => navigation.navigate("Home")}
          title="Get's Started"
        />
      </View>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
})