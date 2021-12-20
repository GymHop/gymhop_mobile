import React, {useState, useEffect} from 'react';
import {GymHeader} from '../components/GymHeader.js';
import {MiddleNavigation} from '../../UserProfileScreen/components/MiddleNavigation.js';
import {GymInfoBlock} from '../components/GymInfoBlock.js';
import {ScrollView} from 'react-native-gesture-handler';
import {HoursBlock} from '../components/HoursBlock.js';
import {ProfileMap} from '../components/ProfileMap.js';
import {DescriptionBlock} from '../components/DescriptionBlock';
import * as geolib from 'geolib';
import Geolocation from 'react-native-geolocation-service';
import {GymPhotos} from '../components/GymPhotos.js';
import { GymMainTab } from '../components/GymMainTab.js';


export const GymProfileContainer = ({gymData, userData}) => {
  const [distance, setDistance] = useState(null);
  const getLocationDistance = () => {
    Geolocation.getCurrentPosition(
      position => {
        let meters = geolib.getDistance(
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          {latitude: gymData.latitude, longitude: gymData.longitude},
        );
        let miles = geolib.convertDistance(meters, 'mi');
        setDistance(miles.toFixed(1));
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    getLocationDistance();
  }, []);

  return (
    <ScrollView>
      <GymPhotos gymData={gymData} />
      <GymHeader
        gymData={gymData}
        distance={`${distance} miles away`}
        tier={gymData.tier}
        userData={userData}
      />
      <MiddleNavigation gymProfile={true} />
      <GymMainTab gymData={gymData} distance={distance} />
    </ScrollView>
  );
};
