import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import styled from 'styled-components';
import MapView from 'react-native-maps';
import * as geolib from 'geolib';
import Geolocation from 'react-native-geolocation-service';
import {CheckInMap} from '../../../components/checkInComponents';
import { Platform, Linking } from 'react-native';

const MapBlock = styled.View`
  align-items: center;
  background-color: #ffffff;
  padding: 16px;
`;
const MapLinkContainer = styled.TouchableOpacity`
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;
const StyledMap = styled.View`
  justify-content: center;
  height: 142px;
  width: 342px;
`;
const BottomTextContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;
const BottomText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export const ProfileMap = ({gymData}) => {
  const [lat, setLat] = useState(gymData.latitude);
  const [long, setLong] = useState(gymData.longitude);
  const [distance, setDistance] = useState(null);

  const getLocationDistance = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        let meters = geolib.getDistance(
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          {latitude: gymData.latitude, longitude: gymData.longitude},
        );
        let miles = geolib.convertDistance(meters, 'mi');
        console.log(miles.toFixed(1));
        setDistance(miles.toFixed(1));
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const handleMapClick = () => {
    console.log('click');

      var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
      var url = scheme + `${lat},${long}`;
      Linking.openURL(url);
  };

  useEffect(() => {
    getLocationDistance();
  }, []);

  return (
    <MapBlock>
      <MapLinkContainer onPress={() => handleMapClick()}>
        <StyledMap>
          <MapView
            onPress={() => handleMapClick()}
            style={styles.map}
            initialRegion={{
              latitude: gymData.latitude,
              longitude: gymData.longitude,
              latitudeDelta: 0.068,
              longitudeDelta: 0.033,
            }}
          />
        </StyledMap>

        <BottomTextContainer>
          <BottomText style={styles.fontText}>
            Get Directions ({distance} mi)
          </BottomText>
        </BottomTextContainer>
      </MapLinkContainer>
    </MapBlock>
  );
};
