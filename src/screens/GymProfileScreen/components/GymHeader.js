import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import { GymIcon } from '../../../components';
import {SecondaryButton} from '../../../components/buttons';
import { GymPhotos } from './GymPhotos';

const GymProfileHeader = styled.View`
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
`;
const LocationBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 3px;
`;
const SmallIcon = styled.Image`
  width: 13px;
  height: 20px;
`;

const TextWithIcon = styled.Text`
  color: #727272;
  font-size: 16;
  padding-left: 10;
  padding-right: 10;
`;

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
  profileTitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontWeight: '700',
    fontSize: 28,
    padding: 8,
  },
});

export const GymHeader = ({gymData, distance, rating}) => {
  return (
    <GymProfileHeader>
      <GymPhotos gymData={gymData} />
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <H2 white text={'Back'} />
      </TouchableOpacity> */}
      {/* <Image source={{uri: gymData.main_photo_url}} style={{width: '100%', height: 275, }} /> */}
      <GymIcon tier={gymData.tier} logo_url={gymData.main_photo_url} marker={false} />
      <Text style={styles.profileTitle}>{gymData.name}</Text>
      <LocationBlock>
        <SmallIcon source={require('../../../assets/icons/locationpin.png')} />
        <TextWithIcon style={styles.fontText}>{gymData.address1}</TextWithIcon>
      </LocationBlock>
      <LocationBlock>
        <SmallIcon
          source={require('../../../assets/icons/distance.png')}
          style={{height: 18, width: 11}}
        />
        <TextWithIcon style={styles.fontText}>{distance}</TextWithIcon>
      </LocationBlock>
      <LocationBlock>
        <SmallIcon
          source={require('../../../assets/icons/starGrey.png')}
          style={{height: 16, width: 16}}
        />
        <TextWithIcon style={styles.fontText}>
          {rating} (74 reviews)
        </TextWithIcon>
      </LocationBlock>
      <View style={{alignItems: 'center', marginTop: 8, marginBottom: 5}}>
        <SecondaryButton text={'See Memberships'} />
      </View>
    </GymProfileHeader>
  );
};
