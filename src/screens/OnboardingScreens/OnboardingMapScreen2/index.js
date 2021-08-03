import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../../hocs/screen';

import OnboardingMapScreen2Container from './containers/OnboardingMapScreen2Container';

export const OnboardingMapScreen2 = screen(
  props => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //   navigation.navigate('main');
    // };
    return <OnboardingMapScreen2Container />;
  },
  {
    noHeader: true,
  },
);
