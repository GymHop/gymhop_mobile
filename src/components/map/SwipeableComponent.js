import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native';
import { GymIcon, GymTile, IndividualNavigationButton } from '../individualGymComponents';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

const FocusedStyledLocationPinContainer = styled.View`
`
const IndividualContainer = styled.View`
bottom: 75px;

`
const StyledGymIconContainer = styled.View`
left: 60px;
bottom: 230px;
`

const StyledLeftWrapper = styled.View`
right: 50px;
top: 15px;
`

const StyledRightWrapper = styled.View`
left: 260px;
bottom: 120px;
`


export const SwipeableComponent = props => {
  return (
    <FocusedStyledLocationPinContainer>
      <IndividualContainer>
        <StyledLeftWrapper>
          <IndividualNavigationButton
            direction={'left'}
            left={props.left}
            longitudeDelta={props.longitudeDelta}
            latitudeDelta={props.latitudeDelta}
            setUserRegion={props.setRegion}
            region={props.region}
          />
        </StyledLeftWrapper>
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
          rating={props.rating}
        />
        <StyledRightWrapper>
          <IndividualNavigationButton
            direction={'right'}
            longitudeDelta={props.longitudeDelta}
            latitudeDelta={props.latitudeDelta}
            setRegion={props.setRegion}
            right={props.right} />
        </StyledRightWrapper>
      </IndividualContainer>
    </FocusedStyledLocationPinContainer>
  )
}