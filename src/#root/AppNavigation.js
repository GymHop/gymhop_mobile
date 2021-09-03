import 'react-native-gesture-handler';
import React, {createRef, useEffect, useState} from 'react';
import {
  CommonActions,
  NavigationContainer,
  DrawerActions,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Keyboard, Platform} from 'react-native';
import {View, Text} from 'react-native';
import {
  LoginScreen,
  EntryScreen,
  TemporaryNavScreen,
  TempScreen,
  OnboardingMapScreen1,
  OnboardingMapScreen2,
  OndoardSliderScreen,
  Map1Screen,
  CheckInScreen,
} from '../screens';
import {Res} from '../resources';
import {ButtonVisualizer} from '../screens/TemporaryNavScreen/components/ButtonVisualizer';
import {OnboardingLoggedOutScreen} from '../screens/OnboardingScreen/OnboardingLoggedOutScreen';
import {Launch} from '../screens/TemporaryNavScreen/components/Launch';
import {SignupScreen} from '../screens/LoginScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#F5FFF9',
          height: 88,
        },
      }}
      initialRouteName="maps1">
      <Tab.Screen
        name="Home"
        component={Map1Screen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/mapGrey.png')}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#00CF58' : '#454545',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CheckIn"
        component={CheckInScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/check.png')}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#00CF58' : '#454545',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const DrawerRoutes = ({navigation}) => (
  <Drawer.Navigator
    screenOptions={{
      gestureEnabled: false,
    }}
    initialRouteName="maps1">
    <Drawer.Screen
      name="Home"
      component={TabRoutes}
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
          options={{headerShown: false}}
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
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen
          name="buttons"
          component={ButtonVisualizer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="launch"
          component={Launch}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="loggedOut"
          component={OnboardingLoggedOutScreen}
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
