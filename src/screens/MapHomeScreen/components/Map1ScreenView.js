import React, {useState, useEffect, useRef} from 'react';
import {
  Button,
  View,
  Text,
  ImageBackground,
  Image,
  Platform,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import {Map} from '../../../components/map';
import {Res} from '../../../resources';
import {Measurements} from '../../../utils';
import styled from 'styled-components/native';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
function DrawerButton({}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image source={require('../../../assets/icons/menu_24px.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  /* background-color: ${Res.colors.main}; */
  padding-horizontal: ${Res.spaces.md}px;
  padding-bottom: ${Measurements.safeAreaBottomInset}px;
  display: flex;
  z-index: 3;
`;

export const Map1ScreenView = props => {
  const [userRegion, setUserRegion] = useState({
    latitude: 40.709318,
    longitude: -73.990686,
    latitudeDelta: 0.068,
    longitudeDelta: 0.033,
  });

  return (
    <View style={styles.wrap}>
      <View style={styles.sample}>
        <Text style={styles.ham}>
          <DrawerButton />
        </Text>
        <View style={styles.logo}>
          <Image style={styles.gymhoplogo} source={require('../../../assets/images/logos/GHLogo.png')} />
        </View>
      </View>

      <Container style={styles.map}>
        <Map
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
          setUserRegion={setUserRegion}></Map>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    height: '100%',
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
  },
  gymhoplogo:{
    width: 180,
    height: 24,
  }
});
