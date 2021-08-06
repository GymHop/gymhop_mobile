import styled from 'styled-components/native';
import React, {useState, useRef} from 'react';
import {
  DefaultInput,
  PrimaryButton,
  Timer,
  CodeEnter,
  H2,
  H3,
  H1,
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
import OnboardingOneContainer from '../../OnboardingOneScreen/containers/OnboardingOneContainer';
import OnboardingMapScreen1Container from '../../OnboardingMapScreen1/containers/OnboardingMapScreen1Container';
import OnboardingMapScreen2Container from '../../OnboardingMapScreen2/containers/OnboardingMapScreen2Container';
import {useNavigation} from '@react-navigation/native';
import {Res} from '../../../../resources';

export const OnboardSliderView = () => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width, height} = Dimensions.get('window');
  const scrollViewRef = useRef(0);

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
          }}
          ref={node => (this.scroll = node)}>
          <View style={{width, height}}>
            <OnboardingOneContainer />
          </View>

          <View style={{width, height}}>
            <OnboardingMapScreen1Container />
          </View>

          <View style={{width, height}}>
            <OnboardingMapScreen2Container />
          </View>

          <ImageBackground
            style={{flex: 1, resizeMode: 'cover', width: null, height: null}}
            source={require('../../../../assets/images/OverheadOnboarding3.jpg')}>
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
          <TouchableOpacity
            onPress={() => {
              scrollViewRef.current += 1;
              this.scroll.scrollTo({x: width * scrollViewRef.current});
            }}
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
              source={require('../../../../assets/images/Rectangle3.png')}
            />
            <Image
              style={{
                position: 'absolute',
                width: 21.33,
                height: 21.33,
                top: 12.3,
                right: 12.3,
              }}
              source={require('../../../../assets/icons/arrow.png')}
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
