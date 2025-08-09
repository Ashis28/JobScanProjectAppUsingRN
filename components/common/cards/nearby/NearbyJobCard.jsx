import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({job, handleNavigate}) => {
  return (
      <TouchableOpacity style={styles.container} onPress={handleNavigate}>

      <TouchableOpacity style={styles.logoContainer}>
      <Image 
        source={{
          uri: job?.employer_logo && job?.employer_logo !== null && job?.employer_logo !== ""
            ? job?.employer_logo
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiRex6jj6ikQceZCw2f9_uX5UCmcjUafRMEPP&s=0"
        }}
        resizeMode='contain'
        style={styles.logoImage}
        onError={(error) => {
          console.log('Nearby job image failed to load for:', job?.employer_name, 'URL:', job?.employer_logo);
        }}
      />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{job?.job_title}</Text>
        <Text style={styles.jobType}> {job?.job_employment_type}</Text>
      </View>
      </TouchableOpacity>
    
  )
}

export default NearbyJobCard