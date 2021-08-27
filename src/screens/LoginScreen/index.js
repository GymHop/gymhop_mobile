import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {screen} from '../../hocs/screen';

import LoginScreenContainer from './containers/LoginScreenContainer';

export const LoginScreen = screen(
  props => {
    const navigation = useNavigation();
    const handleLogin = () => {
      navigation.navigate('main');
    };
    return <LoginScreenContainer onLogin={handleLogin} />;
  },
  {
    noHeader: true,
  },
);

export const SignupScreen = screen(
  props => {
    const navigation = useNavigation();
    const handleLogin = () => {
      navigation.navigate('map1');
    };
    return <LoginScreenContainer onLogin={handleLogin} signup={true} />;
  },
  {
    noHeader: true,
  },
);
