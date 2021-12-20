import React from 'react';
// import {NewProfileVisits} from '../components/NewProfileVisits';
// import {NewProfileStats} from '../components/NewProfileStats';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';

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

export const NewProfileMonthly = props => {
  return (
    <>
      <View style={{paddingTop: 36, paddingBottom: 36}}>
        <HeaderContainer>
          <HeaderText style={styles.fontText}>Monthly Goal</HeaderText>
        </HeaderContainer>
        <Row style={styles.box}>
          <View style={styles.logo}>
            <Image
              source={require('../../../../assets/icons/goldHopper.png')}
              style={{width: 36, height: 36}}
            />
          </View>
          <View style={styles.info}>
            <View style={{marginRight: 30}}>
              <Text style={styles.title}>Gold Hopper</Text>
              <Text style={styles.subtitle}>4 workouts per week,16 month</Text>
            </View>
          </View>
          <View style={styles.chevrone}>
            <Image
              source={require('../../../../assets/icons/expand.png')}
              style={{width: 23, height: 14}}
            />
          </View>
        </Row>
      </View>

      <View style={{paddingBottom: 36}}>
        <HeaderContainer>
          <HeaderText style={styles.fontText}>Monthly Progress</HeaderText>
        </HeaderContainer>
        <View style={styles.barMain}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 343,
    height: 69,
    backgroundColor: '#D4F8E5',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 13,
  },
  subtitle: {
    marginTop: 5,
    color: '#000000',
  },
  logo: {
    height: 36,
    width: 36,
    alignSelf: 'center',
    marginRight: 15,
  },
  chevrone: {
    alignSelf: 'center',
  },
});
