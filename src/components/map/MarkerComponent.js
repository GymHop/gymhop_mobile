import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Button, View, Text, ImageBackground, Image, Platform, StyleSheet } from 'react-native';
import PremIcon from '../../assets/icons/mapMarkerPremium.png';
import StanIcon from '../../assets/icons/mapMarkerStandard.png';
import styled from 'styled-components/native';
import { SwipeableComponent } from './SwipeableComponent'
import { GymIcon, GymTile, IndividualNavigationButton } from '../individualGymComponents';
const StyledLocationPin = styled.Image`
height: 54px; 
width: 54px;
position: relative;
`
const StyledGymIconContainer = styled.View`
left: 0px;
top: 0px;
`

export const MarkerComponent = props => {

  const [onShow, setOnShow] = useState(false)
  const locationPinHandler = async () => {
    if (props.coordinate.latitude !== props.latitude ||
      props.coordinate.longitude !== props.longitude) {
      setOnShow(true)
      props.setUserRegion(props.coordinate)
    }
  }

  useEffect(() => {
    if (props.coordinate.latitude === props.latitude &&
      props.coordinate.longitude === props.longitude) {
      setOnShow(true)
      props.setCurrentMarker({
        address1: props.address1,
        amenities: props.amenities,
        main_photo_url: props.main_photo_url,
        name: props.name,
        photo_urls: props.photo_urls,
        state_code: props.state_code,
        tier: props.tier,
        website_url: props.website_url,
        zip_code: props.zip_code,
        coordinate: props.coordinate,
        longitude: props.propsLongitude,
        latitude: props.propsLatitude,
        burough: props.burough,
        city: props.city,
        logo_url: props.logo_url,
        setUserRegion: props.setUserRegion,
        userRegion: props.userRegion,
        latitudeDelta: props.latitudeDelta,
        longitudeDelta: props.longitudeDelta,
        openClosed: props.openClosed,
        rating: props.rating,
        distance: props.distance,
        right: props.right,
        left: props.left
      })
    } else {
      setOnShow(false)
    }

  }, [props.longitude, props.latitude])
  return (
    !onShow ?
      (<Marker
        coordinate={props.coordinate}
        keyboardShouldPersistTaps='always'
        onPress={locationPinHandler}>
        {props.tier === "standard" ?
          (<StyledLocationPin
            source={StanIcon}
            resizeMode="contain" />) :
          (<StyledLocationPin
            source={PremIcon}
            resizeMode="contain" />
          )} 
        </Marker>):
      (<Marker
        coordinate={props.coordinate}
        keyboardShouldPersistTaps='always'>
        <StyledGymIconContainer>
          <GymIcon
            tier={props.tier}
            logo_url={'https://res.cloudinary.com/gymhop/image/upload/v1628618553/Gym%20Photos/GymIcon_x3jowf.jpg'} />
        </StyledGymIconContainer>
      </Marker>)
          
          
  )
}