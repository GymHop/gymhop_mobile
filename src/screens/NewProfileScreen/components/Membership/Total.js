import React, {useState, useRef, useEffect} from 'react';
// import {NewProfileVisits} from '../components/NewProfileVisits';
// import {NewProfileStats} from '../components/NewProfileStats';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  Dimensions,
} from 'react-native';
import {StandartSubcribe} from './Carousel/TrialSubscribe';
import LinearGradient from 'react-native-linear-gradient';

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

export const Total = ({tier}) => {
  return (
    <>
      <View style={{paddingBottom: 36, paddingTop: 20}}>
        <HeaderContainer>
          <HeaderText style={styles.fontText}>Total</HeaderText>
        </HeaderContainer>
        <Row style={styles.box}>
          <Text style={styles.text}>
            {tier} Membership{'\n'}
            {tier === 'standard' || tier === 'premium'
              ? 'Monthly Payments'
              : 'Weekly Payments'}
          </Text>
          {tier === 'standard' && <Text style={styles.price}>$70.00</Text>}
          {tier === 'premium' && <Text style={styles.price}>$140.00</Text>}
          {tier === 'week' && <Text style={styles.price}>$20.00</Text>}
        </Row>
        <TouchableOpacity>
          <LinearGradient colors={['#00C288', '#00CF58']} style={styles.button}>
            <Text style={styles.buttonFont}>Purchase</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'space-between',
    width: 350,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',

    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 20,
  },
  text: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 20,
    paddingBottom: 15,
    marginLeft: 28,
    textTransform: 'capitalize',
  },
  button: {
    width: 166,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 16,
    position: 'absolute',
    top: 5,
  },
  buttonFont: {
    fontWeight: 'normal',
    fontSize: 18,
    color: '#FFFFFF',
    alignSelf: 'center',
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 22.68,
  },
});
