import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import styled from 'styled-components';

const GymLinkText = styled.Text`
  margin: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const GymLinkRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  background-color: #ffffff;
  border-bottom-color: #d4d4d4;
`;

const GymLinkContainer = styled.View`
  margin-bottom: 16px;
`;

export const GymInfoBlock = ({gymData}) => {
  return (
    <GymLinkContainer>
      <GymLinkRow
        onPress={() => Linking.openURL(gymData.website_url)}
        style={{borderBottomWidth: 1}}>
        <GymLinkText>Website</GymLinkText>
        <Image source={require('../../../assets/icons/website.png')} />
      </GymLinkRow>
      <GymLinkRow style={{borderBottomWidth: 1}}>
        <GymLinkText>Phone</GymLinkText>
        <Image source={require('../../../assets/icons/phone.png')} />
      </GymLinkRow>
      <GymLinkRow onPress={() => Linking.openURL(gymData.website_url)}>
        <GymLinkText>Classes Offered</GymLinkText>
        <Image source={require('../../../assets/icons/dumbbell.png')} />
      </GymLinkRow>
    </GymLinkContainer>
  );
};
