import React from 'react';
// import glamorous from 'glamorous-native';
import styled from 'styled-components/native';
import { Res } from '../../resources';

// const Text = glamorous.text(props => ({
//   fontFamily: 'NeoSansW1G-Regular',

//   fontSize: 15,
//   letterSpacing: -0.24,
//   color: props.white ? Res.colors.white : Res.colors.textDark,
//   fontWeight: props.fontWeight ? props.fontWeight : '400',
// }));

const Text = styled.Text`
  /*font-family: 'NeoSansW1G-Regular',*/
  font-size: 16px;
  color: ${props => props.white ? Res.colors.white : Res.colors.textDark};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
  line-height: 20px;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
`

export const H2 = props => {
  return (
    <Text fontWeight={props.fontWeight} white={props.white} uppercase={props.uppercase} {...props}>
      {props.text}
    </Text>
  );
};
