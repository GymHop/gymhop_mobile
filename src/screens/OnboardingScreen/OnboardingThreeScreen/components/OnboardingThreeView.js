/* eslint-disable prettier/prettier */
import {Platform, PermissionsAndroid, Linking, AppState} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import styled from 'styled-components/native';
import React, {useState, useEffect, useRef} from 'react';
import {PrimaryButton} from '../../../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Res} from '../../../resources';


export const OnboardingThreeView = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        askLocation();
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  function navigateToLoggedOut() {
    AsyncStorage.getItem('getStarted').then(value => {
      if (value === 'passed') {
        navigation.navigate('auth');
      }else{
        navigation.navigate('onboardsignup');
      }
    });
    
  }

  
  const askLocation = async e => {
    console.log('asking location permission');
    if (Platform.OS === 'ios') {
      const iosGranted = await Geolocation.requestAuthorization('always');
      console.log(iosGranted);
      if (iosGranted === 'granted') {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
        navigateToLoggedOut();
      } else if (iosGranted === 'denied') {
        setShowModal(true);
      }
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('PERMISSION GRANTED');
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
        navigateToLoggedOut();
      } else {
        console.log('PERMISSION DENIED');
        setShowModal(true);
      }
    }
  };

  const askLocationAgain = async () => {
    console.log(AppState.currentState);
    if (Platform.OS === 'ios') {
      const iosGranted = await Geolocation.requestAuthorization('always');
      console.log(iosGranted);
      if (iosGranted === 'granted') {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
        navigateToLoggedOut();
      } else if (iosGranted === 'denied') {
        console.log('PERMISSION DENIED');
        await Linking.openSettings();
      }
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('PERMISSION GRANTED');
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
        navigateToLoggedOut();
      } else {
        console.log('PERMISSION DENIED');
        await Linking.openSettings();
      }
    }
  };

  return (
    <>
      <TouchableWithoutFeedback
      // onPressOut={() => setShowModal(true)}
      >
        <View
          onScroll={() => console.log('HALLEFOIAOIJFOI')}
          style={{flex: 1, resizeMode: 'cover', width: null, height: null}}>
          <ImageBackground
            style={{flex: 1, resizeMode: 'cover', width: null, height: null}}
            source={require('../../../../assets/images/OverheadOnboarding3.jpg')}>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
              }}>
              <View style={styles.blackModal}>
                <Text
                  style={{
                    fontFamily: 'PlusJakartaSans-Bold',
                    fontSize: 26,
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Let's see what gyms are close to you!
                </Text>
                <Image
                  style={{marginTop: 30, marginBottom: 20}}
                  source={require('../../../../assets/icons/locationServices.png')}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '500',
                    textAlign: 'center',
                    marginBottom: 25,
                  }}>
                  Location services are required to find gyms near you and allow
                  for proximity-based check-ins.
                </Text>
                <View style={{width: '100%'}}>
                  <PrimaryButton
                    onPress={askLocation}
                    text={'Share Location'}
                    uppercase
                    value={'BUTTON'}
                  />
                </View>
              </View>

              {showModal && (
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(41,41,41,.55)',
                    position: 'absolute',
                  }}>
                  <View style={styles.whiteModal}>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: '700',
                        textAlign: 'center',
                        fontFamily: 'PlusJakartaSans-Bold',
                      }}>
                      Location Required
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 16,
                        margin: 15,
                        fontFamily: 'PlusJakartaSans-Regular',
                        padding: 2,
                      }}>
                      In order to get the best of your GymHop experience,
                      location services are required to easily find and check-in
                      to gyms.
                    </Text>
                    <PrimaryButton
                      onPress={askLocationAgain}
                      text={'Share Location'}
                      uppercase
                    />
                  </View>
                </View>
              )}
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackModal: {
    backgroundColor: 'rgba(36, 36, 36, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 25,
    paddingBottom: 30,
    borderRadius: 10,
    top: '18%',
  },
  whiteModal: {
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 10,
    width: '90%',
    paddingTop: 20,
    paddingBottom: 23,
    paddingLeft: 15,
    paddingRight: 15,
    top: '35%',
    alignSelf: 'center',
  },
});
