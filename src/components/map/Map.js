import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {Button, View, Text, ImageBackground, Image, Platform, StyleSheet} from 'react-native';
import PremIcon from '../../assets/icons/mapMarkerPremium.png';
import StanIcon from '../../assets/icons/mapMarkerStandard.png';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: null,
    width: null,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
 });
const StyledLocationPin = styled.Image`
height: 54px; 
width: 54px
`
 
let markers  = [{lat: 40.7021, long: -73.9863196, img: StanIcon},
  {lat: 40.715994583263424, long: -74.00910335131245, img: StanIcon},
{lat: 40.70099514080568, long: -73.99391073103118, img: PremIcon},
{lat: 40.72700014080568, long: -73.99691073103118, img: StanIcon},
{lat: 40.71400014080568, long: -73.98291073103118, img: StanIcon},
{lat: 40.73000014080568, long: -73.98291073103118, img: PremIcon}];


export const Map = props => {

  const [onRegionChange, setOnRegionChange] = useState(props.region)
  return (
    <View style={styles.container}>
     <MapView
        // provider={PROVIDER_GOOGLE}// remove if not using Google Maps
        style={styles.map}
        region={{
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: props.latitudeDelta,
        longitudeDelta: props.longitudeDelta,
       }}
       onRegionChange={onRegionChange}
     >
       {markers.map((marker, index) => (
      <Marker 
      key={index}
      coordinate={{latitude : marker.lat , longitude : marker.long }}
      >
      <StyledLocationPin
      source={marker.img}
      resizeMode="contain"/>
    </Marker>
  ))}
     </MapView>
   </View>
  )
}