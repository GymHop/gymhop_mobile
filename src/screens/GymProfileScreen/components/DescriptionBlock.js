import React from 'react';
import {View} from 'react-native';
import {HeaderText} from '../../UserProfileScreen/components/ProfileDetails';

export const DescriptionBlock = () => {
  return (
    <View style={{backgroundColor:'#FFFFFF'}}>
      <HeaderText>Description</HeaderText>
    </View>
  );
};

export const HoursBlock = () => {
  return (
    <View style={{ backgroundColor: '#FFFFFF' }}>
      <HeaderText>Hours</HeaderText>
    </View>

  )
}