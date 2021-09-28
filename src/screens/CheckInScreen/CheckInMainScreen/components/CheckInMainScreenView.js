import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Res } from '../../../../resources';
import { Measurements } from '../../../../utils';
import MapIMG from '../../../../assets/images/MapOnboardingStatic.jpg';
import { TierTile, GymIcon, GymTile } from '../../../../components';
import { LinearGradientOnboard } from '../../../../components/onboardingComponents';

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
  top: 15px;
`;

const MapContainer = styled.View`
  width: 500px;
  height: 845px;
`;

export const CheckInMainScreenView = props => {
  return (
    <Container>
      <View>
        hey girls the name's alaska
      </View>
    </Container>
  );
};
