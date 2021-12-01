import React from 'react';
import {Image, Text} from 'react-native';
import {MidNavContainer, MidNavTab, MidNavText} from '../../UserProfileScreen/components/MiddleNavigation';

export const GymNav = () => {
  return (
    <MidNavContainer>
      <MidNavTab>
        <Image source={require('../../../assets/icons/locationPinGreen.png')} />
        <MidNavText>Location</MidNavText>
      </MidNavTab>
      <MidNavTab>
        <Image source={require('../../../assets/icons/amenities.png')} />
        <Text>Amenities</Text>
      </MidNavTab>
      <MidNavTab>
        <Image source={require('../../../assets/icons/reviews.png')} />
        <Text>Reviews</Text>
      </MidNavTab>
    </MidNavContainer>
  );
};
