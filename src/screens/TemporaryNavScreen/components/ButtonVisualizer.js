/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';
import { Button, View, Text } from 'react-native';
import { Res } from '../../../resources';
import { Measurements } from '../../../utils';
import { PrimaryButton } from '../../../components';
import { PrimaryButtonTransparent } from '../../../components/buttons';
const StyledText = styled.Text``;
const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: ${Res.colors.white};
  padding-horizontal: ${Res.spaces.padding.sm};
  padding-bottom: ${Measurements.safeAreaBottomInset};
`;

export const ButtonVisualizer = props => {


  return (
    <Container>
      <StyledText>{'Buttons'}</StyledText>

      <PrimaryButton text={'Primary Button Green'} uppercase ></PrimaryButton>

      <View style={{ padding: 10 }}></View>

      <PrimaryButtonTransparent text={'Primary Transparent'} uppercase ></PrimaryButtonTransparent>

    </Container>
  );
};
