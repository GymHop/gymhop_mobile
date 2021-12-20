import styled from 'styled-components/native';
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import OnboardingOneContainer from '../../OnboardingOneScreen/containers/OnboardingOneContainer';
import OnboardingMapScreen1Container from '../../OnboardingMapScreen1/containers/OnboardingMapScreen1Container';
import OnboardingMapScreen2Container from '../../OnboardingMapScreen2/containers/OnboardingMapScreen2Container';
import {useNavigation} from '@react-navigation/native';
import {Res} from '../../../../resources';
import OnboardingThreeContainer from '../../OnboardingThreeScreen/containers/OnboardingThreeContainer';
import {OnboardingLoggedOutContainer} from '../../OnboardingLoggedOutScreen/containers/OnboardingLoggedOutContainer';
import Permissions, {
  check,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

export const OnboardSliderView = () => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width, height} = Dimensions.get('window');
  const scrollViewRef = useRef(0);
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / parseInt(width));

    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  const {currentPage: pageIndex} = sliderState;

  function navigateToLoggedOut() {
    navigation.navigate('onboardsignup');
  }

  useEffect(() => {
    checkitAND();
    checkitIOS();
  }, []);

  const checkitAND = () => {
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      .then(results => {
        switch (results) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.GRANTED:
            setChecked(true);
            console.log(checked);
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  };

  const checkitIOS = () => {
    check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      .then(results => {
        switch (results) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.GRANTED:
            setChecked(true);
            console.log(checked);
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView style={{flex: 1}}> */}
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

        {checked ? null : (
          <View style={{width, height}}>
            <OnboardingThreeContainer />
          </View>
        )}

        <View style={{width, height}}>
          <OnboardingLoggedOutContainer style={styles.wrapper}/>
        </View>
      </ScrollView>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(4).keys()).map((key, index) => (
          <View
            style={[
              styles.paginationDots,
              {backgroundColor: pageIndex === index ? 'white' : '#00C29E'},
              {display: pageIndex === 3 ? 'none' : 'flex'},
            ]}
            key={index}
          />
        ))}
        <TouchableOpacity
          onPress={() => {
            scrollViewRef.current += 1;
            this.scroll.scrollTo({x: width * scrollViewRef.current});
          }}
          style={[
            {position: 'absolute'},
            {width: 46},
            {height: 46},
            {right: 15},
            {display: scrollViewRef.current === 3 || pageIndex === 3 ? 'none' : 'flex'},
          ]}>
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
      {/* </SafeAreaView> */}
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
