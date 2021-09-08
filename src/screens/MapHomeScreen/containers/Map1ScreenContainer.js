import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {withTesting} from '../../../context/useTesting';
import {screen} from '../../../hocs/screen';

import {Map1ScreenView} from '../components/Map1ScreenView';

export const Map1ScreenContainer = screen(
  props => {
    const navigation = useNavigation();
    return <Map1ScreenView />;
  },
  {
    noHeader: true,
  },
);


