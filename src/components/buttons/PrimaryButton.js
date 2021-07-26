import React from 'react';
// import glamorous from 'glamorous-native';
import styled from 'styled-components/native';

import {Res} from '../../resources';
import {H2} from '../polygraphy';

// const Container = glamorous.touchableOpacity(props => ({
//   borderRadius: Res.spaces.radius.default,
//   paddingVertical: props.small ? Res.spaces.sm : Res.spaces.padding.xs,
//   backgroundColor: Res.colors.white,
//   alignItems: 'center',
//   justifyContent: 'center',

//   alignSelf: props.small ? 'center' : 'auto',
//   paddingHorizontal: props.small ? Res.spaces.lg : 0,
// }));

const Container = styled.TouchableOpacity`
  border-radius: ${Res.spaces.radius.default};
  padding-vertical: ${props => props.small ? Res.spaces.sm : Res.spaces.padding.xs};
  background-color: ${Res.colors.main};
  align-items: center;
  justify-content: center;

  align-self: ${props => props.small ? 'center' : 'auto'};
  padding-horizontal: ${props => props.small ? Res.spaces.lg : 0};
  height: 48px;
`

export const PrimaryButton = props => {
  return (
    <Container small={props.small} {...props}>
      <H2 style={props.textStyle} text={props.text} />
    </Container>
  );
};
