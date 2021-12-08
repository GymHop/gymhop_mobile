import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';
import {GymProfileContainer} from './containers/GymProfileContainer.js';
import {AuthContext} from '../../#root/AuthProvider';
import {useRoute} from '@react-navigation/core';


export const GymProfileScreen = () => {
  const route = useRoute();
  const {id} = route.params;
  const userContext = useContext(AuthContext);
  const userData = userContext.user;

  
  const {data, error, isLoading, isError, isSuccess} = useQuery(
    'gym',
    async () => {
      if (id) {
        const response = await axios.get(
          `https://gymhop-api-staging.herokuapp.com/api/v1/gyms/${id}`,
          );
          return response.data.data;
      }
    }
  );

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}

      {isError && <Text>Error: {error.message}</Text>}

      {isSuccess && <GymProfileContainer gymData={data} userData={userData} />}
    </View>
  );
};
