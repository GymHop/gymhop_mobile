import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Button, View, Text, ImageBackground, Image, Platform, StyleSheet } from 'react-native';
import PremIcon from '../../assets/icons/mapMarkerPremium.png';
import StanIcon from '../../assets/icons/mapMarkerStandard.png';
import styled from 'styled-components/native';
import { GymIcon, GymTile, IndividualNavigationButton } from '../individualGymComponents';

const StyledLocationPin = styled.Image`
height: 54px; 
width: 54px
`
const FocusedStyledLocationPinContainer = styled.View`
top: -20px;
left: -120px;
position: absolute;
z-index: 5;
`
const StyledGymIconContainer = styled.View`
left: 60px
`
export const MarkerComponent = props => {
  const [onShow, setOnShow] = useState(false)
  const locationPinHandler = async () => {
    props.setRegion(props.coordinate)
  }

  useEffect(() => {
    if (props.coordinate.latitude === props.latitude &&
      props.coordinate.longitude === props.longitude) {
      setOnShow(true)
    } else {
      setOnShow(false)
    }

  }, [props.longitude, props.latitude])

  return (
    <Marker
      coordinate={props.coordinate}
      onPress={locationPinHandler}
      keyboardShouldPersistTaps='always'
    >{onShow ?
      (
        <FocusedStyledLocationPinContainer>
          <StyledGymIconContainer >
            <GymIcon
              tier={props.tier}
              logo_url={'https://res.cloudinary.com/gymhop/image/upload/v1628618553/Gym%20Photos/GymIcon_x3jowf.jpg'} />
          </StyledGymIconContainer>
          <IndividualNavigationButton
            direction={'left'} />
          <GymTile
            main_photo_url={props.main_photo_url}
            address1={props.address1}
            amenities={props.amenities}
            name={props.name}
            photo_urls={props.photo_urls}
            state_code={props.state_code}
            tier={props.tier}
            website_url={props.website_url}
            zip_code={props.zip_code}
            longitude={props.longitude}
            latitude={props.latitude}
            burough={props.burough}
            city={props.city}
            logo_url={props.logo_url}
            setRegion={props.setRegion}
            region={props.region}
            latitudeDelta={props.latitudeDelta}
            longitudeDelta={props.longitudeDelta}
            openClosed={props.openClosed}
            distance={props.distance}
            imageStyle={'bottom: 66px; height: 80px; width: 245px;'}
            rating={props.rating} />
          <IndividualNavigationButton direction={'right'} />
        </FocusedStyledLocationPinContainer>
      ) :
      props.tier === "standard" ?
        (<StyledLocationPin
          source={StanIcon}
          resizeMode="contain" />) :
        (<StyledLocationPin
          source={PremIcon}
          resizeMode="contain" />
        )
      }
    </Marker>

  )
}