import React, {useState, useRef, useEffect} from 'react';
// import {NewProfileVisits} from '../components/NewProfileVisits';
// import {NewProfileStats} from '../components/NewProfileStats';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native';

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

export const CurrentlySubscribed = props => {
  return (
    <>
      <View style={{}}>
        <View style={styles.box}>
          <View style={styles.labelTop}>
            <Text style={styles.labelFont}>Most Popular</Text>
          </View>

          <View style={styles.container}>
            <Row style={{justifyContent: 'space-between', marginTop: -5}}>
              <View>
                <Text style={styles.titleBold}>Standard</Text>
              </View>
              <View>
                <Text style={styles.priceFont}>$70</Text>
                <Text style={styles.subpriceFont}>/month</Text>
              </View>
            </Row>

            <View>
              <Row style={{marginTop: 15}}>
                <Image
                  source={require('../../../../../assets/icons/greenCheck.png')}
                  style={{width: 20, height: 15, marginTop: 5}}
                />
                <Text style={styles.text}>
                  Unlimited access to GymHop{'\n'} standard tier locations{' '}
                </Text>
              </Row>
              <Row style={{marginTop: 15}}>
                <Image
                  source={require('../../../../../assets/icons/greenCheck.png')}
                  style={{width: 20, height: 15, marginTop: 5}}
                />
                <Text style={styles.text}>
                  Subscription includes one week{'\n'} free trial
                </Text>
              </Row>
              <Row style={{marginTop: 15}}>
                <Image
                  source={require('../../../../../assets/icons/greenCheck.png')}
                  style={{width: 20, height: 15, marginTop: 5}}
                />
                <Text style={styles.text}>Instant entry upon signup</Text>
              </Row>
              <Row style={{marginTop: 15}}>
                <Image
                  source={require('../../../../../assets/icons/greenCheck.png')}
                  style={{width: 20, height: 15, marginTop: 5}}
                />
                <Text style={styles.text}>No committment - no fees</Text>
              </Row>
            </View>
          </View>
          <View style={styles.bottomLabel}>
            <Text style={styles.labelFontBot}>
              You are currently subscribed
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 312,
    height: 328,
    alignSelf: 'center',
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderColor: '#00C288',
    borderRadius: 10,
  },
  container: {
    marginLeft: 19,
    marginRight: 19,
    marginTop: 38,
  },
  labelTop: {
    width: 126,
    height: 27,
    position: 'absolute',
    backgroundColor: '#00C288',
    borderRadius: 10,
    alignSelf: 'center',
    top: -15,
  },
  labelFont: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#FFFFFF',
    alignSelf: 'center',
    height: 21,
  },
  titleBold: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#00000',
  },
  priceFont: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#00000',
    marginTop: -15,
  },
  subpriceFont: {
    fontWeight: 'normal',
    fontSize: 18,
    color: '#00000',
  },
  text: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#00000',
    marginLeft: 15,
  },
  bottomLabel: {
    height: 35,
    width: 309,
    backgroundColor: '#00C288',
    position: 'absolute',
    top: 290,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  labelFontBot: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#FFFFFF',
    alignSelf: 'center',
    height: 21,
    marginTop: 5,
  },
  paginationDots: {
    height: 13,
    width: 13,
    borderRadius: 13 / 2,
    marginLeft: 23,
  },
});
