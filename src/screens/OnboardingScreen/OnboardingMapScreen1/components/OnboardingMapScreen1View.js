import React from 'react';
import styled from 'styled-components/native';
import {Platform } from 'react-native';
import { Res } from '../../../../resources';
import { Measurements } from '../../../../utils';
import MapIMG from '../../../../assets/images/MapOnboardingStatic.jpg'
import { TierTile } from '../../../../components'
import { GymTile } from '../../../../components/onboardingComponents';
import { GymIcon } from '../../../../components/onboardingComponents';
import { LinearGradientOnboard } from '../../../../components/onboardingComponents'

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding-horizontal: ${Res.spaces.md}px;
  padding-bottom: ${Measurements.safeAreaBottomInset}px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
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
            <GymIcon
              tier={'standard'}
              logo_url={'https://res.cloudinary.com/gymhop/image/upload/v1628618553/Gym%20Photos/GymIcon_x3jowf.jpg'} />
          </GymIconContainer>
          <GymTileContainer>
            <GymTile
              main_photo_url={'https://res.cloudinary.com/gymhop/image/upload/v1628618078/Gym%20Photos/JimbosInterior_fs6ozm.jpg'}
              tier={'standard'}
              imageStyle={'bottom: 25; height: 125px; width: 245px;'}
              name={'Jimbos Gym'}
              address1={'213 Fitness Way, Brooklyn NY'}
              openClosed={'Open'}
              distance={'6.7mi away'}
              rating={'4.5'} />
          </GymTileContainer>
        </Container>
        <LinearGradientOnboard />
      </BackgroundImageStyle>
    </MapContainer>





  )
}