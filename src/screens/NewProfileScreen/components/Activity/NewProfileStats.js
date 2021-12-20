import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

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

export const NewProfileStats = () => {
  return (
    <>
      <View>
        <HeaderContainer>
          <HeaderText style={styles.fontText}>Stats</HeaderText>
        </HeaderContainer>
        <View style={styles.box}>
          <Row>
            <View>
              <Text style={styles.title}>4</Text>
              <Text style={styles.subtitle}>
                Total workouts{'\n'} this week{' '}
              </Text>
            </View>
            <View style={{paddingLeft: 100}}>
              <Text style={styles.title}>2</Text>
              <Text style={styles.subtitle}>Different gyms{'\n'} visited </Text>
            </View>
          </Row>
          <View style={styles.dividerH}></View>
          <View style={styles.dividerW}></View>
          <Row style={{paddingTop: 17}}>
            <View style={{marginTop: 17}}>
              <Text style={styles.title}>5</Text>
              <Text style={styles.subtitle}>
                Average weekly{'\n'} workouts{' '}
              </Text>
            </View>
            <View style={{paddingLeft: 100, marginTop: 17}}>
              <Text style={styles.title}>10%</Text>
              <Text style={styles.subtitle}>
                Top percentile{'\n'} of GymHop users{' '}
              </Text>
            </View>
          </Row>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingLeft: 30,
  },
  title: {
    fontWeight: 'bold',
    height: 26,
    fontSize: 21,
  },
  subtitle: {
    marginTop: 20,
    color: '#757575',
  },
  dividerH: {
    height: 219,
    width: 1,
    borderLeftColor: '#DBDBDB',
    backgroundColor: '#DBDBDB',
    position: 'absolute',
    right: 190,
  },
  dividerW: {
    height: 1,
    width: 314,
    borderBottomColor: '#DBDBDB',
    backgroundColor: '#DBDBDB',
    position: 'absolute',
    top: 100,
    left: 30,
  },
});
