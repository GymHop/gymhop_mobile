import React, {createContext, Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import {config} from '../constants';
import {REQUEST} from './requests';
import {ActivityIndicator, Modal} from 'react-native';
import {Res} from '../resources';
import {NavigationAction} from '../#root/AppNavigation';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import { Measurements} from 'src/utils';

const AuthContext = createContext();

export class AuthProvider extends Component {
  state = {
    token: '',
    loading: false,
    user: null,
    emailVerifySend: false,
    events: [],
    places: [],
    libraries: [],
    eventsLoading: false,
    placesLoading: false,
    savedEvents: [],
    savedLibrary: [],
    comments: [],
    messages: [],
    rewards: [],
    successModal: false,
    cheduleEvents: [],
    isEventModal: false,
  };
  Api;

  constructor(props) {
    super(props);
    this.Api = axios.create({
      baseURL: config.apiUrl,
      headers: {
        Accept: 'application/json',
      },
    });
    // this.Api.interceptors.request.use(config => {
    //   console.log(config);
    //   return config;
    // });
  }

  clearUser = () => {
    this.setState({
      user: null,
      loading: false,
    });
  };

  getDefault() {
    this.getUser();
  }

  setLoading = loading => {
    this.setState({
      loading,
    });
  };

  setAxiosHeader = () => {
    this.Api.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${this.state.token}`;
  };

  storeToken = async token => {
    try {
      await AsyncStorage.setItem('@token', token);
    } catch (e) {
      console.log(e);
    }
  };

  removeToken = async () => {
    try {
      await AsyncStorage.removeItem('@token');
    } catch (e) {
      console.log(e);
    }
  };

  getToken = async () => {
    try {
      this.getLanguage();
      const value = await AsyncStorage.getItem('@token');
      console.log('TOKEN', value);
      if (value !== null) {
        // value previously stored
        this.setState({
          token: value,
        });
        this.setAxiosHeader();
        this.getDefault();
        NavigationAction.reset('main');
      } else {
        NavigationAction.reset('entry');
      }
    } catch (e) {
      NavigationAction.reset('entry');
      // error reading value
    }
  };

  auth = async data => {
    this.setLoading(true);
    this.Api.post(REQUEST.AUTH, data)
      .then(res => {
        console.log(res);
        this.setState({
          user: res.data,
        });
        Toast.show({
          text1: 'Success',
          text2: 'Sms is send',
        });
        this.setLoading(false);
      })
      .catch(e => {
        this.setLoading(false);
        console.log(e);
        Toast.show({
          text1: 'Error',
          text2: e,
        });
      });
  };

  login = data => {
    this.setLoading(true);
    this.Api.post(REQUEST.LOGIN, data)
      .then(async res => {
        this.storeToken(res.data.token);
        this.setState({
          token: res.data.token,
        });
        this.setAxiosHeader();
        await this.getUser();

        this.setLoading(false);

        NavigationAction.reset('main');
      })
      .catch(e => {
        console.log(e);
        this.setLoading(false);
        this.showError('Wrong Code');
      });
  };

  getUser = async () => {
    this.setLoading(true);
    return this.Api.get(REQUEST.GET_USER)
      .then(res => {
        this.setLoading(false);
        this.setState({
          user: res.data.user,
        });
        return res.data.user;
      })
      .catch(e => {
        this.setLoading(false);
        this.showError(e);
        return e;
      });
  };

  updateUser = data => {
    this.setLoading(true);
    this.Api.patch(REQUEST.UPDATE_USER, data)
      .then(res => {
        this.setLoading(false);
        this.getUser();
        Toast.show({
          text1: 'Success',
          text2: 'User updated',
        });
      })
      .catch(e => {
        console.log(e);
        this.setLoading(false);

        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Something goes wrong',
        });
      });
  };

  verifyEmail = () => {
    this.setLoading(true);
    this.Api.get(REQUEST.VERIFY_EMAIL)
      .then(res => {
        this.setLoading(false);
        this.showSuccess('Email send');
      })
      .catch(e => {
        console.warn(e);
        this.setLoading(false);
        this.showError(e);
      });
  };

  showError = error => {
    console.log('error:', error);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.response.data.error || error,
    });
  };

  showSuccess = text => {
    Toast.show({
      text1: 'Success',
      text2: text,
    });
  };

  signOut = async () => {
    try {
      this.removeToken();
      this.setState({
        token: '',
        loading: false,
        user: null,
        emailVerifySend: false,
        events: [],
        places: [],
        libraries: [],
        eventsLoading: false,
        placesLoading: false,
        savedEvents: [],
        savedLibrary: [],
        comments: [],
        messages: [],
      });
      NavigationAction.reset('entry');
      this.showSuccess('Signed out');
    } catch (e) {
      this.showError('Sorry, u cant do it now');
    }
  };



  uploadImage = data => {
    this.uploadLoading(true);
    this.Api.post(REQUEST.UPLOAD_IMAGE, data, {
      headers: {
        'Content-Type': 'multipart/form-data; ',
      },
    })
      .then(res => {
        this.uploadLoading(false);
        this.getUser();
        console.log(res);
      })
      .catch(e => {
        this.showError(e);
        this.uploadLoading(false);
      });
  };

  sendRequest = data => {
    this.setLoading(true);
    this.Api.post(REQUEST.SEND_REQUEST, data)
      .then(res => {
        this.setLoading(false);
        NavigationAction.navigate('RequestStatus');
      })
      .catch(e => {
        this.showError(e);
        this.setLoading(false);
      });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          token: this.state.token,
          user: this.state.user,
          loading: this.state.loading,
          getUser: this.getUser,
          auth: this.auth,
          login: this.login,
          getToken: this.getToken,
          updateUser: this.updateUser,
          verifyEmail: this.verifyEmail,
          signOut: this.signOut,
          uploadImage: this.uploadImage,
          sendRequest: this.sendRequest,
          clearUser: this.clearUser,
        }}>
        {this.props.children}
        {this.state.loading && (
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
  }
}

export const withAuth = Comp => {
  return props => {
    return (
      <AuthContext.Consumer>
        {context => <Comp {...props} {...context} />}
      </AuthContext.Consumer>
    );
  };
};
