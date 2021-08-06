import React, { useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Button, View, Text, ImageBackground, Image, Platform} from 'react-native';
import {Res} from '../../../../resources';
import {Measurements} from '../../../../utils';
import MapIMG from '../../../../assets/images/MapOnboardingStatic.jpg'
import {TierTile} from '../../../../components'
import {GymTile} from '../../../../components/onboardingComponents';
import {GymIcon} from '../../../../components/onboardingComponents';
import JimboImg from '../../../../assets/images/gymPhotos/JimbosInterior.jpg';
import Ellipse from '../../../../assets/icons/Ellipse.png'
import Polygon from '../../../../assets/icons/Polygon.png'
import { LinearGradientOnboard } from '../../../../components/onboardingComponents'
const StyledText = styled.Text``;
const Container = styled.KeyboardAvoidingView`
  flex: 1;
  /* background-color: ${Res.colors.main}; */
  padding-horizontal: ${Res.spaces.md}px;
  padding-bottom: ${Measurements.safeAreaBottomInset}px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
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
width: 80%; 
height: 100%;
top: 0px;
`;
const GymIconContainer = styled.View`
  top: 25px
`;

const GymTileContainer = styled.View`
  top: 15px
`;

const MapContainer = styled.View`
 width: 500px;
 height: 845px;
`;

export const OnboardingMapScreen1View = props => {
  const navigation = useNavigation();
  function navigateToMap2() {
  navigation.navigate('onBoardingMap2');
}
return (
  <MapContainer>
  <BackgroundImageStyle 
    source={MapIMG}>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TierTile 
          tier={'Standard Tier'}
          text={'A network of indendent walk-in-and-workout gyms.'}
          textContainerStyling={
            'display: flex; width: 223px; height: 42px;   align-items: center; justify-content: center; top: 15px'
          }
          tierTitleContainerStyling={'position: absolute; display: flex; width: 217px; height: 30px; left: 55px; top: 10px;'}
          containerHeight={123}  
          containerWidth={345}
          />
          <GymIconContainer>
            <GymIcon ellipse={Ellipse} polygon={Polygon} />
          </GymIconContainer>
          <GymTileContainer>
          <GymTile  
            image={JimboImg} 
            imageStyle={ 'bottom: 25; height: 125px; width: 245px;'}
            title={'Jimbos Gym'} 
            address={'213 Fitness Way, Brooklyn NY'}
            openClosed={'Open'}
            distance={'6.7mi away'}
            rating={'4.5'}/>
          </GymTileContainer>
      </Container>
      <LinearGradientOnboard />
  </BackgroundImageStyle>
  </MapContainer>

 
  


)
}