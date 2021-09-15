/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {createRef, useEffect, useState} from 'react';
import {
  CommonActions,
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Keyboard, Platform, TouchableOpacity} from 'react-native';
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
  UserProfileScreen,
} from '../screens';
import {Res} from '../resources';
import {ButtonVisualizer} from '../screens/TemporaryNavScreen/components/ButtonVisualizer';
import {OnboardingLoggedOutScreen} from '../screens/OnboardingScreen/OnboardingLoggedOutScreen';
import {Launch} from '../screens/TemporaryNavScreen/components/Launch';
import {SignupScreen} from '../screens/LoginScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabsShape from './TabShape';
const rootNavigationRef = createRef();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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

// middle check in button
const CheckInTabNavigator = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -16,
      width: 54,
      height: 54,
      borderRadius: 27,
      backgroundColor: '#00C288',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    }}
    onPress={onPress}>
    {children}
  </TouchableOpacity>
);

//Bottom Tab Nav
const TabRoutes = () => {
  const [activeTab, setActiveTab] = useState('map1');
  const navigation = useNavigation();

  const changeTab = name => {
    navigation.navigate(name);
    setActiveTab(name);
  };
  return (
    <>
      <Tab.Navigator
        screenOptions={{tabBarVisible: false}}
        initialRouteName="Home">
        <Tab.Screen name="Home" component={Map1Screen} />
        <Tab.Screen name="CheckIn" component={CheckInScreen} />
        <Tab.Screen name="UserProfile" component={UserProfileScreen} />
      </Tab.Navigator>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'transparent',
        }}>
        <TabsShape tabWidth={80} />
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => changeTab('Home')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -25,
            }}>
            <Image
              source={require('../assets/icons/mapGrey.png')}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: activeTab === 'Home' ? '#00CF58' : '#454545',
              }}
            />
          </TouchableOpacity>
          <CheckInTabNavigator onPress={() => changeTab('CheckIn')}>
            <Image
              source={require('../assets/icons/check.png')}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: '#F5FFF9',
              }}
            />
          </CheckInTabNavigator>
          <TouchableOpacity
            onPress={() => changeTab('UserProfile')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -25,
            }}>
            <Image
              source={require('../assets/icons/profile.png')}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: activeTab === 'UserProfile' ? '#00CF58' : '#454545',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

// drawer nav
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

// main navigation for app stack navigation
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
