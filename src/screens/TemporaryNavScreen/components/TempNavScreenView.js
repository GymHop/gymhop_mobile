/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Button, View, Text } from 'react-native';
import { Res } from '../../../resources';
import { Measurements } from '../../../utils';
import { TestingContext } from '../../../context/useTesting';
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

  const test = useContext(TestingContext);
  const tierHandler = async (tier) => {
    if(tier === 'standard'){
      await test.standardTier()
      await test.storeTier()
      console.log("Tier Standard Activated")
    }
    if(tier === 'premium'){
      await test.premiumTier()
      await test.storeTier()
      console.log("Tier Premium Activated")
    }
    if(tier === null){
      await test.removeTier()
      console.log("Tier Removed")
    }
  }
  function navigateToLogin() {
    navigation.navigate('auth');
  }

  function navigateToOnboardMap1() {
    navigation.navigate('onBoardingMap1');
  }

  function navigateToOnboardMap2() {
    navigation.navigate('onBoardingMap2');
  }


  function navigateToCHeckInMain() {
    navigation.navigate('CheckInMain');
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
  function navigateToUserProfile() {
    navigation.navigate('userProfile');
  }
  function navigateToLaunch() {
    navigation.navigate('launch');
  }


  return (
    <Container>
      <StyledText>{'TempNavScreen'}</StyledText>
      <Button
        title="Set Standard Tier"
        onPress={() => tierHandler('standard')}
      />
      <Button
        title="Set Premium Tier"
        onPress={() => tierHandler('premium')}
      />
      <Button
        title="Remove Tier"
        onPress={() => tierHandler(null)}
      />
       <Button
        title="Navigate to checkin main"
        onPress={() => navigateToCHeckInMain()}
      />
      {/* <Button title="Go to Launch" onPress={() => navigateToLaunch()} /> */}
      <Button title="Go to Slider Screen" onPress={() => navigateToSlider()} />
      <Button title="Go to Logged Out" onPress={() => navigateToLoggedOut()} />
      <Button
        title="Go to Map Screen"
        onPress={() => navigateToMap1()}
      />
      <Button
        title="Go to User Profile Screen"
        onPress={() => navigateToUserProfile()}
      />
      
    </Container>
  );
};
