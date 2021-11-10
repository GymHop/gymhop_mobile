import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
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
  profileTitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontWeight: '700',
    fontSize: 28,
    padding: 8,
  },
});

export const GymHeader = ({gymData, distance, rating}) => {
  return (
    <GymProfileHeader>
      <Text style={styles.profileTitle}>{gymData.name}</Text>
      <LocationBlock>
        <SmallIcon source={require('../../../assets/icons/locationpin.png')} />
        <TextWithIcon style={styles.fontText}>{gymData.address1}</TextWithIcon>
      </LocationBlock>
      <LocationBlock>
        <SmallIcon source={require('../../../assets/icons/locationpin.png')} />
        <TextWithIcon style={styles.fontText}>{distance}</TextWithIcon>
      </LocationBlock>
      <LocationBlock>
        <SmallIcon source={require('../../../assets/icons/locationpin.png')} />
        <TextWithIcon style={styles.fontText}>{rating} (74 reviews)</TextWithIcon>
      </LocationBlock>
      <View style={{alignItems: 'center'}}>
        <SecondaryButton text={'See Memberships'} />
      </View>
    </GymProfileHeader>
  );
};
