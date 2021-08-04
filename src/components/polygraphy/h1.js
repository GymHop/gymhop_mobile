import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Res } from '../../resources';

const Text = styled.Text`
  font-size: 17px;
  letter-spacing: -0.24;
  color: ${props => (props.white ? Res.colors.white : Res.colors.black)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
`;

export const H1 = props => {
  return (
    <Text
      style={styles.fontText}
      fontWeight={props.fontWeight}
      white={props.white}
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
