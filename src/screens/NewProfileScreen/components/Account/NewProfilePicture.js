import React, {useEffect, useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
// import {useIsFocused} from '@react-navigation/core';
// import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import {NewProfileNotification} from './NewProfileNotification';

const HeaderText = styled.Text`
  font-weight: 700;
  height: 26px;
  font-size: 21px;
  margin: 16px;
`;

const ButtonText = styled.Text`
  font-weight: 500;

  font-size: 21px;
`;

export const NewProfilePicture = () => {
  return (
    <>
      <View
        style={{
          marginTop: 16,
          backgroundColor: '#FFFFFF',
          marginBottom: 200,
          paddingBottom: 35,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <HeaderText>Profile Picture</HeaderText>
            <Text style={{...styles.fontText, left: 31, fontSize: 16}}>
              Change your photo
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Image
              source={require('../../../../assets/images/JohnSmith.jpg')}
              style={{width: 67, height: 67, borderRadius: 33}}
            />
            <TouchableOpacity>
              <Image
                source={require('../../../../assets/icons/user.png')}
                style={{width: 30, height: 30}}
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <NewProfileNotification />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </>
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
  editIcon: {
    marginRight: 25,
  },
  button: {
    width: 166,
    height: 40,
    borderRadius: 50,
    marginTop: 55,
    alignSelf: 'center',
    backgroundColor: '#DE5757',
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});
