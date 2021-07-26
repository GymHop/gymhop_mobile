import React from 'react';
import {CommonActions} from '@react-navigation/native';
import SplashScreenContainer from './containers/SplashScreenContainer';
import { screen } from '../../hocs/screen';

export const SplashScreen = screen(
  props => {
    const handleNavigation = () => {
      props.navigation.navigate('auth');
    };
    return <SplashScreenContainer onNavigation={handleNavigation} />;
  },
  {
    noHeader: true,
  },
);
