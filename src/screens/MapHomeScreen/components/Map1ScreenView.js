import {
  Button,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {DrawerActions} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {Map} from '../../../components/map';
import {Marker} from 'react-native-maps';
import {Measurements} from '../../../utils';
import PremIcon from '../../../assets/icons/mapMarkerPremium.png';
import {Res} from '../../../resources';
import StanIcon from '../../../assets/icons/mapMarkerStandard.png';
import styled from 'styled-components/native';

function DrawerButton({navigation}) {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.dispatch.toggleDrawer()}>
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
  const [region, setRegion] = useState({
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
          <Image source={require('../../../assets/images/logos/GHLogo.png')} />
        </View>
      </View>
      <Container style={styles.map}>
        <Map
          latitude={region.latitude}
          longitude={region.longitude}
          latitudeDelta={region.latitudeDelta}
          longitudeDelta={region.longitudeDelta}
          region={region}
          setRegion={setRegion}
        />
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
    top: 55,
    left: 110,
  },
  ham: {
    top: 67,
    left: 30,
  },
});
