import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getCoinList } from '../api/cryptoService'
import CoinList from '../components/CoinList'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  heightComparedByReference as height,
  widthComparedByReference as width,
} from '../utils/Responsive'
import Icon from 'react-native-vector-icons/Ionicons'

const HomeScreen = () => {
  const { top } = useSafeAreaInsets()

  const [coins, setCoins] = useState([])

  useEffect(() => {
    const fetchCoins = async () => {
      const data = await getCoinList()
      setCoins(data)
    }

    fetchCoins()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: '#2F318B' }}>
      <View
        style={{
          paddingTop: top,
          paddingBottom: height(25),
          height: height(220),
          backgroundColor: '#2F318B',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontSize: height(24) }}>
          Total Wallet Balance:
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: height(24),
            fontWeight: 'bold',
            marginBottom: height(10),
          }}
        >
          $1,350
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View>
            <View
              style={{
                height: height(50),
                aspectRatio: 1,
                backgroundColor: '#ffffff50',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: height(25),
              }}
            >
              <Icon name="arrow-up" size={height(20)} color="#fff" />
            </View>
            <Text
              style={{
                fontSize: height(14),
                color: '#fff',
                textAlign: 'center',
                marginTop: height(5),
              }}
            >
              Send
            </Text>
          </View>
          <View style={{ marginHorizontal: width(20) }}>
            <View
              style={{
                height: height(50),
                aspectRatio: 1,
                backgroundColor: '#ffffff50',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: height(25),
              }}
            >
              <Icon name="arrow-down" size={height(20)} color="#fff" />
            </View>
            <Text
              style={{
                fontSize: height(14),
                color: '#fff',
                textAlign: 'center',
                marginTop: height(5),
              }}
            >
              Receive
            </Text>
          </View>
          <View>
            <View
              style={{
                height: height(50),
                aspectRatio: 1,
                backgroundColor: '#ffffff50',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: height(25),
              }}
            >
              <Icon name="cart" size={height(20)} color="#fff" />
            </View>
            <Text
              style={{
                fontSize: height(14),
                color: '#fff',
                textAlign: 'center',
                marginTop: height(5),
              }}
            >
              Buy
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#E5E5E5',
          flex: 1,
          borderTopStartRadius: height(40),
          borderTopEndRadius: height(40),
        }}
      >
        <CoinList coins={coins} />
      </View>
      <View
        style={{
          backgroundColor: '#2F318B',
          height: height(80),
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Icon name="wallet" size={height(30)} color="#fff" />
          <Text
            style={{
              color: '#fff',
              fontSize: height(14),
              marginTop: height(5),
            }}
          >
            Wallet
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Icon name="stats-chart" size={height(30)} color="#ffffff90" />
          <Text
            style={{
              color: '#ffffff90',
              fontSize: height(14),
              marginTop: height(5),
            }}
          >
            Market
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Icon name="swap-horizontal" size={height(30)} color="#ffffff90" />
          <Text
            style={{
              color: '#ffffff90',
              fontSize: height(14),
              marginTop: height(5),
            }}
          >
            Swap
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Icon name="navigate-circle" size={height(30)} color="#ffffff90" />
          <Text
            style={{
              color: '#ffffff90',
              fontSize: height(14),
              marginTop: height(5),
            }}
          >
            Wallet
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Icon name="settings" size={height(30)} color="#ffffff90" />
          <Text
            style={{
              color: '#ffffff90',
              fontSize: height(14),
              marginTop: height(5),
            }}
          >
            Setup
          </Text>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen
