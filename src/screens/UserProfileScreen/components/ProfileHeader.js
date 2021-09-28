import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

const UserHeader = styled.View`
  align-items: center;
  padding-bottom: 10px;
  background-color: #ffffff;
`;
const LocationBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const SmallIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const ProfileHeader = ({userData}) => {
  return (
    <UserHeader>
      <Text style={styles.profileTitle}>
        {userData.first_name} {userData.last_name}
      </Text>
      <LocationBlock>
        <SmallIcon source={require('../../../assets/icons/locationpin.png')} />
        <Text style={styles.location}>New York City, NY</Text>
      </LocationBlock>
    </UserHeader>
  );
};

const styles = StyleSheet.create({
  profileTitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontWeight: '700',
    fontSize: 28,
    padding: 8,
  },
  location: {
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#727272',
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
});
