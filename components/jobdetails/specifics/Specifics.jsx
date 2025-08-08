import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = ({title,points}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default Specifics