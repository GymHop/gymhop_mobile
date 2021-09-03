import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../hocs/screen';

import CheckInScreenContainer from './containers/CheckInScreenContainer';

export const CheckInScreen = screen(
  props => {
    const navigation = useNavigation();
    return <CheckInScreenContainer />;
  },
  {
    noHeader: true,
  },
);
