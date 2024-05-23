import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {
  heightComparedByReference as height,
  widthComparedByReference as width,
} from '../utils/Responsive'

const CoinListItem = ({ coin }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: coin.image }} style={styles.icon} />
      <View style={{ flex: 1 }}>
        <Text style={styles.textBold}>{coin.name}</Text>
        <Text style={styles.textRegular}>
          {coin.symbol.toUpperCase()}
          {'  '}
          <Text
            style={{
              color: coin.price_change_percentage_24h > 0 ? 'green' : 'red',
            }}
          >
            {coin.price_change_percentage_24h > 0 && '+'}
            {coin.price_change_percentage_24h.toFixed(2)}%
          </Text>
        </Text>
      </View>

      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.textBold}>
          ${coin.current_price.toLocaleString()}
        </Text>
        <Text style={styles.textRegular}>
          {coin.market_cap.toLocaleString()}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: height(15),
    paddingHorizontal: width(15),
    marginHorizontal: width(30),
    marginVertical: height(7),
    alignItems: 'center',
    borderRadius: height(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: height(2),
    },
    shadowOpacity: height(0.25),
    shadowRadius: height(3.84),
    elevation: 5,
  },
  icon: {
    height: height(50),
    aspectRatio: 1,
    marginRight: width(15),
  },
  textBold: {
    fontSize: height(18),
    fontWeight: 'bold',
  },
  textRegular: {
    fontSize: height(14),
    color: '#666',
  },
})

export default CoinListItem
