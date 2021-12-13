import React from 'react';
import {UserProfileView} from './containers/UserProfileView';
import {useEffect, useContext} from 'react';
import {AuthContext} from '../../#root/AuthProvider';
import {DrawerNavHeader} from '../../components';

export const UserProfileScreen = () => {

  const userContext = useContext(AuthContext);
  const userData = userContext.user;


  return (
    <>
      <DrawerNavHeader />

      <UserProfileView userData={userData} />
    </>
  );
};
