
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {
  const router = useRouter();

  // Fetch jobs data
  const { data, isLoading, error } = useFetch('search', {
    query: 'react-developer',
    page: '1',
    num_pages: '1',
    country: 'us',
    date_posted: 'all'
  });

  // The error is that NearbyJobCard expects a prop named "jobs", but here we are passing "job".
  // In NearbyJobCard.jsx: const NearbyJobCard = ({jobs, handleNavigate}) => { ... }
  // So, we should pass "jobs={job}" instead of "job={job}"

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
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              jobs={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs