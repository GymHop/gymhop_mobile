import React from 'react';

import { screen } from '../../hocs/screen';

import LoginScreenContainer from './containers/LoginScreenContainer';

export const LoginScreen = screen(
  props => <LoginScreenContainer />
);
