import styled from 'styled-components/native';
import React, { useState } from 'react';
import {
  DefaultInput,
  PrimaryButton,
  Timer,
  CodeEnter,
  H2,
  H3,
  H1,
} from '../../../components';
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
import { CheckinButton } from '../../../components/buttons/SecondaryButton'

export const Onboarding3 = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');

  const setSliderPage = event => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={event => {
            setSliderPage(event);
          }}>
          <View style={{ width, height }}>
            <ImageBackground
              style={{ flex: 1, resizeMode: 'cover', width: null, height: null }}
              source={require('../../../assets/images/Onboarding1Backgroundcopy.jpg')}>
              <View style={styles.wrapper}>
                <Text style={styles.header}>Welcome to</Text>
                <Image
                  style={styles.ghLogo}
                  source={require('../../../assets/images/logos/GHLogo.png')}
                />
                <Image
                  style={{
                    position: 'absolute',
                    width: 43,
                    height: 43,
                    left: 64,
                    top: 244,
                  }}
                  source={require('../../../assets/icons/mapMarkerStandard.png')}
                />
                <Image
                  style={{
                    position: 'absolute',
                    width: 70,
                    height: 70,
                    left: 107,
                    top: 287,
                  }}
                  source={require('../../../assets/icons/mapMarkerStandard.png')}
                />
                <Image
                  style={{
                    position: 'absolute',
                    width: 92,
                    height: 92,
                    left: 217,
                    top: 307,
                  }}
                  source={require('../../../assets/icons/mapMarkerStandard.png')}
                />
                <Image
                  style={{
                    position: 'absolute',
                    width: 47,
                    height: 47,
                    left: 278,
                    top: 244,
                  }}
                  source={require('../../../assets/icons/mapMarkerStandard.png')}
                />
                <Text style={styles.paragraph}>
                  Mobile access to all your favorite gyms
                </Text>
              </View>
            </ImageBackground>
          </View>
          <ImageBackground
            style={{ flex: 1, resizeMode: 'cover', width: null, height: null }}
            source={require('../../../assets/images/MapOnboardingStatic.jpg')}>
            <View style={{ width, height }}>
              <View style={styles.wrapper}>
                <Text style={styles.header}>Onboard map 1 screen</Text>
                <Text style={styles.paragraph}>stuff</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            style={{ flex: 1, resizeMode: 'cover', width: null, height: null }}
            source={require('../../../assets/images/MapOnboardingStatic.jpg')}>
            <View style={{ width, height }}>
              <View style={styles.wrapper}>
                <Text style={styles.header}>Onboard map 2 screen</Text>
                <Text style={styles.paragraph}>stuff</Text>
              </View>
            </View>
          </ImageBackground>















          <ImageBackground
            style={{ flex: 1, resizeMode: 'cover', width: null, height: null }}
            source={require('../../../assets/images/OverheadOnboarding3.jpg')}>

            <View style={{ width, height }}>
              <View style={styles.wrapper}>
                <Text style={{ paddingTop: 100, backgroundColor: 'blue' }}>
                  Let's see what gyms are close to you!
                </Text>
                <Image
                  source={require('../../../assets/icons/locationServices.png')}
                />
                <Text style={{ color: 'white' }}>
                  Location services are required to find gyms near you and
                  alllow for proximity-based check-ins.
                </Text>
                <View style={{ width: '100%' }} >

                  <PrimaryButton text={'Share Location'} uppercase />
                </View>



                {/* <View style={{ backgroundColor: 'white' }}>
                  <Text>Location Required</Text>
                  <Text>In order to get the best of your GymHop experience, location services are required to easily find and check-in to gyms. </Text>
                  <PrimaryButton text={'Share Location'} uppercase />
                </View> */}
              </View>
            </View>

          </ImageBackground>


          <View style={{ width, height }}>
            <View style={styles.wrapper}>
              <Text style={styles.header}>Onboarding_map</Text>
              <Text style={styles.paragraph}>... get started</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { backgroundColor: pageIndex === index ? 'white' : '#00C29E' },
              ]}
              key={index}
            />
          ))}
          <TouchableOpacity
            style={{
              position: 'absolute',

              width: 46,
              height: 46,
              right: 15,
            }}>
            <Image
              style={{
                width: 46,
                height: 46,
              }}
              source={require('../../../assets/images/Rectangle3.png')}
            />
            <Image
              style={{
                position: 'absolute',
                width: 21.33,
                height: 21.33,
                top: 12.3,
                right: 12.3,
              }}
              source={require('../../../assets/icons/arrow.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  ghLogo: {
    height: 62,
    width: 372,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 27,
    fontWeight: '500',
    marginTop: 47,
  },
  paragraph: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top: 500,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 13,
    width: 13,
    borderRadius: 13 / 2,
    marginLeft: 23,
  },
});
