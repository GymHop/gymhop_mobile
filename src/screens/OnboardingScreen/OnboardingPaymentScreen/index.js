import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../../hocs/screen';

import OnboardingPaymentContainer from './containers/OnboardingPaymentContainer';

export const OnboardingPaymentScreen = screen(
  props => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //   navigation.navigate('main');
    // };
    return <OnboardingPaymentContainer />;
  },
  {
    noHeader: true,
  },
);
