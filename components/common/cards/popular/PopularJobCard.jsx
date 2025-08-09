import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { checkImageURL } from '../../../../utils';
import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <View style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: item.employer_logo && item.employer_logo !== null && item.employer_logo !== ""
              ? item.employer_logo
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiRex6jj6ikQceZCw2f9_uX5UCmcjUafRMEPP&s=0",
          }}
          resizeMode="contain"
          style={styles.logoImage}
          onError={(error) => {
            console.log('Popular job image failed to load for:', item.employer_name, 'URL:', item.employer_logo);
            // Fallback to default image on error
            error.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiRex6jj6ikQceZCw2f9_uX5UCmcjUafRMEPP&s=0";
          }}
        />
      </View>

      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <View style={styles.jobContainer}>
          <Text numberOfLines={1}>{item.job_title}</Text>
          <Text style={styles.location}>{item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
