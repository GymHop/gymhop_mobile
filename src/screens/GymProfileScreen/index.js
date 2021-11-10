import React, {useContext} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from 'react-query';
import axios from 'axios';
import {AuthContext} from '../../context/useAuth';
import {GymProfileContainer} from './containers/GymProfileContainer.js';

export const GymProfileScreen = () => {
  const auth = useContext(AuthContext);
  const {data, error, isLoading, isError, isSuccess} = useQuery(
    'user',
    async () => {
      const response = await axios.get(
        'https://gymhop-api-staging.herokuapp.com/api/v1/gyms/1',
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
    <SafeAreaView>
      {isLoading && <Text>Loading...</Text>}

      {isError && <Text>Error: {error.message}</Text>}

      {isSuccess && <GymProfileContainer gymData={data} />}
    </SafeAreaView>
  );
};
