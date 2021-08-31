import 'react-native-gesture-handler';

import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {
  EntryScreen,
  LoginScreen,
  Map1Screen,
  OnboardingMapScreen1,
  OnboardingMapScreen2,
  OndoardSliderScreen,
  TempScreen,
  TemporaryNavScreen,
} from '../screens';
import {Image, Text, View} from 'react-native';
import {Keyboard, Platform, TouchableOpacity} from 'react-native';
import React, {createRef, useEffect, useState} from 'react';

import {ButtonVisualizer} from '../screens/TemporaryNavScreen/components/ButtonVisualizer';
import {DrawerActions} from '@react-navigation/native';
import {Res} from '../resources';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

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

const Drawer = createDrawerNavigator();

const DrawerRoutes = ({navigation}) => (
  <Drawer.Navigator initialRouteName="maps1">
    <Drawer.Screen
      name="maps1"
      component={Map1Screen}
      options={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Image source={require('../assets/icons/menu_24px.png')} />
          </TouchableOpacity>
        ),
      }}
    />
  </Drawer.Navigator>
);
export const AppNavigation = () => {
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <Stack.Navigator
        headerMode="none"
        keyboardHandlingEnabled
        initialRouteName="entry">
        <Stack.Screen
          name="temporarv"
          component={TempScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="map1"
          component={DrawerRoutes}
          options={({navigation, route}) => {
            console.log(navigation);
            console.log(route);
            return {};
          }}
        />
        <Stack.Screen
          name="onBoardingMap1"
          component={OnboardingMapScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="onBoardingMap2"
          component={OnboardingMapScreen2}
          options={{headerShown: false}}
        />
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
        <Stack.Screen
          name="buttons"
          component={ButtonVisualizer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="onboardslider"
          component={OndoardSliderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
