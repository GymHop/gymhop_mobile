import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import { AuthContext } from '../../../#root/AuthProvider';
import { api } from '../../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckInMainScreenContainer from './containers/CheckInMainScreenContainer';
import * as geolib from 'geolib'
import Geolocation from 'react-native-geolocation-service'

export const CheckInMainScreen = () => {

  const auth = useContext(AuthContext);

  const [gymData, setGymData] = useState(null)
  const [gymWaiver, setGymWaiver] = useState(false)
  const [distance, setDistance] = useState(undefined)

  useEffect(() => {
    if (distance === undefined && gymData) {
      getLocationDistance()
    }
  }, [gymData])

  useEffect(() => {
    getGymWaiverStatus()
    checkIn()
  }, [])

  const getGymWaiverStatus = () => {
    // change this from being hard coded
    api.get("/gyms/1/waiver_status")
      .then(res => setGymWaiver(res.data.data))
      .catch(e => {
        console.log(e, '###################################')
      })
  }

  const checkIn = () => {
    console.log(gymWaiver)
       api.post(
        '/check_ins',
        {
          check_in: {
            gym_id: 1,
            check_in_latitude: 37.4219983,
            check_in_longitude: -122.084,
            waiver_accepted: true
          }
        }
        )
        .then(res => console.log(res))
        .catch(e => {
          console.log(e, 'checkIn')
        })
  };

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

  return (
    <>
      {<CheckInMainScreenContainer userData={auth.user}/>}
    </>
  )
  // backend validates, react to the response
}
