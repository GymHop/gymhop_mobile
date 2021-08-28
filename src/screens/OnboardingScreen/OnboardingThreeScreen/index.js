import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { screen } from '../../../hocs/screen';

import OnboardingThreeContainer from './containers/OnboardingThreeContainer';

export const OnboardThreeScreen = screen(
  props => {
    const navigation = useNavigation();

    return <OnboardingThreeContainer />;
  },
  {
    noHeader: true,
  },
);
