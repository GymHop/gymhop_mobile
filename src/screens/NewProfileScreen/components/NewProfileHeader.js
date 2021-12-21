import React from 'react';
// import {NewProfileScreenView} from './components/NewProfileScreenView';
import {StyleSheet, Image, Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const UserHeader = styled.View`
  align-items: center;
  padding-bottom: 10px;
  background-color: #ffffff;
  margin-top: 49;
`;
const LocationBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const SmallIcon = styled.Image`
  width: 20px;
  height: 25px;
`;

const widthSc = Dimensions.get('window').width + 66;
const heightSc = widthSc / 2;
const radius = heightSc / (heightSc / 2);

export const NewProfileHeader = props => {
  return (
    <>
      <LinearGradient
        colors={['#CAF4DC', '#00CF58']}
        start={{x: 0.0, y: 0.9}}
        end={{x: 0, y: 0}}
        style={styles.container}>
        <Image
          style={styles.gymhoplogo}
          source={require('../../../assets/images/logos/GHLogo.png')}
        />
        <Image
          source={require('../../../assets/images/JohnSmith.jpg')}
          style={styles.avatar}
        />
      </LinearGradient>
      <UserHeader>
        <Text style={styles.profileTitle}>John Smith</Text>
        <LocationBlock>
          <SmallIcon
            source={require('../../../assets/icons/locationpin.png')}
          />
          <Text style={styles.location}>New York City, NY</Text>
        </LocationBlock>
      </UserHeader>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: heightSc,
    width: widthSc,
    marginLeft: -33,
    marginTop: -60,
    paddingTop: 60,
    borderRadius: radius,
  },
  gymhoplogo: {
    width: 180,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 49,
  },
  avatar: {
    width: 99,
    height: 99,
    position: 'absolute',
    top: 175,
    zIndex: 9,
    borderRadius: 50,
  },
  profileTitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontWeight: '700',
    fontSize: 28,
    padding: 8,
  },
  location: {
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#727272',
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
});
