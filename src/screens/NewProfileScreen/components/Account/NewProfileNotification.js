import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import {StyleSheet, Switch} from 'react-native';

export const HeaderText = styled.Text`
  font-weight: 700;
  height: 26px;
  font-size: 21px;
  margin: 16px;
  margin-bottom: 20px;
`;
const InputLabels = styled.Text`
  font-size: 16px;
  left: 34px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const DetailsContainer = styled.View`
  background-color: #ffffff;
`;
const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const IconImage = styled.Image`
  margin-right: 19px;
`;
const EditButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const NewProfileNotification = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <View style={styles.box}>
        <View style={styles.header}>
          <HeaderText>Notifications</HeaderText>
        </View>
        <View style={styles.container}>
          <View style={styles.item}>
            <Row style={{justifyContent: 'space-between', marginRight: 20}}>
              <Text style={{...styles.fontText, left: 31, fontSize: 16}}>
                Weekly goal
              </Text>
              <Switch
                trackColor={{false: '#D4F8E5', true: '#F0F0F0'}}
                thumbColor={isEnabled ? '#C5C5C5' : '#00C288'}
                ios_backgroundColor="rgb(219, 247, 230)"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switch}
              />
            </Row>
          </View>
          <View style={styles.divider} />

          <View style={styles.item}>
            <Row style={{justifyContent: 'space-between', marginRight: 20}}>
              <Text style={{...styles.fontText, left: 31, fontSize: 16}}>
                New gym added
              </Text>
              <Switch
                trackColor={{false: '#D4F8E5', true: '#F0F0F0'}}
                thumbColor={isEnabled ? '#C5C5C5' : '#00C288'}
                ios_backgroundColor="rgb(219, 247, 230)"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switch}
              />
            </Row>
          </View>
          <View style={styles.divider} />

          <View style={styles.item}>
            <Row
              style={{
                justifyContent: 'space-between',
                marginRight: 20,
              }}>
              <Text style={{...styles.fontText, left: 31, fontSize: 16}}>
                Pass expiring in 3 day
              </Text>
              <Switch
                trackColor={{false: '#D4F8E5', true: '#F0F0F0'}}
                thumbColor={isEnabled ? '#C5C5C5' : '#00C288'}
                ios_backgroundColor="rgb(219, 247, 230)"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switch}
              />
            </Row>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
  box: {
    paddingTop: 20,
  },
  switch: {
    
  },
  divider: {
    marginTop: 25,
    borderBottomColor: '#CDCDCD',
    borderBottomWidth: 1,
    width: 327,
    marginLeft: 32,
  },
  item: {
    marginTop: 35,
  },
});
