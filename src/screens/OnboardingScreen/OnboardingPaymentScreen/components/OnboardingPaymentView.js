import styled from 'styled-components/native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../../../components';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
const InputField = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #42df90;
  border-top-width: 1px;
  border-top-color: #42df90;
  border-left-width: 1px;
  border-left-color: #42df90;
  border-right-width: 1px;
  border-right-color: #42df90;
  color: #e5e5e5;
  font-size: 14px;
  background-color: #1e1e1ea6;
  border-radius: 10px;
`;
const InputFieldSmall = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #42df90;
  border-top-width: 1px;
  border-top-color: #42df90;
  border-left-width: 1px;
  border-left-color: #42df90;
  border-right-width: 1px;
  border-right-color: #42df90;
  color: #e5e5e5;
  font-size: 14px;
  background-color: #1e1e1ea6;
  border-radius: 10px;
  width: 163px;
`;

export const OnboardingPaymentView = props => {
  const [phone, setPhone] = useState('');
  // const navigation = useNavigation();

  // function navigateToMap() {
  //   navigation.navigate('map');
  // }

  return (
    <ImageBackground
      style={{
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
        backgroundColor: '#1C1C1C80',
      }}
      source={require('../../../../assets/images/LoginBackground.jpeg')}>
      <View style={styles.container}>
        <Row style={{marginTop: 50}}>
          <Text style={styles.paragraph}>Add Payment Method</Text>
        </Row>
        <View style={{marginTop: 30}}>
          <Text style={styles.font}>
            You will not be charged until after seven days.{' '}
          </Text>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputFont}>Name on Card</Text>
          <InputField
            placeholder="Full Name"
            editable={true}
            style={styles.inputInner}
            placeholderTextColor="#E5E5E5"
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputFont}>Card Number</Text>
          <InputField
            placeholder="XXXX-XXXX-XXXX-XXXX"
            placeholderTextColor="#E5E5E5"
            editable={true}
            style={styles.inputInner}
            maxLength={16}
          />
        </View>

        <Row style={{marginTop: 16, justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.inputFont}>Expiration Date</Text>
            <InputFieldSmall
              placeholder="MM/YY"
              placeholderTextColor="#E5E5E5"
              editable={true}
              style={styles.inputInner}
              maxLength={5}
            />
          </View>
          <View>
            <Text style={styles.inputFont}>CVV</Text>
            <InputFieldSmall
              placeholder="123"
              placeholderTextColor="#E5E5E5"
              editable={true}
              style={styles.inputInner}
              maxLength={3}
            />
          </View>
        </Row>

        <View style={{marginTop: 57}}>
          <PrimaryButton
            text={'CONTINUE'}
            onPress={() => {
              //   getStarted();
              navigateToMap();
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  inputBox: {marginTop: 16},
  font: {
    fontSize: 21,
    fontWeight: '500',
    fontFamily: 'PlusJakartaSans-Regular',
    color: 'white',
  },
  inputFont: {
    fontSize: 16,
    fontWeight: '500',
    color: '#E5E5E5',
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 20,
  },
  inputInner: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'PlusJakartaSans-Regular',
    marginTop: 25,
    paddingLeft: 24,
  },
  paragraph: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
  },
});
