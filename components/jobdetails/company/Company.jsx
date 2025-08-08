import React from 'react'
import { View, Text , Image} from 'react-native'
import { icons } from '../../../constants'
import styles from './company.style'

const Company = ({companyLogo,jobTitle,companyName,location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={styles.logoImage}
          src={companyLogo}
          resizeMode="auto"
          resizeMultiplier={4.0}
          accessibilityLabel="Company Logo"
        />
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company