import {inject, observer} from 'mobx-react';
import React from 'react';
import {withAuth} from '../../../context/useAuth';

import {SplashScreenView} from '../components/SplashScreenView';

const SplashScreenContainer = props => {

  return (
    <SplashScreenView
    />
  );
};

export default withAuth(SplashScreenContainer);
