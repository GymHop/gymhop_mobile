import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import { Platform, View, Text } from 'react-native';
import { Res } from '../../../../resources';
import { useQuery } from 'react-query'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Measurements } from '../../../../utils';
import MapIMG from '../../../../assets/images/MapOnboardingStatic.jpg';
import { TierTile, GymIcon, GymTile } from '../../../../components';
import { LinearGradientOnboard } from '../../../../components/onboardingComponents';
import axios from 'axios'
import { AuthContext } from '../../../../context/useAuth';
import LocationPin from '../../../../assets/icons/locationpin.png'
import { CheckInMap } from '../../../../components/checkInComponents';
import Geolocation from 'react-native-geolocation-service';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding-horizontal: ${Res.spaces.md}px;
  padding-bottom: ${Measurements.safeAreaBottomInset}px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ProfilePic = styled.Image`
height: 200px;
width: 200px;
display: flex;
`;

const WelcomeText = styled.Text`
`

const CheckInText = styled.Text`
`
const StyledGymIcon = styled.Image``
const StyledGymName = styled.Text``
const StyledLocationPin = styled.Image`
  height: 14.29px;
  width: 10px`
const StyledAddress = styled.Text``;
const StyledMap = styled.View`
height: 142px;
width: 342px;`;
export const CheckInMainScreenView = ({userData}) => {
  // const [user, setUser] = useState(null)
  const [gymDetails, setGymDetails] = useState([])
  const [userRegion, setUserRegion] = useState({
    latitude: 40.709318,
    longitude: -73.990686,
    latitudeDelta: 0.068,
    longitudeDelta: 0.033,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setUserRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0068,
          longitudeDelta: 0.0033,
        })
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

  }, [])

  // const { data, error, loading } = useQuery(
  //   'user',
  //   async () => {
  //     const token = await AsyncStorage.getItem('@token');
  //     const response = await axios.get('https://gymhop-api-staging.herokuapp.com/api/v1/users/me', {
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //       },
  //     })
  //     console.log(response.data.data)
  //     setUser(response.data.data)
  //   })

  // useEffect(() => {
  //   if (loading) return 'null';
  //   if (error) return `Error! ${error.message}`;
  //   if (data) setUser(data);
  //   console.log(data)
  // }, [data, loading, error])


  return (
    <Container>
      {userData && (
        <View>
          <View>
            <View>
              <ProfilePic source={{ uri: userData.image_url }} />
            </View>
            <View>
              <WelcomeText >Welcome {userData.first_name}</WelcomeText>
              <CheckInText>Please Check In</CheckInText>
            </View>
          </View>
          <View>
            <StyledGymIcon source={GymIcon} />
            <StyledGymName>{gymDetails.name}</StyledGymName>
            <View>
              <StyledLocationPin source={LocationPin} />
              <StyledAddress>{gymDetails.address1}/</StyledAddress>
            </View>
          </View>
          <StyledMap>
            <CheckInMap
              initialRegion={{
                latitude: 40.709318,
                longitude: -73.990686,
                latitudeDelta: 0.068,
                longitudeDelta: 0.033,
              }}
              latitude={userRegion.latitude}
              longitude={userRegion.longitude}
              latitudeDelta={userRegion.latitudeDelta}
              longitudeDelta={userRegion.longitudeDelta}
              userRegion={userRegion}
              setUserRegion={setUserRegion}></CheckInMap>
          </StyledMap>

        </View>
      )}
    </Container>
  );
};
