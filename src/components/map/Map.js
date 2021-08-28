import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Button, View, Text, ImageBackground, Image, Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { MarkerComponent } from './MarkerComponent';
import { useQuery } from 'react-query'
import { QueryClient, QueryClientProvider } from "react-query";
import * as geolib from 'geolib';
import axios from 'axios'
import { ScreenStackHeaderLeftView } from 'react-native-screens';
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

export const Map = props => {
  const propsLatitude = props.latitude
  const propsLongitude = props.longitude
  const [markers, setMarkers] = useState([])
  const [onFocus, setOnFocus] = useState(false)
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(false)

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

  useEffect(() => {
    setRight(false)
    setLeft(false)
    const nearestGyms = geolib.orderByDistance({ propsLatitude, propsLongitude }, markers.map((mark) => {
      const markLat = mark.latitude
      const markLong = mark.longitude
      const markObj = {latitude: markLat, longitude: markLong}
      return markObj
    }))
    nearestGyms.forEach((gym, i) => {
      let gymLat = gym.latitude
      let gymLong = gym.longitude
      let coordinates = {latitude: gymLat, longitude: gymLong,
        latitudeDelta: props.latitudeDelta, longitudeDelta: props.longitudeDelta}
      if ((gymLong !== propsLongitude) && (gymLat !== propsLatitude)) {
        const bearing = geolib.getCompassDirection({latitude:propsLatitude, longitude: propsLongitude },{latitude: gymLat, longitude: gymLong})
        if (!left && bearing.includes('W')) {
          setLeft(coordinates)
        }
        if (!right && bearing.includes('E')) {
          setRight(coordinates)
        }
        if (!right && !left && bearing === "N" || bearing === "S") {
          setRight(coordinates)
          setLeft(coordinates)

        }
      }
    })
  }, [propsLatitude, propsLongitude])

  useEffect(() => {

    const nearestGym = geolib.findNearest({ propsLatitude, propsLongitude }, markers.map((mark) => {
      const markLat = mark.latitude
      const markLong = mark.longitude
      const markObj = {latitude: markLat, longitude: markLong}
      return markObj
    }))
    if (nearestGym !== undefined) {
      props.setRegion({
        latitude: nearestGym.latitude, longitude: nearestGym.longitude,
        latitudeDelta: props.latitudeDelta, longitudeDelta: props.longitudeDelta
      })
    }
  }, [markers])

  return (
    <View style={styles.container}>
      <MapView
        // provider={PROVIDER_GOOGLE}// remove if not using Google Maps
        style={styles.map}
        region={props.region
        }
        onRegionChange={this.onRegionChange}

      >
        {markers && (markers.map((marker, index) => (
          <MarkerComponent
            key={marker.id}
            address1={marker.address1}
            amenities={marker.amenities}
            main_photo_url={marker.main_photo_url}
            name={marker.name}
            photo_urls={marker.photo_urls}
            state_code={marker.state_code}
            tier={marker.tier}
            website_url={marker.website_url}
            zip_code={marker.zip_code}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
              latitudeDelta: props.latitudeDelta,
              longitudeDelta: props.longitudeDelta,
            }}
            longitude={propsLongitude}
            latitude={propsLatitude}
            burough={marker.burough}
            city={marker.city}
            logo_url={marker.logo_url}
            setRegion={props.setRegion}
            region={props.region}
            latitudeDelta={props.latitudeDelta}
            longitudeDelta={props.longitudeDelta}
            openClosed={'open'}
            rating={'5.0'}
            distance={'6.7mi away'}
            right={right}
            left={left}
          /> 
        )))}
      </MapView>
    </View>
  )
}