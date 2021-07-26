import React, {useEffect} from 'react';
import {withAuth} from '../../../context/useAuth';

// import Axios from '../../../utils/axios';

import {EntryScreenView} from '../components/EntryScreenView';

const EntryScreenContainer = props => {
  const handleNavigation = () => {
    props.getToken();
  };

  useEffect(() => {
    handleNavigation();
  }, []);

  return <EntryScreenView />;
};

export default withAuth(EntryScreenContainer);
