import React from 'react';
import {Text, View} from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';
import {GymProfileContainer} from './containers/GymProfileContainer.js';

export const GymProfileScreen = () => {
  const {data, error, isLoading, isError, isSuccess} = useQuery(
    'gym',
    async () => {
      const response = await axios.get(
        'https://gymhop-api-staging.herokuapp.com/api/v1/gyms/1',
      );
      return response.data.data;
    },
  );

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}

      {isError && <Text>Error: {error.message}</Text>}

      {isSuccess && <GymProfileContainer gymData={data} />}
    </View>
  );
};
