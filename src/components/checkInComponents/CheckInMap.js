import React, { useState, useEffect, useRef } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useQuery } from 'react-query'
import * as geolib from 'geolib';
import axios from 'axios'
import Geolocation from 'react-native-geolocation-service';

export const CheckInMap = props => {
  const propsLatitude = props.latitude
  const propsLongitude = props.longitude
  const [markers, setMarkers] = useState([])
  const [currentMarker, setCurrentMarker] = useState(false)
  let mapRef = useRef(null);

  useEffect(() => {
    animateToRegion();
  },
    [props.userRegion])

  const animateToRegion = () => {
    mapRef.current.animateToRegion(props.userRegion, 1000);
  }
  const { data, error, loading } = useQuery(
    'gyms',
    async () => {
      const response = await axios.get('https://gymhop-api-staging.herokuapp.com/api/v1/gyms?latitude=40.7021&longitude=-73.9863196')
      return response.data.data
    }
  )



  useEffect(() => {
    if (loading) return 'null';
    if (error) return `Error! ${error.message}`;
    if (data) setMarkers(data);

  }, [data, loading, error])

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

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        // provider={PROVIDER_GOOGLE}// remove if not using Google Maps
        initialRegion={props.userRegion}
        onRegionChange={props.setUserRegion(props.userRegion)}
        animateToRegion={currentMarker.userRegion, { duration: 100 }}
      >
      </MapView>
    </View>
  )
}