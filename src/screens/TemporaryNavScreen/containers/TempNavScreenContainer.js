import React, {useContext, useEffect} from 'react';
import {TempNavScreenView} from '../components/TempNavScreenView';
import {AuthContext} from '../../../context/useAuth';

const TempNavScreenContainer = props => {
  const auth = useContext(AuthContext);
  const fetchToken = async () => {
    const tokenRes = await auth.getTokenOnly();
    return tokenRes;
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return <TempNavScreenView />;
};

export default TempNavScreenContainer;
