import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({jobs, handleNavigate}) => {
  return (
      <TouchableOpacity style={styles.container} onPress={handleNavigate}>

      <TouchableOpacity style={styles.logoContainer}>
      <Image 
        source={{uri:jobs?.employer_logo}}
        resizeMode='contain'
        style={styles.logoImage}/>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{jobs?.job_title}</Text>
        <Text style={styles.jobType}> {jobs?.job_employment_name}</Text>
      </View>
      </TouchableOpacity>
    
  )
}

export default NearbyJobCard