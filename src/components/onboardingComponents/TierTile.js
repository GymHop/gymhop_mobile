import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styled from 'styled-components/native';

import { Res } from '../../resources';
import { H2 } from '../polygraphy';

const Container = styled.TouchableOpacity`
  border-radius: ${Res.spaces.radius.default};
  padding-vertical: ${props => props.small ? Res.spaces.sm : Res.spaces.padding.xs};
  background-color: ${Res.colors.main};
  align-items: center;
  justify-content: center;
  align-self: ${props => props.small ? 'center' : 'auto'};
  padding-horizontal: ${props => props.small ? Res.spaces.lg : 0};
  height: 48px;
  width: 25%;
`


export const TierTile = props => {
  return(
  <Container>
    <Text>Hello World!</Text>
  </Container>

    )}