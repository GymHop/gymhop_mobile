import React, {Component} from 'react';
import {CommonActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Header} from '../components';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

export const screen = (ScreenComponent, navigationOptions) => {
  const enhanceNavigationProp = navigation => ({
    ...navigation,
    reset: options => navigation.dispatch(CommonActions.reset(options)),
    push: options =>
      navigation.push(options.routeName, options.params, options.action),
    replace: options =>
      navigation.replace(options.routeName, options.params, options.action),
    pop: options => navigation.pop(options.n, {immediate: options.immediate}),
    popToTop: options => navigation.popToTop({immediate: options.immediate}),
  });

  return function KeyboardAware(props){
    const displayName = `Screen(${
      ScreenComponent.displayName || ScreenComponent.name
    })`;

    let navigationOption =
      typeof navigationOptions === 'function'
        ? navigationOptionsContainer =>
            navigationOptions({
              ...navigationOptionsContainer,
              navigation: enhanceNavigationProp(
                navigationOptionsContainer.navigation,
              ),
            })
        : navigationOptions;

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {/* <KeyboardAvoidingView behavior="padding" style={{flex: 1}}> */}
        <>
          {!navigationOption?.noHeader && (
            <Header
              navigationOptions={navigationOption}
              {...props}
              drawer={props.drawer}
            />
          )}
          <ScreenComponent
            {...props}
            navigation={enhanceNavigationProp(props.navigation)}
          />
        </>
        {/* </KeyboardAvoidingView> */}
      </TouchableWithoutFeedback>
    );
  };
};
