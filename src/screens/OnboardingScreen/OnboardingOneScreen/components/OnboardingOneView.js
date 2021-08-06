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
} from '../../../components';
import {LinearGradientOnboard} from '../../../../components/onboardingComponents/LinearGradientOnboard';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';

export const OnboradingOneView = () => {
  return (
    <ImageBackground
      style={{flex: 1, resizeMode: 'cover', width: null, height: null}}
      source={require('../../../../assets/images/onboard1backgroundwithpins.png')}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>Welcome to</Text>
        <Image
          style={styles.ghLogo}
          source={require('../../../../assets/images/logos/GHLogo.png')}
        />
        <Text style={styles.paragraph}>
          Mobile access to all your favorite gyms
        </Text>
        <LinearGradientOnboard />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ghLogo: {
    height: 62,
    width: 372,
  },
  wrapper: {
    flex: 1,
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
    zIndex: 1,
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
