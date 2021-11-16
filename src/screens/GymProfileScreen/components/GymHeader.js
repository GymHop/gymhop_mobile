import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import {GymIcon} from '../../../components';
import {SecondaryButton} from '../../../components/buttons';
import {GymPhotos} from './GymPhotos';

const GymProfileHeader = styled.View`
  align-items: center;
  background-color: #ffffff;
`;
export const LocationBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 3px;
`;
export const SmallIcon = styled.Image`
  width: 13px;
  height: 20px;
`;
export const TextWithIcon = styled.Text`
  color: #727272;
  font-size: 16;
  padding-left: 10;
  padding-right: 10;
`;
const PremiumBadgeContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-top: 8px;
  margin-right: 26px;
`;

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
  profileTitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontWeight: '700',
    fontSize: 28,
    padding: 5,
    marginTop: 50,
  },
});

export const GymHeader = ({gymData, distance, rating, tier}) => {
  return (
    <GymProfileHeader>
      <GymPhotos gymData={gymData} />
      <View style={{position: 'absolute', top: 235}}>
        <GymIcon
          tier={gymData.tier}
          logo_url={gymData.main_photo_url}
          marker={false}
        />
      </View>

      {tier === 'premium' ? (
        <PremiumBadgeContainer>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../../assets/icons/premiumBadge.png')} />
            <Text style={{color: '#F1CC52'}}>Premium</Text>
          </View>
        </PremiumBadgeContainer>
      ) : null}

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
      <View style={{alignItems: 'center', marginTop: 8, marginBottom: 16}}>
        <SecondaryButton text={'See Memberships'} />
      </View>
    </GymProfileHeader>
  );
};
