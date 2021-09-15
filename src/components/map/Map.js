import React, { useState, useEffect, useRef } from 'react';
import MapView, { AnimatedRegion, Animated } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { MarkerComponent } from './MarkerComponent';
import { useQuery } from 'react-query'
import * as geolib from 'geolib';
import axios from 'axios'
import { Swipeable } from 'react-native-gesture-handler'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { GymTile, IndividualNavigationButton } from '../individualGymComponents';
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
const StyledLeftWrapper = styled.View`
right: 50px;
top: 25px;
`

const StyledRightWrapper = styled.View`
left: 260px;
bottom: 142px;
`
const FocusedStyledLocationPinContainer = styled.View`
width: 355px;
bottom: 125px;
`
const IndividualContainer = styled.View`
top: 30px;
left: 55px
height: 161px;
`

const GymTileContainer = styled.View`
height: 160px;
width: 245px;
bottom: 20px;
`

export const Map = props => {
  const propsLatitude = props.latitude
  const propsLongitude = props.longitude
  const [markers, setMarkers] = useState([])
  const [currentMarker, setCurrentMarker] = useState(false)
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')


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
      props.setUserRegion({
        latitude: nearestGym.latitude, longitude: nearestGym.longitude,
        latitudeDelta: props.latitudeDelta, longitudeDelta: props.longitudeDelta
      })
    }
  }, [markers])
  const renderLeftActions = () => {
    if (right) {
      const longitude = right.longitude
      const latitude = right.latitude
      props.setUserRegion({ latitude: latitude, longitude: longitude, latitudeDelta: props.latitudeDelta, longitudeDelta: props.longitudeDelta })
    }
  }
  const renderRightActions = () => {
    if (left) {
      const longitude = left.longitude
      const latitude = left.latitude
      props.setUserRegion({ latitude: latitude, longitude: longitude, latitudeDelta: props.latitudeDelta, longitudeDelta: props.longitudeDelta })
    }
  }
  const gymProfileHandler = async () => {
    console.log('ToDo')
  }
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        // provider={PROVIDER_GOOGLE}// remove if not using Google Maps
        style={styles.map}
        initialRegion={props.userRegion}
        onRegionChange={props.setUserRegion(props.userRegion)}
        animateToRegion={currentMarker.userRegion, { duration: 100 }}

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
            setUserRegion={props.setUserRegion}
            userRegion={props.userRegion}
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
        <FocusedStyledLocationPinContainer>
          <GestureRecognizer
            onSwipeLeft={renderLeftActions}
            onSwipeRight={renderRightActions}
          >
            <IndividualContainer>
              <StyledLeftWrapper>
                <IndividualNavigationButton
                  direction={'left'}
                  left={left}
                  latitudeDelta={currentMarker.latitudeDelta}
                  longitudeDelta={currentMarker.longitudeDelta}
                  setUserRegion={props.setUserRegion}
                  userRegion={props.userRegion}
                />
              </StyledLeftWrapper>
              <GymTileContainer
                onPress={gymProfileHandler}>
                <GymTile
                  style={{
                    borderBottomLeftRadius: 14,
                    borderBottomRightRadius: 14
                  }}
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
                  setUserRegion={props.setUserRegion}
                  userRegion={currentMarker.userRegion}
                  latitudeDelta={currentMarker.latitudeDelta}
                  longitudeDelta={currentMarker.longitudeDelta}
                  openClosed={currentMarker.openClosed}
                  rating={currentMarker.rating}
                  distance={currentMarker.distance}
                  userRegion={props.userRegion}
                />
              </GymTileContainer>
              <StyledRightWrapper>
                <IndividualNavigationButton
                  direction={'right'}
                  latitudeDelta={currentMarker.latitudeDelta}
                  longitudeDelta={currentMarker.longitudeDelta}
                  setUserRegion={props.setUserRegion}
                  right={right} />
              </StyledRightWrapper>
            </IndividualContainer>
          </GestureRecognizer>
        </FocusedStyledLocationPinContainer>
      )}
    </View>
  )
}