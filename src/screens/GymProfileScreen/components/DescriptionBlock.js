import React from 'react';
import {View, Text} from 'react-native';
import {HeaderText} from '../../UserProfileScreen/components/ProfileDetails';

export const DescriptionBlock = () => {
  return (
    <View style={{backgroundColor: '#FFFFFF', marginBottom: 10}}>
      <HeaderText>Description</HeaderText>
      <Text style={{marginTop: -10, margin: 16}}>
        Jimbo’s Gym is a independent fitness facility in the heart of Brooklyn.
        It has an old school character and laid back environment with friendly
        staff.{' '}
      </Text>
    </View>
  );
};
