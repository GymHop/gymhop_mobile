import React from 'react';
import {View, Text} from 'react-native';
import {HeaderText} from '../../UserProfileScreen/components/ProfileDetails';

export const DescriptionBlock = ({gymData}) => {
  return (
    <>
      {gymData.description && (
        <View style={{backgroundColor: '#FFFFFF', marginBottom: 10}}>
          <HeaderText>Description</HeaderText>
          <Text style={{marginTop: -10, margin: 16}}>
            {gymData.description}
          </Text>
        </View>
      )}
    </>
  );
};
