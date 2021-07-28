import React from 'react';
import styled from 'styled-components/native';

import { Res } from '../../resources';
import { H2 } from '../polygraphy';



const Container = styled.TouchableOpacity`
  border-radius: 19px;
  padding-vertical: ${props => props.small ? Res.spaces.sm : Res.spaces.padding.xs};
  background-color: ${Res.colors.secondaryGreen};
  align-items: center;
  justify-content: center;
  align-self: center;
  padding-horizontal: ${props => props.small ? Res.spaces.lg : 0};
  height: 40px;
  width: fit-content;
`





export const SecondaryButton = props => {
  return (
    <Container small={props.small} {...props}>
      <H2 style={props.textStyle} text={props.text} white={props.white} />
    </Container>
  );
};
