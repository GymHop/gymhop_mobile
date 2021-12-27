import styled from 'styled-components/native';
import React, {useState} from 'react';
import {PrimaryButton} from '../../../../components';
import {PrimaryButtonTransparent} from '../../../../components/buttons/PrimaryButtonTransparent';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {OnboardingPaymentView} from '../../OnboardingPaymentScreen/components/OnboardingPaymentView';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OnboardingTrialView = props => {
  const [phone, setPhone] = useState('');
  const [trial, setTrial] = useState(false);
  // const navigation = useNavigation();

  // function navigateToMap() {
  //   navigation.navigate('map');
  // }

  return trial ? (
    <OnboardingPaymentView />
  ) : (
    <ImageBackground
      style={{
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
        backgroundColor: '#1C1C1C80',
      }}
      source={require('../../../../assets/images/LoginBackground.jpeg')}>
      <View style={styles.container}>
        <Row style={{marginTop: 50}}>
          <Image
            source={require('../../../../assets/icons/check.png')}
            resizeMode="contain"
            style={{
              width: 28,
              height: 28,
              tintColor: '#00C288',
              marginRight: 25,
            }}
          />
          <Text style={styles.paragraph}>Verification Success!</Text>
        </Row>
        <View style={{marginTop: 30}}>
          <Text style={styles.font}>Would you like to try GymHop</Text>
          <Text style={styles.subfont}> free for one week?</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.fontBox}>
            Get a free week access to{'\n'} Standard Tier gyms
          </Text>
          <Text style={styles.fontBox}>
            At the end of the week, your card{'\n'} will be charged $70/month
          </Text>
          <Text style={styles.fontBox}>Cancel anytime to avoid charges </Text>
        </View>

        <View style={{marginTop: 106}}>
          <PrimaryButton
            text={'CLAIM FREE TRIAL'}
            onPress={() => {
              // getStarted();
              setTrial(true);
            }}
          />
        </View>
        <View style={{marginTop: 23}}>
          <PrimaryButtonTransparent
            text={'SKIP FOR NOW'}
            onPress={() => {
              // getStarted();
              navigateToMap();
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  font: {
    fontSize: 21,
    fontWeight: '500',
    fontFamily: 'PlusJakartaSans-Regular',
    color: 'white',
  },
  subfont: {
    fontSize: 21,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Regular',
    color: 'white',
  },
  paragraph: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  fontBox: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    fontFamily: 'PlusJakartaSans-Regular',
    marginTop: 25,
    marginLeft: 15,
  },
  box: {
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderColor: '#00C288',
    borderRadius: 10,
    backgroundColor: '#1E1E1E80',
    justifyContent: 'center',
    marginTop: 25,
    paddingBottom: 25,
  },
});
