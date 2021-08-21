/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components/native';
import { Button, View, Text, StyleSheet, Image } from 'react-native';

import OnboardSliderContainer from '../../OnboardingScreen/OnboardingSliderScreen/containers/OnboardSliderContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardingLoggedOutScreen } from '../../OnboardingScreen/OnboardingLoggedOutScreen';
import { AuthContext } from '../../../context/useAuth';


const Splash = () => {
  return (
    <View>
      <Image source={require('../../../assets/images/logos/logo_final1.png')} />
    </View>
  )
}



export const Launch = props => {
  const [loading, setLoading] = useState(true);
  const [firstLaunch, setFirstLaunch] = useState(null);
  const [priorToken, setPriorToken] = useState(false);
  const auth = useContext(AuthContext);

  let content;

  const storeLaunch = async () => {
    try {
      await AsyncStorage.setItem('priorLaunch', 'true');
    } catch (e) {
      console.log('***************', e);
    }
  };

  const detectPriorLaunch = async () => {
    try {
      console.log('DETECTING PRIOR LAUNCH')
      const hasLaunched = await AsyncStorage.getItem('priorLaunch');

      if (hasLaunched === null) {
        setFirstLaunch(true);
        storeLaunch();
      } else if (hasLaunched === 'true') {
        setFirstLaunch(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    detectPriorLaunch();
    console.log(auth.getToken());

  }, []);


  return (
    <>
      {loading ? <Splash /> : null}
      {firstLaunch ? <OnboardSliderContainer /> : <OnboardingLoggedOutScreen />}
    </>
  );
};


const styles = StyleSheet.create({
  tryFont: {
    fontFamily: "PlusJakartaSans-Bold",
  }
})