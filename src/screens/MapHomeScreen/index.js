import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../hocs/screen';

import {Map1ScreenContainer} from './containers/Map1ScreenContainer';

export const Map1Screen = screen(
  props => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //   navigation.navigate('main');
    // };
    return <Map1ScreenContainer />;
  },
  {
    noHeader: true,
  },
);
