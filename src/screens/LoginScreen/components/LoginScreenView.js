import styled from 'styled-components/native';
import React, {useState} from 'react';
import {TextInputMask} from 'react-native-masked-text';
import PhoneInput from 'react-native-phone-number-input';
import Toast from 'react-native-toast-message';
import { ImageBackground } from 'react-native'; 
import {Res} from '../../../resources';
import { Measurements} from '../../../utils';
import {
  DefaultInput,
  PrimaryButton,
  Timer,
  CodeEnter,
  H2,
  H3,
  H1,
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
  /* background-color: ${Res.colors.main}; */
  padding-horizontal: ${Res.spaces.md}px;
  padding-bottom: ${Measurements.safeAreaBottomInset}px;
  display:flex;
  background: rgba(28, 28, 28, 0.5);
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Wrap = styled.View`
  flex: 1;
  padding-top: ${Res.spaces.md}px;
  justify-content: space-between;
  paddingBottom: 50px;
`

const PhoneInputContainer = styled.View`
  flex-direction: column;
  
`

const Header = styled.View`
  ${Platform.OS === 'ios'
    ? `
        height:
          ${Measurements.statusBarHeight + Measurements.navigationBarHeight + 10}px;
        /* background-color: ${Res.colors.main}; */
        justify-content: flex-end;
        padding-bottom: ${Res.spaces.md}px;
      `
    : `height: ${Measurements.navigationBarHeight}px;`
    }
`

export const LoginScreenView = props => {
  const navigation = useNavigation();
  const [fio, setFio] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <ImageBackground style={{flex: 1, resizeMode: 'cover', width: null, height: null}} source={require('../../../assets/images/LoginBackground.jpeg')} >
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header>
        <Row style={{display:'flex'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <H2
            white
            text={'Back'}
          />
          </TouchableOpacity>
        </Row>
      </Header>
      <Wrap>
        
        
        <PhoneInputContainer>
          <H2
            style={{
              fontWeight: '500',
              fontSize: 25,
              textAlign: 'left',
              lineHeight: 35,
              marginBottom: 30,
              marginTop: 30
            }}
            white
            text={'Log In'}
          />
          <H2 white text="Log in with Phone Number" style={{marginBottom:10}}/>
          <PhoneInput
            // ref={phoneInput}
            defaultValue={phone}
            defaultCode="US"
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
              borderColor: '#42DF90',
              background: 'transparent',
            }}
            textContainerStyle={{
              borderRadius: Res.spaces.radius.xs,
              borderColor: '#42DF90',
              background: 'transparent',
            }}
            textInputStyle={{
              borderColor: '#42DF90',
              background: 'transparent',
              paddingHorizontal: Platform.OS === 'ios' ? 0 : 4,
              paddingVertical: Platform.OS === 'ios' ? 0 : 0,
            }}
            style={{borderColor: '#42DF90',
            background: 'transparent',}}
          />
        </PhoneInputContainer>

        <Row
          style={{
            justifyContent: !props.user ? 'center' : 'space-between',
            flexDirection: 'column'
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
                });
              }
            }}
            small
            style={{width: '100%'}}
            text={'Log In'}
          />
          {props.user && <Timer time={60} />}
          <H2 white text="By creating an account, I agree to GymHop’s terms and conditions."/>
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
    </ImageBackground>
  );
};
