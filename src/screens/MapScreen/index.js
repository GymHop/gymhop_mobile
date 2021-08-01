import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../hocs/screen';

import MapScreenContainer from './containers/MapScreenContainer';

export const MapScreen = screen(
  props => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //   navigation.navigate('main');
    // };
    return <MapScreenContainer />;
  },
  {
    noHeader: true,
  },
);
