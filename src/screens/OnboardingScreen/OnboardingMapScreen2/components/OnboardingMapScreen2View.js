import React from 'react';
import styled from 'styled-components/native';
import {Platform, PermissionsAndroid} from 'react-native';
import {Res} from '../../../../resources';
import {Measurements} from '../../../../utils';
import MapIMG from '../../../../assets/images/MapOnboardingStatic.jpg';
import {TierTile, GymIcon, GymTile} from '../../../../components';
import PremiumBadge from '../../../../assets/icons/premiumBadge.png';
import {LinearGradientOnboard} from '../../../../components/onboardingComponents';

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
  width: 100%;
  height: 100%;
  top: 0px;
`;

const GymIconContainer = styled.View`
  top: 25px;
`;

const GymTileContainer = styled.View`
  top: 10px;
`;

const MapContainer = styled.View`
  width: 500px;
  height: 845px;
`;

export const OnboardingMapScreen2View = props => {
  return (
    // <MapContainer>
    <BackgroundImageStyle source={MapIMG}>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TierTile
          tier={'Premium Tier'}
          text={
            'Premium facilities with luxury amenities + access to all Standard Tier gyms'
          }
          textContainerStyling={
            'display: flex; width: 319px; height: 42px;   align-items: center; justify-content: center; top: 5px'
          }
          tierTileStyling={'right: 60; bottom: 7'}
          tierTitleContainerStyling={
            'display: flex; flexDirection: row; width: 217px; height: 30px; left: 55px; top: 10px;'
          }
          containerHeight={152}
          containerWidth={344}
          PremiumBadge={PremiumBadge}
        />
        <GymIconContainer>
          <GymIcon
            tier={'premium'}
            logo_url={
              'https://res.cloudinary.com/gymhop/image/upload/v1628618717/Gym%20Photos/Bodybuilding-and-gym-logo-on-transparent-background-PNG_2_guwzmi.png'
            }
          />
        </GymIconContainer>
        <GymTileContainer>
          <GymTile
            main_photo_url={
              'https://res.cloudinary.com/gymhop/image/upload/v1628618091/Gym%20Photos/planetlift_k2jybr.png'
            }
            tier={'premium'}
            imageStyle={'bottom: 66px; height: 80px; width: 245px;'}
            name={'Planet Lift'}
            address1={'142 Western Ave, Brooklyn NY'}
            openClosed={'Open'}
            distance={'7.2mi away'}
            rating={'4.5'}
            onboarding={true}
          />
        </GymTileContainer>
      </Container>
      <LinearGradientOnboard />
    </BackgroundImageStyle>
    // </MapContainer>
  );
};
