import {OnboradingOneView} from '../../OnboardingOneScreen/components/OnboardingOneView';

import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../../../components';
import {PrimaryButtonTransparent} from '../../../../components/buttons';
import {LinearGradientOnboard} from '../../../../components/onboardingComponents/LinearGradientOnboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const OnboardingLoggedOutView = () => {
  const navigation = useNavigation();
  

  function navigateToLogin() {
    navigation.navigate('auth');
  }

  const getStarted = async () =>{
    await AsyncStorage.setItem('getStarted', 'passed');
    console.log('must be true1')
  }

  return (
    <>
      <ImageBackground
        style={{flex: 1, resizeMode: 'cover', width: null, height: null}}
        source={require('../../../../assets/images/onboard1backgroundwithpins.png')}>
        <View style={styles.wrapper}>
          <Text style={styles.header}>Welcome to</Text>
          <View style={{width: '100%', alignItems: 'center'}}>

          <Image
            style={styles.ghLogo}
            source={require('../../../../assets/images/logos/GHLogo.png')}
            />
            </View>
          <Text style={styles.paragraph}>
            Mobile access to all your favorite gyms
          </Text>
          <LinearGradientOnboard />
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            text={'GET STARTED'}
            onPress={() => {
              getStarted()
              navigateToLogin()}}
          />
          <View style={{padding: 10}}></View>
          <View style={{padding: 10}}></View>
          <Text style={styles.terms}>
            By signing up to GymHop you agree to our terms
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '95%',
    position: 'absolute',
    bottom: '5%',
  },
  terms: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  ghLogo: {
    height: 44,
    width: 340,
    marginTop: 25,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 27,
    fontWeight: '500',
    marginTop: 47,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  paragraph: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top: '57%',
    zIndex: 1,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});
