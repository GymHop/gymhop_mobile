import React, {useState} from 'react';
import styled from 'styled-components/native';
import {
    View,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    Dimensions,
    Image,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';


  export function MapListButton(props) {

        const changeIcon = () => {
            props.icon == 'list' ? props.setIcon('mapGrey') : props.setIcon('list')
        }

      return (
    <TouchableOpacity
    onPress={changeIcon}
    style={{
        width: 48,
        height: 48,
        position: 'absolute',
        left: '83%',
        top: 115,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        zIndex: 4
      }}>
        <View
            style={{
              width: 48,
              height: 48,
              position: 'relative',
            }}>
        <Image
            style={{
                position:'absolute',
                bottom:10,
                left:10
            }}
            source={props.icon == 'list' ?
                        require('../../assets/icons/list.png'):
                        require('../../assets/icons/mapGrey.png') } />
        </View>
    </TouchableOpacity>
    )
  }
