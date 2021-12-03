import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Res} from '../../resources';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from 'react-native-elements';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

function DrawerButton({}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image
          style={{marginLeft: 15}}
          source={require('../../assets/icons/menu_24px.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export const DrawerNavHeader = props => {
  return (
    <Header
      centerComponent={
        <Image
          style={styles.gymhoplogo}
          source={require('../../assets/images/logos/GHLogo.png')}
        />
      }
      containerStyle={{
        paddingTop: Platform.OS === 'ios' ? 0 : '10%',
        height: Platform.OS === 'ios' ? 95: 110,
        shadowColor: Res.colors.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      }}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: [Res.colors.paleGreen, Res.colors.secondaryGreen],
        useAngle: true,
        angle: 175,
        angleCenter: {x: 0.98, y: 1.3},
      }}
    />
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  headerWrap: {
    flex: 1,
  },
  sample: {
    backgroundColor: Res.colors.main,
    height: '12%',
  },
  logo: {
    position: 'absolute',
    top: 62,
    left: 107,
  },
  ham: {
    top: 67,
    left: 30,
    marginTop: '15%',
  },
  gymhoplogo: {
    width: 180,
    height: 24,
  },
});
