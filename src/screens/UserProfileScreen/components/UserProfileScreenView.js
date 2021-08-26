import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Button, View, Text} from 'react-native';
import {Res} from '../../../resources';
import {Measurements} from '../../../utils';
const StyledText = styled.Text``;
const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: ${Res.colors.main};
  padding-horizontal: ${Res.spaces.padding.md};
  padding-bottom: ${Measurements.safeAreaBottomInset};
`;

export const UserProfileScreenView = props => {
  const navigation = useNavigation();

  return (
    <Container>
      <StyledText>{'UserProfileScreen'}</StyledText>
    </Container>
  );
};
