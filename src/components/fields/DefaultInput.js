import React from 'react';
import styled from 'styled-components/native';
import {Res} from '../../resources';
import {Platform} from 'react-native';

const Container = styled.View`
  margin-bottom: ${Res.spaces.padding.xxs}px;
  flex-direction: row;
  background-color: ${Res.colors.white};
  border-radius: ${Res.spaces.radius.xs}px;
  padding-horizontal: ${Res.spaces.md}px;
  padding-top: ${Platform.OS === 'ios' ? Res.spaces.md : 4}px;
  paddingBottom: ${Platform.OS === 'ios' ? Res.spaces.md - 2 : 4}px;
`


const TextField = styled.TextInput`
  font-size: 16px;
  flex: 1;
`

const Icon = styled.Image``;

export const DefaultInput = props => {
  return (
    <Container style={props.containerStyle}>
      <TextField placeholderTextColor={Res.colors.placeholder} {...props} />
      {props.icon && <Icon source={props.icon} />}
    </Container>
  );
};
