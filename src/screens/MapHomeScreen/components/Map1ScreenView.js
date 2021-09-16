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
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from 'react-native-elements';
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
        <Image
          style={{marginLeft: 15}}
          source={require('../../../assets/icons/menu_24px.png')}
        />
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
      <Header
        leftComponent={<DrawerButton />}
        centerComponent={
          <Image
            style={styles.gymhoplogo}
            source={require('../../../assets/images/logos/GHLogo.png')}
          />
        }
        containerStyle={{
          paddingTop: '10%',
          height: 125,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 9,
        }}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#CAF4DC', '#00CF58'],
          useAngle: true,
          angle: 175,
          angleCenter: {x: 0.98, y: 1.3},
        }}
      />

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
});
