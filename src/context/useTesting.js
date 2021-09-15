import React, {createContext, useMemo, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const TestingContext = createContext();

export const TestingProvider = props => {
  const [tier, setTier] = useState('');

  const standardTier = () => {
    setTier('standard')
    
  }

  const premiumTier = () => {
    setTier('premium')
  }

  const removeTier = async () => {
    try {
      await AsyncStorage.removeItem('@tier');
    } catch (e) {
      console.log(e);
    }
  };

  const storeTier = async token => {
    try {
      await AsyncStorage.setItem('@tier', tier);
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <TestingContext.Provider
      value={{
        tier: tier,
        storeTier: storeTier,
        removeTier: removeTier,
        premiumTier: premiumTier,
        standardTier: standardTier,
       
      }}>
      {props.children}
    </TestingContext.Provider>
  );
};

export const withTesting = Comp => {
  return props => {
    return (
      <TestingContext.Consumer>
        {context => <Comp {...props} {...context} />}
      </TestingContext.Consumer>
    );
  };
};