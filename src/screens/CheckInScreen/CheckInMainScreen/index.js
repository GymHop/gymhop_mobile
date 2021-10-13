import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../../hocs/screen';

import CheckInMainScreenContainer from './containers/CheckInMainScreenContainer';

export const CheckInMainScreen = screen(
  props => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //   navigation.navigate('main');
    // };
    return <CheckInMainScreenContainer />;
  },
  {
    noHeader: true,
  },
);
