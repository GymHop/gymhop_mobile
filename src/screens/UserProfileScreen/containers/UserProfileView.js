import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView} from 'react-native';
import {ProfileDetails} from '../components/ProfileDetails';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {ProfilePhoto} from '../components/ProfilePhoto';
import {MiddleNavigation} from '../components/MiddleNavigation';
import {ProfileHeader} from '../components/ProfileHeader';

const TopView = styled.View`
  align-items: center;
  background-color: #ffffff;
`;
const WarningBox = styled.View`
  background-color: 'rgba(245, 83, 73, 0.28)';
  height: 80px;
  justify-content: space-evenly;
  align-items: center;
`;
const WarningText = styled.Text`
  font-weight: 600;
`;
const ScrollViewWithColor = styled.ScrollView`
  background-color: #f8f8f8;
`;

const ProfileImage = styled.Image`
  margin-top: 14px;
`;

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
});

export const UserProfileView = ({userData, token}) => {
  const [profileEmpty, setProfileEmpty] = useState(null);

  const checkProfileEmpty = () => {
    if (userData.first_name && userData.last_name && userData.email) {
      setProfileEmpty(false);
    }
  };
  useEffect(() => {
    console.log('ALDKMFLAKSMDF', userData)
    checkProfileEmpty();
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollViewWithColor>
          <TopView>
            <ProfileImage
              source={require('../../../assets/icons/userBlank.png')}
            />
          </TopView>

          <ProfileHeader userData={userData} />

          {profileEmpty && (
            <WarningBox>
              <Image source={require('../../../assets/icons/danger.png')} />
              <WarningText style={styles.fontText}>
                Please update details for profile completion
              </WarningText>
            </WarningBox>
          )}

          <MiddleNavigation
            gymProfile={false}
            userData={userData}
            token={token}
          />
        </ScrollViewWithColor>
      </SafeAreaView>
    </>
  );
};
