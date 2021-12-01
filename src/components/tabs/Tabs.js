import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import TabsShape from './TabShape';
import { useNavigation, useRoute } from '@react-navigation/core';


const CheckInTabNavigator = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -16,
      width: 54,
      height: 54,
      borderRadius: 27,
      backgroundColor: '#00C288',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    }}
    onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export const Tabs = () => {
  const navigation = useNavigation();
  const route = useRoute();

  console.log(route.name)

  return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          zIndex: 100,
          backgroundColor: 'transparent'
        }}>
        <TabsShape  />
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('map')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -25,
            }}>
            <Image
              source={require('../../assets/icons/mapGrey.png')}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: route.name === 'map' ? '#00CF58' : '#454545',
              }}
            />
          </TouchableOpacity>
          <CheckInTabNavigator onPress={() => navigation.navigate('CheckInMain')}>
            <Image
              source={require('../../assets/icons/check.png')}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: '#F5FFF9',
              }}
            />
          </CheckInTabNavigator>
          <TouchableOpacity
            onPress={() => navigation.navigate('CheckInMain')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -25,
            }}>
            <Image
              source={require('../../assets/icons/profile.png')}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: route.name === 'UserProfile' ? '#00CF58' : '#454545',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
  );
};
