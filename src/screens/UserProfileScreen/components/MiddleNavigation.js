import React, {useEffect, useContext, useState} from 'react';
import {Text, Image, View} from 'react-native';
import styled from 'styled-components/native';
import {ProfilePhoto} from './ProfilePhoto';
import {ProfileDetails} from './ProfileDetails';

const icon1 = {
  gym: require('../../../assets/icons/locationPinBasic.png'),
  gymActive: require('../../../assets/icons/locationPinGreen.png'),
  user: require('../../../assets/icons/account.png'),
  userActive: require('../../../assets/icons/accountGreen.png'),
};
const icon2 = {
  gym: require('../../../assets/icons/amenities.png'),
  gymActive: require('../../../assets/icons/amenitiesGreen.png'),
  user: require('../../../assets/icons/activity.png'),
  userActive: require('../../../assets/icons/activityGreen.png'),
};
const icon3 = {
  gym: require('../../../assets/icons/reviews.png'),
  gymActive: require('../../../assets/icons/reviewsGreen.png'),
  user: require('../../../assets/icons/membership.png'),
  userActive: require('../../../assets/icons/membershipGreen.png'),
};

const MidNavContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  border-top-color: #cdcdcd;
  border-top-width: 1;
  border-bottom-color: #cdcdcd;
  border-bottom-width: 1;
  padding: 10px;
`;
const MidNavTab = styled.TouchableOpacity`
  align-items: center;
`;

const MidNavTextActive = styled.Text`
  color: #00c288;
`;

const MidNavText = styled.Text`
  color: #454545;
`;

export const MiddleNavigation = props => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <MidNavContainer>
        <MidNavTab onPress={() => setActiveTab(1)}>
          {props.gymProfile ? (
            activeTab === 1 ? (
              <Image source={icon1.gymActive} />
            ) : (
              <Image source={icon1.gym} />
            )
          ) : activeTab === 1 ? (
            <Image source={icon1.userActive} />
          ) : (
            <Image source={icon1.user} />
          )}
          {activeTab === 1 ? (
            <MidNavTextActive>
              {props.gymProfile ? 'Location' : 'Account'}
            </MidNavTextActive>
          ) : (
            <MidNavText>{props.gymProfile ? 'Location' : 'Account'}</MidNavText>
          )}
        </MidNavTab>

        <MidNavTab onPress={() => setActiveTab(2)}>
          {props.gymProfile ? (
            activeTab === 2 ? (
              <Image source={icon2.gymActive} />
            ) : (
              <Image source={icon2.gym} />
            )
          ) : activeTab === 2 ? (
            <Image source={icon2.userActive} />
          ) : (
            <Image source={icon2.user} />
          )}
          {activeTab === 2 ? (
            <MidNavTextActive>
              {props.gymProfile ? 'Amenities' : 'Activity'}
            </MidNavTextActive>
          ) : (
            <MidNavText>
              {props.gymProfile ? 'Amenities' : 'Activity'}
            </MidNavText>
          )}
        </MidNavTab>

        <MidNavTab onPress={() => setActiveTab(3)}>
          {props.gymProfile ? (
            activeTab === 3 ? (
              <Image source={icon3.gymActive} />
            ) : (
              <Image source={icon3.gym} />
            )
          ) : activeTab === 3 ? (
            <Image source={icon3.userActive} />
          ) : (
            <Image source={icon3.user} />
          )}
          {activeTab === 3 ? (
            <MidNavTextActive>
              {props.gymProfile ? 'Reviews' : 'Membership'}
            </MidNavTextActive>
          ) : (
            <MidNavText>
              {props.gymProfile ? 'Reviews' : 'Membership'}
            </MidNavText>
          )}
        </MidNavTab>
      </MidNavContainer>

      <View>
        {!props.gymProfile && activeTab === 1 && (
          <>
            <ProfileDetails userData={props.userData} token={props.token} />
            <ProfilePhoto />
          </>
        )}
        {!props.gymProfile && activeTab === 2 && (
          <Text>User Activity Page</Text>
        )}
        {!props.gymProfile && activeTab === 3 && (
          <Text>User Membership Page</Text>
        )}
        {props.gymProfile && activeTab === 1 && <></>}
        {props.gymProfile && activeTab === 2 && <Text>User Activity Page</Text>}
        {props.gymProfile && activeTab === 3 && (
          <Text>User Membership Page</Text>
        )}
      </View>
    </>
  );
};
