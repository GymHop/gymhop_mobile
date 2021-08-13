import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native'
import { Res } from '../../../resources';
import { Measurements } from '../../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
const StyledText = styled.Text`
`;
const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: ${Res.colors.main};
  padding-horizontal: ${Res.spaces.padding.md};
  padding-bottom: ${Measurements.safeAreaBottomInset};
`

export const EntryScreenView = props => {
  useEffect(() => {
    checkNeedSignIn()
  }, [])
  const checkNeedSignIn = async () => {
    let token = await AsyncStorage.getItem("@token")
    if (token) {
      navigation.navigate('map1');
    }
  }
  return <Container>
    <StyledText>{"I AM TEXT"}</StyledText>
  </Container>;
};
