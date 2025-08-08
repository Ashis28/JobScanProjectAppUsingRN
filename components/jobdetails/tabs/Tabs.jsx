import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'

function TabBtn({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityState={{ selected: name === activeTab }}
      accessibilityLabel={`Tab: ${name}${name === activeTab ? ', selected' : ''}`}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  )
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabBtn
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}

export default Tabs