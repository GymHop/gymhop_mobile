/* eslint-disable prettier/prettier */
import React, { useEffect, useContext, useState } from 'react';
import {
  Text,
  Image,
} from 'react-native';
import styled from 'styled-components/native';

const MidNavText = styled.Text`
  color: #00C288;
`;

const MidNavContainer = styled.View`
  flex-direction: row; 
  justify-content: space-around; 
  background-color: white;
  border-top-color: #CDCDCD;
  border-top-width: 1;
  border-bottom-color: #CDCDCD;
  border-bottom-width: 1;
  padding: 10px;
`;

const MidNavTab = styled.View`
  align-items: center;

`;


export const MiddleNavigation = () => {

  return (

    <MidNavContainer>
      <MidNavTab>
        <Image source={require('../../../assets/icons/account.png')} />          
        <MidNavText >Account</MidNavText>
      </MidNavTab>
      <MidNavTab>
        <Image source={require('../../../assets/icons/activity.png')} />
        <Text>Activity</Text>
      </MidNavTab>
      <MidNavTab>
        <Image source={require('../../../assets/icons/membership.png')} />
        <Text>Membership</Text>
      </MidNavTab>
    </MidNavContainer>

  );
};