import React from 'react';
import {UserProfileView} from './containers/UserProfileView';
import {useEffect, useContext} from 'react';
import {AuthContext} from '../../#root/AuthProvider';
import {DrawerNavHeader} from '../../components';

export const UserProfileScreen = () => {

  const userContext = useContext(AuthContext);
  const {userData} = userContext;

  useEffect(() => {
    console.log(userContext);
    console.log(userData)
  }, []);

  return (
    <>
      <DrawerNavHeader />

      <UserProfileView userData={userData} token={userContext.user.token} />
    </>
  );
};
