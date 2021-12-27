import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../../hocs/screen';

import OnboardingTrialContainer from './containers/OnboardingTrialContainer';

export const OnboardingTrialScreen = screen(
  props => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //   navigation.navigate('main');
    // };
    return <OnboardingTrialContainer />;
  },
  {
    noHeader: true,
  },
);
