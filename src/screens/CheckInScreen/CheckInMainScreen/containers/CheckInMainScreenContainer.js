import React, {useEffect} from 'react';
import {CheckInMainScreenView} from '../components/CheckInMainScreenView';

const CheckInMainScreenContainer = ({userData}) => {
  return <CheckInMainScreenView userData={userData}/>;
};

export default CheckInMainScreenContainer;
