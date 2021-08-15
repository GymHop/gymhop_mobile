/* eslint-disable prettier/prettier */
import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import styled from 'styled-components/native';
import React, { useState, useEffect } from 'react';
import {
  PrimaryButton,
} from '../../../../components';
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
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Res } from '../../../resources';


export const OnboardingThreeView = () => {

  const [showModal, setShowModal] = useState(false);

  // if user clicks RIGHT ARROW BUTTON -OR- 
  // if user swipes to next
  // setShowModal(true)


  // IF user has granted permissions, go to next onboarding screen

  useEffect(() => {
    Geolocation.getCurrentPosition((position) => {
      console.log(position);
    },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 })

  }, [])





  const askLocation = async (e) => {
    console.log('AHHHHHHHHHHHHHHHHH')
    if (Platform.OS === 'ios') {
      console.log('ios');
      const iosGranted = await Geolocation.requestAuthorization('always');
      console.log(iosGranted);
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('PERMISSION GRANTED');
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        console.log('PERMISSION DENIED');
      }
    }
  };



  return (
    <>
      <ImageBackground
        style={{ flex: 1, resizeMode: 'cover', width: null, height: null }}
        source={require('../../../../assets/images/OverheadOnboarding3.jpg')}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
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
            <Image style={{ marginTop: 30, marginBottom: 20 }}
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
            <View style={{ width: '100%' }} >
              <PrimaryButton
                onPress={askLocation}
                text={'Share Location'}
                uppercase
              />
            </View>
          </View>

          {showModal && (
            <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(41,41,41,.55)', position: 'absolute' }}>
              <View style={styles.whiteModal}>
                <Text style={{ fontSize: 24, fontWeight: '700', textAlign: 'center', fontFamily: 'PlusJakartaSans-Bold', }}>Location Required</Text>
                <Text style={{ textAlign: 'center', fontSize: 16, margin: 15, fontFamily: 'PlusJakartaSans-Regular', padding: 2 }}>
                  In order to get the best of your GymHop experience, location
                  services are required to easily find and check-in to gyms.
                </Text>
                <PrimaryButton text={'Share Location'} uppercase />
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
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
    top: '47%',
    alignSelf: 'center'



  }
});
