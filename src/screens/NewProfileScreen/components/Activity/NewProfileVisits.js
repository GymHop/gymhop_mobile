// import {NewProfileVisits} from '../components/NewProfileVisits';
import React, {useEffect, useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {NewProfileChart} from './NewProfileChart';

const Row = styled.View`
  flex-direction: row;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-weight: 700;
  height: 26px;
  font-size: 21px;
  margin: 16px;
  margin-bottom: 20px;
`;

export const NewProfileVisits = props => {
  return (
    <>
      <View style={{marginTop: 15}}>
        <Row style={styles.box}>
          <View style={styles.itemActive}>
            <Text style={styles.textActive}>Weekly</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.text}>Monthly</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.text}>All time</Text>
          </View>
        </Row>
      </View>

      <View style={styles.calendar}>
        <Row>
          <Image
            source={require('../../../../assets/icons/chevronLeft.png')}
            style={styles.left}
          />
          <Image
            source={require('../../../../assets/icons/calendar.png')}
            style={styles.iconCalendar}
          />
          <Text style={styles.textCalendar}>June 21-28</Text>
          <Image
            source={require('../../../../assets/icons/chevronRight.png')}
            style={styles.right}
          />
        </Row>
      </View>

      <View>
        <HeaderContainer>
          <HeaderText style={styles.fontText}>Visits</HeaderText>
        </HeaderContainer>
        <View style={styles.chart}>
          <NewProfileChart />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    width: 290,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  item: {
    width: 96,
    height: 32,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  itemActive: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 96,
    height: 32,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textActive: {
    alignSelf: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#00C288',
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#757575',
    justifyContent: 'center',
    marginTop: 2,
  },
  calendar: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCalendar: {
    alignSelf: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: '#2D2D2D',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  left: {
    marginRight: 33,
  },
  right: {
    marginLeft: 33,
  },
  iconCalendar: {
    marginRight: 14,
  },
});
