import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import {Stack, useRouter} from 'expo-router';
import {COLORS , icons , images , SIZES} from '../constants';
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components';


export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}}>
      <Stack.Screen 
      options={{
        headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerLeft:(()=>
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="70%"/>
        ),
        headerRight: (()=>
        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>),
        headerTitle:"",
      }}/>

      <ScrollView showsVerticalScrollIndicator={false}
      style={{flex:1,padding:SIZES.medium}}>

        <Welcome></Welcome>

        <Popularjobs />
        <Nearbyjobs />

      </ScrollView>

      

    </SafeAreaView>
  );
}
