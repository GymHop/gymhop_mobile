import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';
import {GymProfileContainer} from './containers/GymProfileContainer.js';
import {AuthContext} from '../../context/useAuth';

export const GymProfileScreen = ({gymId}) => {
  const {data, error, isLoading, isError, isSuccess} = useQuery(
    'gym',
    async () => {
      const response = await axios.get(
        'https://gymhop-api-staging.herokuapp.com/api/v1/gyms/1',
      );
      return response.data.data;
    },
  );

  const auth = useContext(AuthContext);

  const {userData, loading} = useQuery('user', async () => {
    const response = await axios.get(
      'https://gymhop-api-staging.herokuapp.com/api/v1/users/me',
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      },
    );
    return response.data.data;
  });

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}

      {isError && <Text>Error: {error.message}</Text>}

      {isSuccess && <GymProfileContainer gymData={data} userData={userData} />}
    </View>
  );
};
