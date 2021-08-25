import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styled from 'styled-components/native';

import { Res } from '../../resources';
import { H2 } from '../polygraphy';
import PremEllipse from '../../assets/icons/premellipse.png'
import PremPolygon from '../../assets/icons/prempolygon.png'
import Ellipse from '../../assets/icons/Ellipse.png'
import Polygon from '../../assets/icons/Polygon.png'
import GymImage from '../../assets/images/gymPhotos/GymIcon.jpg'
const Container = styled.View`
`
const NavButton = styled.View`
background: rgba(61, 61, 61, 0.3);
radius: 20px;
height: 38px;
width: 71px;
`

export const IndividualNavigationButton = props => {
  const rightPointer = async (e) => {

  }
  const leftPointer = async (e) => {

  }
  return (
    <>
      {props.left && (
        <Container onClick={leftPointer}>
        </Container>
      )}
      {props.right && (
        <Container onClick={rightPointer}>
        </Container>
      )}
    </>
  )
}