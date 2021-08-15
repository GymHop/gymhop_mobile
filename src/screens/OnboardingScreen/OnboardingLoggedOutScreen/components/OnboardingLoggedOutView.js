import {OnboradingOneView} from '../../OnboardingOneScreen/components/OnboardingOneView';

import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../../../components';
import {PrimaryButtonTransparent} from '../../../../components/buttons';
import {AuthContext} from '../../../../context/useAuth';

export const OnboardingLoggedOutView = () => {
  const navigation = useNavigation();
  const user = useContext(AuthContext);

  useEffect(() => {
    console.log(user.getUser());
  }, []);

  function navigateToLogin() {
    navigation.navigate('auth');
  }
  function navigateToSignUp() {
    navigation.navigate('');
  }
  return (
    <>
      <OnboradingOneView />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text={'GET STARTED'}
          onPress={() => navigateToSignUp()}
        />
        <View style={{padding: 10}}></View>
        <PrimaryButtonTransparent
          text={'I ALREADY HAVE AN ACCOUNT'}
          onPress={() => navigateToLogin()}
        />
        <View style={{padding: 10}}></View>
        <Text style={styles.terms}>
          By signing up to GymHop you agree to our terms
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '95%',
    position: 'absolute',
    bottom: 80,
  },
  terms: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});
