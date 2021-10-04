import React, {useEffect} from 'react';
import {CheckInScreenView} from '../components/CheckInScreenView';
import {withAuth} from '../../../../context/useAuth';

const CheckInScreenContainer = props => {
  return <CheckInScreenView />;
};

export default withAuth(CheckInScreenContainer);
