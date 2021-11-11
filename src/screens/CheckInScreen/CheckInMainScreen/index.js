import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import { AuthContext } from '../../../context/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckInMainScreenContainer from './containers/CheckInMainScreenContainer';
import * as geolib from 'geolib'
import Geolocation from 'react-native-geolocation-service'

export const CheckInMainScreen = () => {

  // const auth = useContext(AuthContext);
  // auth.getTokenOnly()
  // auth.getToken()
  const [user, setUser] = useState(null)
  const [gymData, setGymData] = useState(null)
  const [distance, setDistance] = useState(undefined)

  const {data, error, isLoading, isError, isSuccess} = useQuery(
    'user',
    async () => {
      const token = await AsyncStorage.getItem('@token');
      // console.log(auth.token)
      const userDataResponse = await axios.get(
        'https://gymhop-api-staging.herokuapp.com/api/v1/users/me',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // this is hard coded to get the first gym, not the closest one
      const gymResponse = await axios.get(
        'https://gymhop-api-staging.herokuapp.com/api/v1/gyms/1'
      );
      return [userDataResponse.data.data, gymResponse.data.data]
    },
  );

  useEffect(() => {
    // if (isLoading) return 'null';
    // if (error) return `Error! ${error.message}`;
    if (data) {
      setUser(data[0])
      setGymData(data[1])
    }
    // console.log(data[1])
  }, [data, isLoading, error])

  useEffect(() => {
    if (distance === undefined && gymData) {
      getLocationDistance()
    }
  }, [gymData])

  const getLocationDistance = () => {
      Geolocation.getCurrentPosition(
      position => {
        console.log(position)
        let meters = geolib.getDistance(
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          {latitude: gymData?.latitude, longitude: gymData?.longitude},
        );
        let ft = geolib.convertDistance(meters, 'ft');
        setDistance(ft)
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  if (isLoading) {
    return (
      <>
        {/* This is repeated because on android there is a blue bar that covers up the first one */}
        {<Text>Loading...</Text>}
        {<Text>Loading...</Text>}
      </>
    )
  }
  else if (user?.current_tier !== null && distance <= 200) {
    return (
      <>
        {<CheckInMainScreenContainer userData={data[0]}/>}
      </>
    )
  } else if (user?.current_tier !== null && distance > 200) {
    return (
      <>
        {<Text>Filler Text</Text>}
        {<Text>Not Close Enough to Gym</Text>}
      </>
    )
  } else if (user?.current_tier === null) {
    return (
      <>
        {<Text>Filler Text</Text>}
        {<Text>Not A Member</Text>}
      </>
    )
  } else {
    return (
      <>
        {<Text>Error</Text>}
        {<Text>Error</Text>}
      </>
    )
  }
}
