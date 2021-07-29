import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { Res } from '../../resources';
import { H2 } from '../polygraphy';



const Container = styled.TouchableOpacity`
  border-radius: 10px;
  border-style: solid;
  border-color: #00C29E;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  align-self: ${props => props.small ? 'center' : 'auto'};
  padding-horizontal: ${props => props.small ? Res.spaces.lg : 0};
  height: 48px;
  width: 100%;

`
const Text = styled.Text`
  /*font-family: 'NeoSansW1G-Regular',*/
  font-size: 16px;
  color: #00C29E;
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
  line-height: 20px;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
`


export const PrimaryButtonTransparent = props => {
  return (

    <Container small={props.small} {...props}>

      <Text fontWeight={props.fontWeight} white={props.white} uppercase={props.uppercase} {...props}>
        {props.text}
      </Text>
    </Container>

  );
};

