import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Button, View, Text, ImageBackground, Platform} from 'react-native';
import {Res} from '../../../../resources';
import {Measurements} from '../../../../utils';
import MapIMG from '../../../../assets/images/MapOnboardingStatic.jpg'
import {TierTile} from '../../../../components'

const StyledText = styled.Text``;
const Container = styled.KeyboardAvoidingView`
  flex: 1;
  /* background-color: ${Res.colors.main}; */
  padding-horizontal: ${Res.spaces.md}px;
  padding-bottom: ${Measurements.safeAreaBottomInset}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Wrap = styled.View`
  flex: 1;
  padding-top: ${Res.spaces.md}px;
  justify-content: space-between;
  padding-bottom: 50px;
`;

const PhoneInputContainer = styled.View`
  flex-direction: column;
`;

const BackgroundImageStyle = styled.ImageBackground`
flex: 1; 
width: 400px; 
height: null;
`;

export const OnboardingMapScreen1View = props => {
return (
  <BackgroundImageStyle 
    source={MapIMG}>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TierTile tier={"Standard Tier"} text={"A network of indendent walk-in-andworkout gyms."}/>
      </Container>
  </BackgroundImageStyle>

 
  


)
}