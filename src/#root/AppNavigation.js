import 'react-native-gesture-handler';
import React, {createRef, useEffect, useState} from 'react';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Keyboard, Platform} from 'react-native';
import {View, Text} from 'react-native';
import {LoginScreen, EntryScreen} from '../screens';
import {Res} from '../resources';

const rootNavigationRef = createRef();

const Stack = createStackNavigator();

const RED_HEADER = {
  backgroundColor: Res.colors.main,
};

export const NavigationAction = {
  navigate: (name, params) => {
    if (rootNavigationRef) {
      rootNavigationRef.current?.navigate(name, params);
    }
  },
  goBack: () => {
    if (rootNavigationRef && rootNavigationRef.current?.canGoBack()) {
      rootNavigationRef.current?.goBack();
    }
  },
  getScreenName: () => {
    if (rootNavigationRef) {
      return rootNavigationRef.current.getCurrentRoute().name;
    }
  },
  reset: (name, params) => {
    if (rootNavigationRef) {
      rootNavigationRef.current?.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name,
            },
          ],
        }),
      );
    }
  },
};

const Main = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        flex: 1,
      }}>
      <Text>This is a place for the main screen</Text>
    </View>
  );
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
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
