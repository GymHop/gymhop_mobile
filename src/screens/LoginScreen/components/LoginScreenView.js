import styled from 'styled-components/native';
import React, {useState} from 'react';
import {TextInputMask} from 'react-native-masked-text';
import PhoneInput from 'react-native-phone-number-input';
import Toast from 'react-native-toast-message';

import {Res} from '../../../resources';
import { Measurements} from '../../../utils';
import {
  DefaultInput,
  PrimaryButton,
  Timer,
  CodeEnter,
  H2,
} from '../../../components';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${Res.colors.main};
  padding-horizontal: ${Res.spaces.md};
  padding-bottom: ${Measurements.safeAreaBottomInset};
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Wrap = styled.View`
  flex: 1;
  padding-top: ${Res.spaces.md};
`

const Header = styled.View`
  ${Platform.OS === 'ios'
    ? `
        height:
          ${Measurements.statusBarHeight + Measurements.navigationBarHeight + 10}px;
        background-color: ${Res.colors.main};
        justify-content: flex-end;
        padding-bottom: ${Res.spaces.md}px;
      `
    : `height: ${Measurements.navigationBarHeight}px;`
    }
`

export const LoginScreenView = props => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [fio, setFio] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header>
        <Row>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <H2 white text={t('placeholders.goBack')} />
          </TouchableOpacity>
          <H2
            style={{
              fontWeight: '500',
              fontSize: 25,
            }}
            white
            text={t('placeholders.register')}
          />
          <H2 style={{opacity: 0}} white text={t('placeholders.goBack')} />
        </Row>
      </Header>
      <Wrap>
        <DefaultInput
          onChangeText={text => setFio(text)}
          placeholder={t('placeholders.name')}
        />
        <PhoneInput
          // ref={phoneInput}
          defaultValue={phone}
          defaultCode="KZ"
          layout="first"
          onChangeFormattedText={text => {
            setPhone(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
          containerStyle={{
            marginBottom: Res.spaces.padding.xxs,
            flexDirection: 'row',
            backgroundColor: Res.colors.white,
            borderRadius: Res.spaces.radius.xs,
            fontSize: 16,
            width: '100%',
          }}
          textContainerStyle={{
            borderRadius: Res.spaces.radius.xs,
          }}
          textInputStyle={{
            paddingHorizontal: Platform.OS === 'ios' ? 0 : 4,
            paddingVertical: Platform.OS === 'ios' ? 0 : 0,
          }}
        />

        <Row
          style={{
            justifyContent: !props.user ? 'center' : 'space-between',
          }}>
          {props.user && <Timer style={{opacity: 0}} time={60} />}

          <PrimaryButton
            onPress={() => {
              if (phone.length > 6 && fio.length > 1) {
                props.onAuth({
                  phone,
                  fio,
                });
              } else {
                Toast.show({
                  type: 'error',
                  text1: 'Error',
                  text2: t('placeholders.fillAll'),
                });
              }
            }}
            small
            text={t('placeholders.sendSms')}
          />
          {props.user && <Timer time={60} />}
        </Row>
        {props.user && (
          <CodeEnter
            onCode={code => {
              Keyboard.dismiss();

              props.onLogin({
                phone,
                code,
              });
            }}
          />
        )}
      </Wrap>
    </Container>
  );
};
