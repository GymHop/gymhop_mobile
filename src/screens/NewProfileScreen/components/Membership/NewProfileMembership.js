import React, {useState, useRef, useEffect} from 'react';
// import {NewProfileVisits} from '../components/NewProfileVisits';
// import {NewProfileStats} from '../components/NewProfileStats';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import {TrialSubscribe} from './Carousel/TrialSubscribe';
import {CurrentlySubscribed} from './Carousel/CurrentlySubscribed';
import {StandartSubscribe} from './Carousel/StandartSubscribe';
import LinearGradient from 'react-native-linear-gradient';
import {PaymentMethod} from './PaymentMethod';
import {SelectPayment} from './SelectPayment';
import {PaymentInfo} from './PaymentInfo';
import {Total} from './Total';
import {PremiumSubscribe} from './Carousel/PremiumSubscribe';
import {WeekPass} from './Carousel/WeekPass';

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 19px;
`;

const Row = styled.View`
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  font-weight: 700;
  height: 26px;
  font-size: 21px;
  margin-left: 16px;
`;
export const CancelButton = styled.Text`
  width: 195px;
  height: 26px;
  font-size: 21px;
  margin-left: 16px;
  border-radius: 5px;
`;

export const NewProfileMembership = props => {
  return (
    <>
      <View style={{paddingBottom: 36, paddingTop: 20}}>
        <HeaderContainer>
          <HeaderText style={styles.fontText}>Memberships</HeaderText>
        </HeaderContainer>

        <View style={styles.carousel}>
          {/* <TrialSubscribe />
          <CurrentlySubscribed /> */}
          {/* <StandartSubscribe /> */}
          {/* <PremiumSubscribe /> */}
          {/* <WeekPass /> */}
        </View>
        <TouchableOpacity>
          <LinearGradient colors={['#00C288', '#00CF58']} style={styles.button}>
            <Text style={styles.buttonFont}>Cancel Free Trial</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.text}>
          Limit one free trial per customer. If trial has been{'\n'} used, user
          will be billed immediately upon sign up.{'\n'} When the week trial is
          up, user will be billed $70 a{'\n'} month recurring. Refund policy is
          on our website.
        </Text>

        {/* <PaymentMethod />
        <SelectPayment /> */}
        <PaymentInfo />
        <Total />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 326,
    alignSelf: 'center',

    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
  },
  item: {justifyContent: 'space-between'},
  font: {
    fontWeight: 'normal',
    fontSize: 16,
  },
  subtitle: {
    marginTop: 5,
    color: '#000000',
  },
  button: {
    width: 195,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 16,
  },
  buttonFont: {
    fontWeight: 'normal',
    fontSize: 18,
    color: '#FFFFFF',
    alignSelf: 'center',
    fontFamily: 'Plus Jakarta Sans',
  },
  text: {
    fontWeight: 'normal',
    fontSize: 14,
    color: '#000000',
    alignSelf: 'center',
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 17.64,
    paddingTop: 14,
    paddingBottom: 34,
    alignSelf: 'center',
  },
  paginationDots: {
    height: 13,
    width: 13,
    borderRadius: 13 / 2,
    marginLeft: 23,
  },
  carousel: {
    paddingBottom: 30,
  },
});
