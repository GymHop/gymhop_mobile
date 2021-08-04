import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Res } from '../../resources';


const Text = styled.Text`
  font-size: 16px;
  color: ${props => props.white ? Res.colors.white : Res.colors.textDark};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
  line-height: 20px;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
`

export const H2 = props => {
  return (
    <Text
      style={styles.fontText}
      fontWeight={props.fontWeight}
      white={props.white}
      uppercase={props.uppercase}
      {...props}>
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular'
  },
});