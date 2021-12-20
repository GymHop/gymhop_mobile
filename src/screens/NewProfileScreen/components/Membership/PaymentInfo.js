import React, {useState, useRef, useEffect} from 'react';
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
  TextInput,
} from 'react-native';
import {CheckBox, Icon} from 'react-native-elements';

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

export const HeaderSubText = styled.Text`
  font-weight: 400;
  height: 26px;
  font-size: 16px;
  margin-left: 30px;
  line-height: 20px;
`;
export const CancelButton = styled.Text`
  width: 195px;
  height: 26px;
  font-size: 21px;
  margin-left: 16px;
  border-radius: 5px;
`;
const InputField = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #a5a5a5;
  border-top-width: 1px;
  border-top-color: #a5a5a5;
  border-left-width: 1px;
  border-left-color: #a5a5a5;
  border-right-width: 1px;
  border-right-color: #a5a5a5;
  color: #898989;
  font-size: 14px;
`;
const InputFieldSmall = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #a5a5a5;
  border-top-width: 1px;
  border-top-color: #a5a5a5;
  border-left-width: 1px;
  border-left-color: #a5a5a5;
  border-right-width: 1px;
  border-right-color: #a5a5a5;
  color: #898989;
  font-size: 14px;
`;

export const PaymentInfo = props => {
  const [check4, setCheck4] = useState(false);

  return (
    <>
      <View style={{paddingBottom: 36, paddingTop: 20}}>
        <HeaderContainer>
          <HeaderText style={styles.fontText}>Card Info</HeaderText>
        </HeaderContainer>
        <HeaderSubText style={styles.fontText}>Name on Card</HeaderSubText>
        <InputField
          placeholder="Name on Card"
          editable={true}
          style={styles.fontText}
          style={styles.input}
        />
        <HeaderSubText style={styles.fontText} style={{marginTop: 16}}>
          Card Number
        </HeaderSubText>
        <InputField
          placeholder="XXXX-XXXX-XXXX-XXXX"
          editable={true}
          style={styles.fontText}
          style={styles.input}
        />
        <Row>
          <View>
            <HeaderSubText style={styles.fontText} style={{marginTop: 16}}>
              Exp. Date
            </HeaderSubText>
            <InputFieldSmall
              placeholder="MM/YY"
              editable={true}
              style={styles.inputSmall}
            />
          </View>
          <View>
            <HeaderSubText style={styles.fontText} style={{marginTop: 16}}>
              CVV
            </HeaderSubText>
            <InputFieldSmall
              placeholder="123"
              editable={true}
              style={styles.inputSmall}
            />
          </View>
        </Row>
        <HeaderSubText style={styles.fontText} style={{marginTop: 16}}>
          Post Code
        </HeaderSubText>
        <InputField
          placeholder="XXXX"
          editable={true}
          style={styles.fontText}
          style={styles.input}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 32,
    width: 326,
    borderRadius: 5,
  },

  inputSmall: {
    height: 40,
    marginLeft: 32,
    width: 146,
    borderRadius: 5,
    сolor: '#000000',
  },
  title: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 17.64,
  },
});
