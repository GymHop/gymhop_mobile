import { useNavigation } from "@react-navigation/native";
import React from "react";
import { screen } from '../../../hocs/screen';


import { OnboardingLoggedOutContainer } from "./containers/OnboardingLoggedOutContainer";

export const OnboardingLoggedOutScreen = screen(
  props => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //   navigation.navigate('main');
    // };
    return <OnboardingLoggedOutContainer />;
  },
  {
    noHeader: true,
  },
);
