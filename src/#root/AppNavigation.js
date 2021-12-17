import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {AuthContext} from './AuthProvider';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginScreen,
  CheckInMainScreen,
  OndoardSliderScreen,
  MapScreen,
  UserProfileScreen,
} from '../screens';
import {OnboardingLoggedOutScreen} from '../screens/OnboardingScreen/OnboardingLoggedOutScreen';
import {GymProfileScreen} from '../screens/GymProfileScreen';

const Stack = createStackNavigator();

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const AppNavigation = () => {
  const context = useContext(AuthContext)
  const onBoardingScreen = (
    <Stack.Screen
      name="onboardslider"
      component={OndoardSliderScreen}
      options={{
        headerShown: false,
      }}
    />
  );
  const screens = [
    <Stack.Screen
      name="auth"
      component={LoginScreen}
      options={{headerShown: false}}
    />,
    <Stack.Screen
      name="map"
      component={MapScreen}
      options={{headerShown: false}}
    />,
    <Stack.Screen
      name="onboardsignup"
      component={OnboardingLoggedOutScreen}
      options={{headerShown: false}}
    />,
    <Stack.Screen
      name="userProfile"
      component={UserProfileScreen}
      options={{headerShown: false}}
    />,
    <Stack.Screen
      name="gymProfile"
      component={GymProfileScreen}
      options={{headerShown: false}}
    />,
    <Stack.Screen
      name="CheckInMain"
      component={CheckInMainScreen}
      options={{headerShown: false}}
    />,
  ];
  if(!context.getStarted){
    screens.unshift(onBoardingScreen);
  }
  

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        keyboardHandlingEnabled
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: forFade,
        }}>
        {screens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
