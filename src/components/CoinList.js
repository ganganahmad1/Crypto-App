import React from 'react'
import { View, FlatList } from 'react-native'
import CoinListItem from './CoinListItem'
import { heightComparedByReference as height } from '../utils/Responsive'

const CoinList = ({ coins }) => {
  return (
    <View>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinListItem coin={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: height(20) }}
      />
    </View>
  )
}

export default CoinList
