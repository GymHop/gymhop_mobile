import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../../hocs/screen';

import OnboardingOneContainer from './containers/OnboardingOneContainer';

export const OnboardingOneScreen = screen(
  props => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //   navigation.navigate('main');
    // };
    return <OnboardingOneContainer />;
  },
  {
    noHeader: true,
  },
);
