import styled from 'styled-components/native';
import React, {useState} from 'react';
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
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Res} from '../../../resources';

export const OnboardSliderView = () => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width, height} = Dimensions.get('window');

  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage: pageIndex} = sliderState;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={{flex: 1}}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={event => {
            setSliderPage(event);
          }}>
          <View style={{width, height}}>
            <View style={styles.wrapper}>
              <Text style={styles.header}>Welcome to</Text>
              <Text style={styles.paragraph}>....something like that</Text>
            </View>
          </View>
          <ImageBackground
            style={{flex: 1, resizeMode: 'cover', width: null, height: null}}
            source={require('../../../assets/images/MapOnboardingStatic.jpg')}>
            <View style={{width, height}}>
              <View style={styles.wrapper}>
                <Text style={styles.header}>Onboard map 1 screen</Text>
                <Text style={styles.paragraph}>stuff</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            style={{flex: 1, resizeMode: 'cover', width: null, height: null}}
            source={require('../../../assets/images/MapOnboardingStatic.jpg')}>
            <View style={{width, height}}>
              <View style={styles.wrapper}>
                <Text style={styles.header}>Onboard map 2 screen</Text>
                <Text style={styles.paragraph}>stuff</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            style={{flex: 1, resizeMode: 'cover', width: null, height: null}}
            source={require('../../../assets/images/OverheadOnboarding3.jpg')}>
            <View style={{width, height}}>
              <View style={styles.wrapper}>
                <Text style={styles.header}>Onboarding3</Text>
                <Text style={styles.paragraph}>... let's see what gyms</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={{width, height}}>
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
                {backgroundColor: pageIndex === index ? 'white' : '#00C29E'},
              ]}
              key={index}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    marginLeft: 10,
  },
});
