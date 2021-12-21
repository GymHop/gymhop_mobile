import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../utils/api';
import Toast from 'react-native-toast-message';
import {Splash} from '../components/splash/Splash';


export const AuthContext = createContext();

export const AuthProvider = props => {
  const [user, setUser] = useState();
  const [getStarted, setGetStarted] = useState()
  const [loading, setLoading] = useState(true);

  const setSignedInUser = async user => {
    await AsyncStorage.setItem('@token', user.token);
    api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    setUser(user);
  };

  const removeSignedInUser = async () => {
    await AsyncStorage.removeItem('@token');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
  };

  const loadUser = async () => {
    return api
      .get('/users/me')
      .then(res => {
        setUser(res.data.data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch(e => {
        showError(e);
      });
  };

  const showError = error => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.response.data.error || error,
    });
  };

  useEffect(() => {
    AsyncStorage.getItem('@token').then(value => {
      if (value) {
        api.defaults.headers.common['Authorization'] = `Bearer ${value}`;
        loadUser();
      } else {
        setUser(null);
        setTimeout(() => setLoading(false), 2000);
      }
    });
    AsyncStorage.getItem('getStarted').then(value => {
      if (value === 'passed') {
        setGetStarted(true)
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        getStarted:getStarted,
        user: user,
        setSignedInUser: setSignedInUser,
        removeSignedInUser: removeSignedInUser,
      }}>
      {loading ? <Splash /> : props.children}
    </AuthContext.Provider>
  );
};
