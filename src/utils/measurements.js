import {Platform, StatusBar, Dimensions, StyleSheet} from 'react-native';

const IOS_STANDARD_STATUS_BAR_HEIGHT = 20;
const IOS_IPHONE_X_STATUS_BAR_HEIGHT = 44;
const IOS_IPHONE_X_SAFE_AREA_BOTTOM_INSET = 34;

const IPHONE_X_WIDTH = 375;
const IPHONE_X_HEIGHT = 812;
const IPHONE_XSMAX_WIDTH = 414;
const IPHONE_XSMAX_HEIGHT = 896;

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const isIphoneX = () =>
  (Platform.OS === 'ios' &&
    ((screenHeight >= IPHONE_X_HEIGHT && screenWidth >= IPHONE_X_WIDTH) ||
      (screenHeight >= IPHONE_X_WIDTH && screenWidth >= IPHONE_X_HEIGHT))) ||
  (screenHeight >= IPHONE_XSMAX_HEIGHT && screenWidth >= IPHONE_XSMAX_WIDTH) ||
  (screenHeight >= IPHONE_XSMAX_WIDTH && screenWidth >= IPHONE_XSMAX_HEIGHT);

const safeAreaTopInset = Platform.select({
  ios: isIphoneX() ? IOS_IPHONE_X_STATUS_BAR_HEIGHT : 0,
  android: 0,
});
const safeAreaBottomInset = Platform.select({
  ios: isIphoneX() ? IOS_IPHONE_X_SAFE_AREA_BOTTOM_INSET : 0,
  android: 0,
});
const statusBarHeight = Platform.select({
  ios: isIphoneX()
    ? IOS_IPHONE_X_STATUS_BAR_HEIGHT
    : IOS_STANDARD_STATUS_BAR_HEIGHT,
  android: StatusBar.currentHeight,
});
const navigationBarHeight = Platform.select({
  ios: 44,
  android: 56,
});
const hairlineWidth = StyleSheet.hairlineWidth; // eslint-disable-line prefer-destructuring

export const Measurements = {
  screenWidth,
  screenHeight,
  safeAreaTopInset,
  safeAreaBottomInset,
  statusBarHeight,
  navigationBarHeight,
  hairlineWidth,
  isIphoneX,
};
