import React from 'react';
// import glamorous from 'glamorous-native';
import styled from 'styled-components/native';
import {Res} from '../../resources';

// const Text = glamorous.text(props => ({
//   fontFamily: 'NeoSansW1G-Regular',
//   fontSize: 13,
//   letterSpacing: -0.24,
//   color: props.white ? Res.colors.white : Res.colors.textDark,
//   fontWeight: props.fontWeight ? props.fontWeight : '400',
// }));

const Text = styled.Text`
  // fontFamily: 'NeoSansW1G-Regular',
  font-size: 13px;
  letter-spacing: -0.24;
  color: ${props => props.white ? Res.colors.white : Res.colors.textDark};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
`

export const H3 = props => {
  return (
    <Text fontWeight={props.fontWeight} white={props.white} {...props}>
      {props.text}
    </Text>
  );
};
