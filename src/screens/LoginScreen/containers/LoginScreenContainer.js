import React, {useState, useEffect, useContext} from 'react';
import {LoginScreenView} from '../components/LoginScreenView';
import {AuthContext} from '../../../#root/AuthProvider';
import {api} from '../../../utils/api';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const LoginScreenContainer = props => {
  const [codeSent, setCodeSent] = useState(false)
  const context = useContext(AuthContext)
  const navigation = useNavigation();
  
  const onPhoneSubmit = async (phone) => {
    api.post('/auth/send_phone_verification_code', {user:{phone}})
    .then(res => {
      Toast.show({
        text1: 'Success',
        text2: 'Sms is sent',
      });
    })
    .catch(e => {
      Toast.show({
        text1: 'Error',
        text2: e,
      });
    });
    setCodeSent(true);
  };

  const onCodeSubmit = async ({phone, code}) => {
    api.post('/auth/phone_login/', {phone, code})
    .then(async res => {
      context.setSignedInUser(res.data.data)
      navigation.navigate('map');
    })
    .catch(e => {
      console.log(e);
    });
  };

  return (
    <LoginScreenView
      user={props.user}
      onPhoneSubmit={onPhoneSubmit}
      onCodeSubmit={onCodeSubmit}
      codeSent={codeSent}
    />
  );
};

export default LoginScreenContainer;
