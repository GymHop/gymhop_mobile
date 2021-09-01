/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Button, View, Text } from 'react-native';
import { Res } from '../../../resources';
import { Measurements } from '../../../utils';
const StyledText = styled.Text``;
const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: ${Res.colors.main};
  padding-horizontal: ${Res.spaces.padding.md};
  padding-bottom: ${Measurements.safeAreaBottomInset};
`;

export const TempNavScreenView = props => {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate('auth');
  }

  function navigateToOnboardMap1() {
    navigation.navigate('onBoardingMap1');
  }

  function navigateToOnboardMap2() {
    navigation.navigate('onBoardingMap2');
  }

  function navigateToButtons() {
    navigation.navigate('buttons');
  }
  function navigateToSlider() {
    navigation.navigate('onboardslider');
  }
  function navigateToLoggedOut() {
    navigation.navigate('loggedOut');
  }

  function navigateToMap1() {
    navigation.navigate('map1');
  }
  function navigateToO3() {
    navigation.navigate('onboard3');
  }
  function navigateToLaunch() {
    navigation.navigate('launch');
  }


  return (
    <Container>
      <StyledText>{'TempNavScreen'}</StyledText>
      {/* <Button title="Go to Launch" onPress={() => navigateToLaunch()} /> */}
      <Button title="Go to Slider Screen" onPress={() => navigateToSlider()} />
      <Button title="Go to Logged Out" onPress={() => navigateToLoggedOut()} />
      <Button
        title="Go to Map Screen"
        onPress={() => navigateToMap1()}
      />
    </Container>
  );
};
