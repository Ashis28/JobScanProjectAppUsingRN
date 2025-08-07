
import { View, Text ,TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearbt/NearbyJobCard'
import { isLoading } from 'expo-font'
import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {

  const route = useRouter();
  
  // Yes, this is correct if your useFetch hook expects the first argument as an endpoint (e.g., 'search')
  // and the second argument as an object with query parameters.
  const { data, isLoading, error } = useFetch('search', {
    query: 'react-developer',
    page: '1',
    num_pages: '1',
    country: 'us',
    date_posted: 'all'
  });

  //console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.headerTitle}>NearbyJobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobsCard item={item} />
            )}
            keyExtractor={item => item?.job_id?.toString() || item.toString()}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
      </View>
  )
}

export default Nearbyjobs