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
      <Button title="Go to Login Screen" onPress={() => navigateToLogin()} />
      <Button title="Go to OnboardMap1" onPress={() => navigateToOnboardMap1()} />
      <Button title="Go to OnboardMap2" onPress={() => navigateToOnboardMap2()} />
      <Button
        title="Go to Buttons Screen"
        onPress={() => navigateToButtons()}
      />
      <Button
        title="Go to Map1 Screen"
        onPress={() => navigateToMap1()}
      />
      <Button title="Go to Slider Screen" onPress={() => navigateToSlider()} />
      <Button title="Go to Logged Out" onPress={() => navigateToLoggedOut()} />
      <Button title="Go to Launch" onPress={() => navigateToLaunch()} />
    </Container>
  );
};
