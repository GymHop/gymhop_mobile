import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {SecondaryButton} from '../../../components/buttons';

const GymProfileHeader = styled.View`
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
`;
const LocationBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const SmallIcon = styled.Image`
  width: 20px;
  height: 25px;
`;

const TextWithIcon = styled.Text`
  color: #727272;
  font-size: 16;
  padding-left: 10;
  padding-right: 10;
`;

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export const GymHeader = props => {
  return (
    <GymProfileHeader>
      <LocationBlock>
        <SmallIcon source={require('../../../assets/icons/locationpin.png')} />
        <TextWithIcon style={styles.fontText}>location</TextWithIcon>
      </LocationBlock>
      <View style={{alignItems: 'center'}}>
        <SecondaryButton text={'See Memberships'} />
      </View>
    </GymProfileHeader>
  );
};
