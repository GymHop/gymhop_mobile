import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import styled from 'styled-components/native';

import {Res} from '../../resources';
import {H2} from '../polygraphy';
import PremEllipse from '../../assets/icons/premellipse.png';
import PremPolygon from '../../assets/icons/prempolygon.png';
import Ellipse from '../../assets/icons/Ellipse.png';
import Polygon from '../../assets/icons/Polygon.png';
import GymImage from '../../assets/images/gymPhotos/GymIcon.jpg';
const Container = styled.View``;

const StyledImage = styled.Image`
  border-radius: 50;
  position: absolute;
  left: 23;
  height: 69px;
  width: 69px;
  top: 19;
`;
const StyledEllipse = styled.Image``;
const StyledPolygon = styled.Image`
  left: 32;
  bottom: 31;
`;

export const GymIcon = props => {
  return (
    <Container>
      {props.tier === 'standard' ? (
        <StyledEllipse source={Ellipse} />
      ) : (
        <StyledEllipse source={PremEllipse} />
      )}
      <StyledImage source={{uri: props.logo_url}} />
      {props.marker ? (
        props.tier === 'standard' ? (
          <StyledPolygon source={Polygon} />
        ) : (
          <StyledPolygon source={PremPolygon} />
        )
      ) : null}
    </Container>
  );
};
