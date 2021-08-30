import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Button, View, Text, ImageBackground, Image, Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { MarkerComponent } from './MarkerComponent';
import { useQuery } from 'react-query'
import { QueryClient, QueryClientProvider } from "react-query";
import * as geolib from 'geolib';
import axios from 'axios'
import { SwipeableComponent } from './SwipeableComponent'
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

const SwipeableContainer = styled.View`
bottom: 200px;
background-color:green;
height: 0px;
`

export const Map = props => {
  const propsLatitude = props.latitude
  const propsLongitude = props.longitude
  const [markers, setMarkers] = useState([])
  const [currentMarker, setCurrentMarker] = useState(false)
  const [onFocus, setOnFocus] = useState(false)
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')

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
    if (currentMarker) {
      const currentLatitude = currentMarker.coordinate.latitude
      const currentLongitude = currentMarker.coordinate.longitude
      setRight('')
      setLeft('')
      const nearestGyms = geolib.orderByDistance({ latitude: currentLatitude, longitude: currentLongitude }, markers.map((mark) => {
        const markLat = mark.latitude
        const markLong = mark.longitude
        const markObj = { latitude: markLat, longitude: markLong }
        return markObj
      }))
      const westGyms = [];
      const eastGyms = [];
      nearestGyms.forEach((gym, i) => {
        let gymLat = gym.latitude
        let gymLong = gym.longitude
        if ((gymLong !== currentLatitude) && (gymLat !== currentLatitude)) {
          const bearing = geolib.getCompassDirection({ latitude: currentLatitude, longitude: currentLongitude }, { latitude: gymLat, longitude: gymLong })
          if (bearing.includes('W')) {
            westGyms.push(gym)
          }
          if (bearing.includes('E')) {
            eastGyms.push(gym)
          }
          if (bearing === 'S' || bearing === 'N') {
            westGyms.push(gym)
            eastGyms.push(gym)
          }
        }
      }
      )
      const nearestWest = geolib.findNearest({ latitude: currentLatitude, longitude: currentLongitude }, westGyms)
      const nearestEast = geolib.findNearest({ latitude: currentLatitude, longitude: currentLongitude }, eastGyms)
      setLeft(nearestWest)
      setRight(nearestEast)
    }
  }, [propsLatitude, propsLongitude, currentMarker])

  useEffect(() => {

    const nearestGym = geolib.findNearest({ propsLatitude, propsLongitude }, markers.map((mark) => {
      const markLat = mark.latitude
      const markLong = mark.longitude
      const markObj = { latitude: markLat, longitude: markLong }
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
            setCurrentMarker={setCurrentMarker}
          />
        )))}
      </MapView>
      {currentMarker && (
        <SwipeableContainer>
          <SwipeableComponent
            address1={currentMarker.address1}
            amenities={currentMarker.amenities}
            main_photo_url={currentMarker.main_photo_url}
            name={currentMarker.name}
            photo_urls={currentMarker.photo_urls}
            state_code={currentMarker.state_code}
            tier={currentMarker.tier}
            website_url={currentMarker.website_url}
            zip_code={currentMarker.zip_code}
            coordinate={currentMarker.coordinate}
            longitude={currentMarker.propsLongitude}
            latitude={currentMarker.propsLatitude}
            burough={currentMarker.burough}
            city={currentMarker.city}
            logo_url={currentMarker.logo_url}
            setRegion={props.setRegion}
            region={currentMarker.region}
            latitudeDelta={currentMarker.latitudeDelta}
            longitudeDelta={currentMarker.longitudeDelta}
            openClosed={currentMarker.openClosed}
            rating={currentMarker.rating}
            distance={currentMarker.distance}
            right={right}
            region={props.region}
            left={left} />
        </SwipeableContainer>
      )}
    </View>
  )
}