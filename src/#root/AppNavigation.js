import 'react-native-gesture-handler';
import React, {createRef, useEffect, useState} from 'react';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Keyboard, Platform} from 'react-native';

import {
  LoginScreen,
  EntryScreen,
} from '../screens';
import {Res} from '../resources';

const rootNavigationRef = createRef();

const Stack = createStackNavigator();

const RED_HEADER = {
  backgroundColor: Res.colors.main,
};

export const AppNavigation = () => {
    return (
      <NavigationContainer ref={rootNavigationRef}>
        <Stack.Navigator
          headerMode="none"
          keyboardHandlingEnabled
          initialRouteName="entry">
          {/* <Stack.Screen name="entry" component={EntryScreen} options={{headerShown: false}}/> */}
          <Stack.Screen
            name="auth"
            component={LoginScreen}
            options={{
              headerTitle: 'header.signUp',
              headerStyle: RED_HEADER,
              headerTitleStyle: {
                color: Res.colors.white,
                fontWeight: '500',
                fontSize: Res.spaces.font.h1,
              },
            }}
          />
          {/* <Stack.Screen name="main" component={} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  