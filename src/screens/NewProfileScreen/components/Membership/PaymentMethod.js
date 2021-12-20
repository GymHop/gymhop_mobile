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

export const PaymentMethod = props => {
  return (
    <>
      <View style={{paddingBottom: 36, paddingTop: 20}}>
        <HeaderContainer>
          <HeaderText style={styles.fontText}>Payment Method</HeaderText>
        </HeaderContainer>
        <Row style={styles.box}>
          <Image
            source={require('../../../../assets/icons/debit.png')}
            style={{width: 30, height: 30}}
            style={styles.debit}
          />
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}>Debit Card</Text>
            <Text style={styles.subtitle}>Visa **** 1234</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/icons/keyboardArrow.png')}
              style={{width: 11, height: 16}}
              style={styles.chevrone}
              s
            />
          </TouchableOpacity>
        </Row>
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
  debit: {marginTop: 5},
  chevrone: {
    marginLeft: 176,
  },
  title: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#000000',

    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 17.64,
  },
  subtitle: {
    fontWeight: 'normal',
    fontSize: 14,
    color: '#898989',
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 17.64,
    paddingBottom: 15,
  },
});
