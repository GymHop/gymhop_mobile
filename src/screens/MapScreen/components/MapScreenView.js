import React, {useEffect, useState, useContext} from 'react';

import {View, StyleSheet} from 'react-native';
import {Map} from '../../../components/map';
import { MapListButton } from '../../../components/buttons';
import {Res} from '../../../resources';
import {Measurements} from '../../../utils';
import styled from 'styled-components/native';
import {DrawerNavHeader} from '../../../components';
import { useQuery } from 'react-query'
import axios from 'axios'
import { GymListTile } from '../../../components/individualGymComponents';
import { Tabs } from '../../../components/tabs/Tabs';

import Geolocation from 'react-native-geolocation-service';


const Container = styled.KeyboardAvoidingView`
  flex: 1;
  /* background-color: ${Res.colors.main}; */
  padding-horizontal: ${Res.spaces.md}px;
  padding-bottom: ${Measurements.safeAreaBottomInset}px;
  display: flex;
  z-index: 3;
`;

const ContainerList = styled.ScrollView`
  z-index:3;
  display:flex;
  `

export const MapScreenView = props => {
  const [userRegion, setUserRegion] = useState({
    latitude: 40.709318,
    longitude: -73.990686,
    latitudeDelta: 0.068,
    longitudeDelta: 0.033,
  });
  const [userCoords, setUserCoords] = useState({
    latitude: 40.709318,
    longitude: -73.990686,
    latitudeDelta: 0.068,
    longitudeDelta: 0.033,
  });
  const [icon, setIcon] = useState('list')
  const [markers, setMarkers] = useState([])

  // get user's geolocation & setUserCoords lat/lng
  const getUserCoords = () => {
    Geolocation.getCurrentPosition(position => {
        setUserCoords({
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude,
          latitudeDelta: 0.068,
          longitudeDelta: 0.033,
        })
    }, error => {
      console.log(error.code, error.message);
    },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  useEffect(() => {
    getUserCoords();
  }, []);


  const { data, error, isLoading } = useQuery(
    'gyms',
    async () => {
      const response = await axios.get(`https://gymhop-api-staging.herokuapp.com/api/v1/gyms?latitude=${userCoords.latitude}&longitude=${userCoords.longitude}`)
      return response.data.data
    }
  );

    useEffect(() => {
      if (data) setMarkers(data);
    }, [data, isLoading, error])


  return (
    <View style={styles.wrap}>
      <DrawerNavHeader />
      <MapListButton icon={icon} setIcon={setIcon} />
      {icon == 'list' ?
      <Container style={styles.map}>
      <Map
        markers={markers}
        initialRegion={{
          latitude: userCoords.latitude,
          longitude: userCoords.longitude,
          latitudeDelta: 0.068,
          longitudeDelta: 0.033,
        }}
        latitude={userRegion.latitude}
        longitude={userRegion.longitude}
        latitudeDelta={userRegion.latitudeDelta}
        longitudeDelta={userRegion.longitudeDelta}
        userRegion={userRegion}
        setUserRegion={setUserRegion}
        userLatitude={userCoords.latitude}
        userLongitude={userCoords.longitude}
        ></Map>
      </Container>
      :<>
      <ContainerList contentContainerStyle={styles.center} >
        {markers.map( (gym, i) => {
          gym.openClosed='open'
          // gym.rating='5.0'
          // gym.distance='6.7mi'
          return <GymListTile key={gym.id} gym={gym} i={i} userRegion={userRegion} />
        })}
        <View style={{width:300, height:100}} />
      </ContainerList>
      </>
      }
      <Tabs />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  headerWrap: {
    flex: 1,
  },
  sample: {
    backgroundColor: '#00C29E',
    height: '12%',
  },
  logo: {
    position: 'absolute',
    top: 62,
    left: 107,
  },
  ham: {
    top: 67,
    left: 30,
    marginTop: '15%',
  },
  gymhoplogo: {
    width: 180,
    height: 24,
  },
  center :{
    alignItems: 'center',
    // justifyContent: 'center',
  }
});
