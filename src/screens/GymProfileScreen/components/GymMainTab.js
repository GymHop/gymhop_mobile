import React, { useState, useEffect } from 'react';
import { GymInfoBlock } from '../components/GymInfoBlock.js';
import { ScrollView } from 'react-native-gesture-handler';
import { HoursBlock } from '../components/HoursBlock.js';
import { ProfileMap } from '../components/ProfileMap.js';
import { DescriptionBlock } from '../components/DescriptionBlock';

export const GymMainTab = props => {

  return (
    <>
      <DescriptionBlock gymData={props.gymData} />
      {props.gymData.gym_schedules.length !== 0 && <HoursBlock gymData={props.gymData} />}
      <GymInfoBlock gymData={props.gymData} />
      <ProfileMap gymData={props.gymData} distance={props.distance} />
    </>
  );
};