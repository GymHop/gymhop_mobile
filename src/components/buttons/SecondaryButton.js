import React from 'react';
import { StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { Res } from '../../resources';
import { H2 } from '../polygraphy';


{/* <View style={styles.imageCancel}>
  <TouchableOpacity onPress={() => { this.setModalVisible(!this.state.visible) }}>
    <Text style={styles.textCancel} >Close</Text>
  </TouchableOpacity>
</View>
const styles = StyleSheet.create({
  imageCancel: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    backgroundColor: '#000000',
    alignItems: 'flex-end',
  },
  textCancel: {
    paddingTop: 25,
    paddingRight: 25,
    fontSize: 18,
    color: "#ffffff",
    height: 50,
  },
}}; */}


const Container = styled.TouchableOpacity`
  border-radius: 19px;
  align-items: center;
  justify-content: space-evenly;
  align-self: center;
  height: 40px;
  
  

  display: flex;
  flex-direction: row;
`;

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 19,
    width: 'auto',
  },
  textStyle: {
    paddingLeft: 10,
    fontFamily: "PlusJakartaSans-Regular"
  }
})

export const SecondaryButton = props => {
  return (
    <LinearGradient
      colors={['#00C288', '#00CF58']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}>
      <Container small={props.small} {...props}>
        <H2 style={{ fontFamily: "PlusJakartaSans-Regular" }} text={props.text} white />
      </Container>
    </LinearGradient>
  );
};


export const CheckinButton = props => {
  return (
    <LinearGradient
      colors={['#00C288', '#00CF58']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}>
      <Container small={props.small} {...props}>
        <Image
          source={require('../../assets/icons/check.png')}
          style={{ width: 20, height: 20 }} />
        <H2 style={styles.textStyle} text={'Check in'} white />
      </Container>
    </LinearGradient>
  );
};
