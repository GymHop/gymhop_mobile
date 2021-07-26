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

  return class KeyboardAware extends React.PureComponent {
    displayName = `Screen(${
      ScreenComponent.displayName || ScreenComponent.name
    })`;

    navigationOptions =
      typeof navigationOptions === 'function'
        ? navigationOptionsContainer =>
            navigationOptions({
              ...navigationOptionsContainer,
              navigation: enhanceNavigationProp(
                navigationOptionsContainer.navigation,
              ),
            })
        : navigationOptions;

    render() {
      return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {/* <KeyboardAvoidingView behavior="padding" style={{flex: 1}}> */}
          <>
            {!navigationOptions.noHeader && (
              <Header
                navigationOptions={navigationOptions}
                {...this.props}
                drawer={this.props.drawer}
              />
            )}
            <ScreenComponent
              {...this.props}
              navigation={enhanceNavigationProp(this.props.navigation)}
            />
          </>
          {/* </KeyboardAvoidingView> */}
        </TouchableWithoutFeedback>
      );
    }
  };
};
