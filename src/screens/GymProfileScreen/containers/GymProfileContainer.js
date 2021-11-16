import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screen} from '../../hocs/screen.js';
import {DescriptionBlock} from '../components/DescriptionBlock.js';
import {GymHeader} from '../components/GymHeader.js';
import {MiddleNavigation} from '../../UserProfileScreen/components/MiddleNavigation.js';
import {GymInfoBlock} from '../components/GymInfoBlock.js';
import {ScrollView} from 'react-native-gesture-handler';
import {HoursBlock} from '../components/HoursBlock.js';
import {ProfileMap} from '../components/ProfileMap.js';

export const GymLocationTab = props => {
  return (
    <>
      <DescriptionBlock />
      <HoursBlock gymData={props.gymData} />
      <GymInfoBlock gymData={props.gymData} />
      <ProfileMap gymData={props.gymData} />
    </>
  );
};

export const GymProfileContainer = ({gymData}) => {
  return (
    <ScrollView>
      <GymHeader
        gymData={gymData}
        distance={'6.7mi away'}
        rating={'5.0'}
        tier={gymData.tier}
      />
      <MiddleNavigation gymProfile={true} />
      <GymLocationTab gymData={gymData} />
    </ScrollView>
  );
};
