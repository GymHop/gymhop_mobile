import React, { useState, useEffect, useRef } from 'react';
import {Button, View, Text, ImageBackground, Image, Platform, StyleSheet} from 'react-native';
import {Map} from '../../../components/map';
import {Res} from '../../../resources';
import {Measurements} from '../../../utils';
import styled from 'styled-components/native';
import PremIcon from '../../../assets/icons/mapMarkerPremium.png';
import StanIcon from '../../../assets/icons/mapMarkerStandard.png';
import { Marker } from 'react-native-maps';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  /* background-color: ${Res.colors.main}; */
  padding-horizontal: ${Res.spaces.md}px;
  padding-bottom: ${Measurements.safeAreaBottomInset}px;
  display: flex;
  z-index: 3;
`;

export const Map1ScreenView = props => {
  const [userRegion, setUserRegion] = useState({ 
    latitude: 40.709318,
    longitude: -73.990686,
    latitudeDelta: 0.068,
    longitudeDelta: 0.033,
  })
  
  return (
    <Container>
      <Map 
      initialRegion={{"latitude": 40.709318,
        "longitude": -73.990686,
        "latitudeDelta": 0.068,
        "longitudeDelta": 0.033,}}
      latitude={userRegion.latitude}
      longitude={userRegion.longitude}
      latitudeDelta={userRegion.latitudeDelta}
      longitudeDelta={userRegion.longitudeDelta}
      userRegion={userRegion}
      setUserRegion={setUserRegion}>
      </Map>
    </Container>
  )
}

