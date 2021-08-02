import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../../hocs/screen';

import OnboardingMapScreen1Container from './containers/OnboardingMapScreen1Container';

export const OnboardingMapScreen1 = screen(
  props => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //   navigation.navigate('main');
    // };
    return <OnboardingMapScreen1Container />;
  },
  {
    noHeader: true,
  },
);
