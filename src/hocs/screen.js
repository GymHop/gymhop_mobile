import React from 'react';
import {CommonActions} from '@react-navigation/native';
import {
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

export const screen = (ScreenComponent) => {
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

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScreenComponent
          {...props}
          navigation={enhanceNavigationProp(props.navigation)}
        />
      </TouchableWithoutFeedback>
    );
  };
};
