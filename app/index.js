import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

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
      }}/>
    </SafeAreaView>
  );
}
