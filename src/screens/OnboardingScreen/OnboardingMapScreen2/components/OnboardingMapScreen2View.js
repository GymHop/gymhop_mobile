import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Button, View, Text, ImageBackground, Platform} from 'react-native';
import {Res} from '../../../../resources';
import {Measurements} from '../../../../utils';
import MapIMG from '../../../../assets/images/MapOnboardingStatic.jpg'
import {TierTile} from '../../../../components'
import PremiumBadge from '../../../../assets/icons/premiumBadge.png'
import {GymTile} from '../../../../components/onboardingComponents';
import {GymIcon} from '../../../../components/onboardingComponents';
import PlanetLiftImg from '../../../../assets/images/gymPhotos/planetlift.png';
import PremEllipse from '../../../../assets/icons/premellipse.png'
import PremPolygon from '../../../../assets/icons/prempolygon.png'
import { LinearGradientOnboard } from '../../../../components/onboardingComponents'

const StyledText = styled.Text``;
const Container = styled.KeyboardAvoidingView`
  flex: 1;
  /* background-color: ${Res.colors.main}; */
  padding-horizontal: ${Res.spaces.md}px;
  padding-bottom: ${Measurements.safeAreaBottomInset}px;
  display: flex;
  z-index: 3;
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
width: null; 
height: null;
`;

const GymIconContainer = styled.View`
  top: 300px;
  left: 115px;
`;

const GymTileContainer = styled.View`
  top: 280px;
  left: 50px;
`;

export const OnboardingMapScreen2View = props => {
return (
  <BackgroundImageStyle 
    source={MapIMG}>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TierTile 
          tier={"Premium Tier"}
          text={"Premium facilities with luxury amenities + access to all Standard Tier gyms"}
          textContainerStyling={
            'display: flex; width: 319px; height: 42px;   align-items: center; justify-content: center; top: 5px'
          }
          tierTileStyling={"right: 60; bottom: 7"}
          tierTitleContainerStyling={"display: flex; flexDirection: row; width: 217px; height: 30px; left: 55px; top: 10px;"}
          containerHeight={152}  
          containerWidth={344}
          PremiumBadge={PremiumBadge}
          />
          <GymIconContainer>
            <GymIcon ellipse={PremEllipse} polygon={PremPolygon} />
          </GymIconContainer>
          <GymTileContainer>
            <GymTile  
              image={PlanetLiftImg} 
              PremiumBadge={PremiumBadge}
              imageStyle={'bottom: 66px; width: 245px;'}
              title={'Planet Lift'} 
              address={'142 Western Ave, Brooklyn NY'}
              openClosed={'Open'}
              distance={'7.2mi away'}
              rating={'4.5'}/>
          </GymTileContainer>
      </Container>
      <LinearGradientOnboard />
  </BackgroundImageStyle>

 
  


)
}