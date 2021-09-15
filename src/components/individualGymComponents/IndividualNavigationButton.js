import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import LeftArrow from '../../assets/icons/arrowleft.png'
import RightArrow from '../../assets/icons/arrowright.png'
const Container = styled.View`
`
const StyledLeftNavButton = styled.TouchableOpacity`
background: rgba(61, 61, 61, 0.3);
border-radius: 20px;
height: 80px;
width: 35px;
position: absolute;
z-index: 5;
`
const StyledRightNavButton = styled.TouchableOpacity`
background: rgba(61, 61, 61, 0.3);
border-radius: 20px;
height: 80px;
width: 35px;
position: absolute;
z-index: 10;
`
const StyledLeftImage = styled.Image`
left: 8px;
top: 16px;
`
const StyledRightImage = styled.Image`
left: 12px;
top: 16px;
`

export const IndividualNavigationButton = props => {
  const pointer = async (e) => {
  const propsLatitudeDelta = props.latitudeDelta
  const propsLongitudeDelta = props.longitudeDelta
   if(props.left){
   const longitude = props.left.longitude
   const latitude = props.left.latitude 
  props.setUserRegion({latitude: latitude, longitude: longitude, latitudeDelta: propsLatitudeDelta, longitudeDelta: propsLongitudeDelta})
}
  
  
   if(props.right){
    const longitude = props.right.longitude
    const latitude = props.right.latitude
    props.setUserRegion({latitude: latitude, longitude: longitude, latitudeDelta: propsLatitudeDelta, longitudeDelta: propsLongitudeDelta})
   }
  }


  return (
    <View onPress={pointer}>
      {props.direction === 'left' && (
        <Container >
          <StyledLeftNavButton onPress={pointer}>
          <StyledLeftImage  source={LeftArrow}/>
          </StyledLeftNavButton>
        </Container>
      )}
      {props.direction === 'right' && (
        <Container>
          <StyledRightNavButton  onPress={pointer}>
          <StyledRightImage source={RightArrow}/>
          </StyledRightNavButton>
        </Container>
      )}
    </View>
  )
}