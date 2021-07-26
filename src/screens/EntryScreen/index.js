import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {screen} from '../../hocs/screen';
import EntryScreenContainer from './containers/EntryScreenContainer';

export const EntryScreen = screen(
  props => {
    const navigation = useNavigation();
    const handleNavigation = route => {
      navigation.reset({
        index: 0,
        routes: [{name: route}],
      });
    };
    return <EntryScreenContainer onNavigation={handleNavigation} />;
  },
  {
    noHeader: true,
  },
);
