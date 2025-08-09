import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const tabs = ['About','Qualification','Responsibilities']

const JobDetails = ()=>{
    const router = useRouter();
    const [refreshing,setRefreshing] = useState(false);
    const [activeTab,setActiveTab] = useState(tabs[0]);
    //const params = useSearchParams();

    const { data, isLoading, error, refetch } = useFetch("job-details", {
        job_id: 'n20AgUu1KG0BGjzoAAAAAA=='
      });

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);
    
    return(
       <SafeAreaView>
         <Text>JobDetails</Text>
         <Stack.Screen options = {{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerBackVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn 
                    iconUrl={icons.left}
                    dimension="70%"
                    handlePress={()=>router.back()}/>
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn 
                    iconUrl={icons.share}
                    dimension="70%"
                    />
                ),
                headerTitle:""
            }}>
         </Stack.Screen>

         <ScrollView showsVerticalScrollIndicator={false} 
         refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                <JobAbout></JobAbout>
            
            {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) :(
                <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                    <Company 
                    companyLogo={data[0].employer_logo}
                    jobTitle={data[0].job_title}
                    companyName={data[0].employer_name}
                    location={data[0].job_country}
                    />
                    <JobTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
                        

                    </JobTabs>
                   {/* <JobAbout info={data[0].job_description}/> */} 
                   <Specifics title={'Qualifications'} points={data[0]?.job_highlights?.Qualificaations}/>
                </View>
          )}
         </ScrollView>
       </SafeAreaView>
    )
}

export default JobDetails;