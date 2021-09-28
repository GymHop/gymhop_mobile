import React, {useEffect, useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {useIsFocused} from '@react-navigation/core';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';

const HeaderText = styled.Text`
  font-weight: 700;
  height: 26px;
  font-size: 21px;
  margin: 16px;
`;

export const ProfilePhoto = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const navigateToCamera = () => {
    navigation.navigate('camera');
  }

  return (
    <View
      style={{
        marginTop: 16,
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
        paddingBottom: 35,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <HeaderText>Profile Picture</HeaderText>
          <Text style={{...styles.fontText, left: 31, fontSize: 16}}>
            Upload new photo
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Image
            source={require('../../../assets/icons/userBlank.png')}
            style={{width: 67, height: 67}}
          />
          <TouchableOpacity onPress={() => navigateToCamera()}>
            <Image
              source={require('../../../assets/icons/user.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
