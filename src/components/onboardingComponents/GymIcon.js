import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styled from 'styled-components/native';

import { Res } from '../../resources';
import { H2 } from '../polygraphy';

import GymImage from '../../assets/images/gymPhotos/GymIcon.jpg'
const Container = styled.View`
`

const StyledImage = styled.Image`
  borderRadius: 50;
  position: absolute;
  left: 23;
  top: 19;`
const StyledEllipse = styled.Image``
const StyledPolygon = styled.Image`
left: 32;
bottom: 31;
`


export const GymIcon = props => {
  return(
  <Container>
    <StyledEllipse source={props.ellipse}/>
    <StyledImage source={GymImage}/>
    <StyledPolygon source={props.polygon} />
  </Container>
    )}