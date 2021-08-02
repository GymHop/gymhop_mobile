import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../hocs/screen';

import OndoardSliderContainer from './containers/OnboardSliderContainer';

export const OndoardSliderScreen = screen(
  props => {
    const navigation = useNavigation();

    return <OndoardSliderContainer />;
  },
  {
    noHeader: true,
  },
);
