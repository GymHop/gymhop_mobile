import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { Res } from '../../resources';
import { H2 } from '../polygraphy';



const Container = styled.TouchableOpacity`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self: ${props => props.small ? 'center' : 'auto'};
  padding-horizontal: ${props => props.small ? Res.spaces.lg : 0};
  height: 48px;
  width: 100%;

`

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10
  },
})

export const PrimaryButton = props => {
  return (
    <LinearGradient
      colors={['#00C29E', '#42DF90']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}>
      <Container small={props.small} {...props}>
        <H2 style={props.textStyle} text={props.text} uppercase={props.uppercase} />
      </Container>
    </LinearGradient>
  );
};
