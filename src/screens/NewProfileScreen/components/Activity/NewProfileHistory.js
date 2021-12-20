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

export const NewProfileHistory = props => {
  return (
    <>
      <View style={{paddingBottom: 36}}>
        <HeaderContainer>
          <HeaderText style={styles.fontText}>History</HeaderText>
        </HeaderContainer>
        <View style={styles.box}>
          <Row style={styles.item}>
            <Text style={styles.font}>Jimbos Gym</Text>
            <Text style={{justifyContent: 'flex-end'}} style={styles.font}>
              Monday June 14 2021
            </Text>
          </Row>
        </View>
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
});
