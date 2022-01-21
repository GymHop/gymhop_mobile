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
} from 'react-native';
import {CheckBox, Icon} from 'react-native-elements';
import {PaymentInfo} from './PaymentInfo';
import {Total} from './Total';

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
  margin-left: 16px;
  line-height: 20px;
`;
export const CancelButton = styled.Text`
  width: 195px;
  height: 26px;
  font-size: 21px;
  margin-left: 16px;
  border-radius: 5px;
`;

export const SelectPayment = ({tier}) => {
  const [check4, setCheck4] = useState(false);
  const [toggleCard, setToggleCard] = useState(false);
  return (
    <>
      <View style={{paddingBottom: 36, paddingTop: 20}}>
        <HeaderContainer>
          <HeaderText style={styles.fontText}>Payment Method</HeaderText>
        </HeaderContainer>
        <HeaderSubText style={styles.fontText}>Select Payment</HeaderSubText>
        <Row style={styles.box}>
          <CheckBox
            center
            checkedIcon={
              <Icon
                name="radio-button-checked"
                type="material"
                color="#00C288"
                size={25}
                iconStyle={{marginRight: 10}}
              />
            }
            uncheckedIcon={
              <Icon
                name="radio-button-unchecked"
                type="material"
                color="grey"
                size={25}
                iconStyle={{marginRight: 10}}
              />
            }
            checked={toggleCard}
            onPress={() => setToggleCard(true)}
          />
          <View>
            <Text style={styles.title}>Credit/debit card</Text>
          </View>
          <Image
            source={require('../../../../assets/icons/debit.png')}
            style={{width: 11, height: 16}}
            style={styles.chevroneCard}
            s
          />
        </Row>
        <Row style={styles.box}>
          <CheckBox
            center
            checkedIcon={
              <Icon
                name="radio-button-checked"
                type="material"
                color="#00C288"
                size={25}
                iconStyle={{marginRight: 10}}
              />
            }
            uncheckedIcon={
              <Icon
                name="radio-button-unchecked"
                type="material"
                color="grey"
                size={25}
                iconStyle={{marginRight: 10}}
              />
            }
            checked={false}
            onPress={() => setCheck4(!check4)}
          />
          <View style={{marginLeft: 1}}>
            <Text style={styles.title}>Apple Pay</Text>
          </View>

          <Image
            source={require('../../../../assets/icons/applePay.png')}
            style={{width: 11, height: 16}}
            style={styles.chevroneApple}
            s
          />
        </Row>

        {toggleCard && (
          <>
            <PaymentInfo />
            <Total tier={tier} />
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 342,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: '#A5A5A5',
    borderTopColor: '#A5A5A5',
    borderLeftColor: '#A5A5A5',
    borderRightColor: '#A5A5A5',
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  debit: {marginTop: 5},
  chevroneCard: {
    marginLeft: 100,
  },
  chevroneApple: {
    marginLeft: 140,
  },
  title: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 17.64,
  },
});
