import {inject, observer} from 'mobx-react';
import React, {useState, useEffect} from 'react';
import {REQUEST_STATUS} from '../constants';
import {withAuth} from '../../../context/useAuth';
import {LoginScreenView} from '../components/LoginScreenView';

const LoginScreenContainer = props => {
  const handleAuth = data => {
    props.auth(data);
  };

  const handleLogin = data => {
    props.login(data);
  };

  useEffect(() => {
    return () => {
      props.clearUser();
    };
  }, []);

  return (
    <LoginScreenView
      user={props.user}
      onAuth={handleAuth}
      onLogin={handleLogin}
      codeSent={props.codeSent}
    />
  );
};

export default withAuth(LoginScreenContainer);
