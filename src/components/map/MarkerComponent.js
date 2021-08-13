import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Button, View, Text, ImageBackground, Image, Platform, StyleSheet } from 'react-native';
import PremIcon from '../../assets/icons/mapMarkerPremium.png';
import StanIcon from '../../assets/icons/mapMarkerStandard.png';
import styled from 'styled-components/native';


const StyledLocationPin = styled.Image`
height: 54px; 
width: 54px
`
export const MarkerComponent = props => {
  const locationPinHandler = async () => {
    props.setRegion(props.coordinate)

  }

  return (
    <Marker
      coordinate={props.coordinate}
      onPress={locationPinHandler}
      keyboardShouldPersistTaps='always'
    >
      {props.tier === "standard" ?
        <StyledLocationPin
          source={StanIcon}
          resizeMode="contain" /> :
        <StyledLocationPin
          source={PremIcon}
          resizeMode="contain" />
      }
    </Marker>

  )
}