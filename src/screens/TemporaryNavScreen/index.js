import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../hocs/screen';

import TempNavScreenContainer from './containers/TempNavScreenContainer';

export const TempScreen = screen(
  props => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //   navigation.navigate('main');
    // };
    return <TempNavScreenContainer />;
  },
  {
    noHeader: true,
  },
);
