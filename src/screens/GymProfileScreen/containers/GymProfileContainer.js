import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screen} from '../../hocs/screen.js';
import {DescriptionBlock, HoursBlock} from '../components/DescriptionBlock.js';
import {GymHeader} from '../components/GymHeader.js';
import {GymNav} from '../components/GymNav.js';
import {useQuery} from 'react-query';
import axios from 'axios';
import {AuthContext} from '../../context/useAuth';

export const GymProfileContainer = props => {
  return (
    <>
      <GymHeader gymData={props} />
      <GymNav />
      <DescriptionBlock />
      <HoursBlock />
    </>
  );
};
