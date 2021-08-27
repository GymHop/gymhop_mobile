import React, {createContext, useMemo, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import {config} from '../constants';
import {REQUEST} from './requests';
import {ActivityIndicator, Modal} from 'react-native';
import {Res} from '../resources';
import {NavigationAction} from '../#root/AppNavigation';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import {Measurements} from 'src/utils';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const Api = useMemo(
    () =>
      axios.create({
        baseURL: config.apiUrl,
        headers: {
          Accept: 'application/json',
        },
      }),
    [config],
  );
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [codeSent, setCodeSent] = useState(false);

  const clearUser = () => {
    setUser(null);
    setLoading(false);
  };

  const getDefault = () => {
    getUser();
  };

  const setAxiosHeader = () => {
    Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const storeToken = async token => {
    try {
      await AsyncStorage.setItem('@token', token);
    } catch (e) {
      console.log(e);
    }
  };

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('@token');
    } catch (e) {
      console.log(e);
    }
  };

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      console.log('TOKEN', value);
      if (value !== null) {
        // value previously stored
        setToken(value);
        setAxiosHeader();
        getDefault();
        NavigationAction.reset('map1');
      } else {
        NavigationAction.reset('loggedOut');
      }
    } catch (e) {
      NavigationAction.reset('loggedOut');
      // error reading value
    }
  };

  const auth = async data => {
    console.log('murat tishkul', data);
    setLoading(true);
    Api.post(REQUEST.AUTH, {user: data})
      .then(res => {
        console.log(res);
        // setUser(res.data);
        Toast.show({
          text1: 'Success',
          text2: 'Sms is send',
        });
        setLoading(false);
        setCodeSent(true);
      })
      .catch(e => {
        setLoading(false);
        console.log(e);
        Toast.show({
          text1: 'Error',
          text2: e,
        });
      });
  };

  const login = data => {
    setLoading(true);
    Api.post(REQUEST.LOGIN, data)
      .then(async res => {
        storeToken(res.data.data.token);
        setToken(res.data.data.token);
        setAxiosHeader();
        await setUser(res.data);
        // await getUser();

        setLoading(false);
        console.log('MUratmurat murat murat murat', res);

        NavigationAction.reset('map1');
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
        showError('Wrong Code');
      });
  };

  const getUser = async () => {
    setLoading(true);
    return Api.get(REQUEST.GET_USER)
      .then(res => {
        setLoading(false);
        setUser(res.data.user);
        return res.data.user;
      })
      .catch(e => {
        setLoading(false);
        showError(e);
        return e;
      });
  };

  const showError = error => {
    console.log('error:', error);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.response.data.error || error,
    });
  };

  const showSuccess = text => {
    Toast.show({
      text1: 'Success',
      text2: text,
    });
  };

  const sendRequest = data => {
    setLoading(true);
    Api.post(REQUEST.SEND_REQUEST, data)
      .then(res => {
        setLoading(false);
        NavigationAction.navigate('RequestStatus');
      })
      .catch(e => {
        showError(e);
        setLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        user: user,
        loading: loading,
        getUser: getUser,
        auth: auth,
        login: login,
        getToken: getToken,
        clearUser: clearUser,
        codeSent: codeSent,
      }}>
      {props.children}
      {loading && (
        <Modal transparent={true}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size={'small'} color={Res.colors.main} />
          </View>
        </Modal>
      )}
    </AuthContext.Provider>
  );
};

export const withAuth = Comp => {
  return props => {
    return (
      <AuthContext.Consumer>
        {context => <Comp {...props} {...context} />}
      </AuthContext.Consumer>
    );
  };
};
