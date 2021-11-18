import React from 'react';
import {View, Text} from 'react-native';
import {UserProfileView} from './containers/UserProfileView';
import {useEffect, useContext, useState} from 'react';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';
import {AuthContext} from '../../context/useAuth';
import {DrawerNavHeader} from '../../components';

export const UserProfileScreen = () => {

  const auth = useContext(AuthContext);

  const {data, error, isLoading, isError, isSuccess} = useQuery(
    'user',
    async () => {
      const response = await axios.get(
        'https://gymhop-api-staging.herokuapp.com/api/v1/users/me',
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        },
      );
      console.log(response.data.data);
      return response.data.data;
    },
  );

  return (
    <>
      <DrawerNavHeader />

      {isLoading && <Text>Loading...</Text>}

      {isError && <Text>Error: {error.message}</Text>}

      {isSuccess && <UserProfileView userData={data} token={auth.token} />}
    </>
  );
};
