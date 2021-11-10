import React, {useState} from 'react';
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

export const HoursBlock = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <View style={{backgroundColor: '#FFFFFF', marginBottom: 10}}>
      <HeaderText>Hours</HeaderText>
      <View style={{backgroundColor: '#CAF4DC', margin: 17, padding: 12}}>
        <Text>Sunday {}</Text>
        <Text>Monday {}</Text>
        <Text>Tuesday {}</Text>
        <Text>Wednesday {}</Text>
        <Text>Thursday {}</Text>
        <Text>Friday</Text>
        <Text>Saturday</Text>
      </View>
    </View>
  );
};
