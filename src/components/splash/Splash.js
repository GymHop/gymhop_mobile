import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Image} from 'react-native';

export const Splash = () => {
  return (
    <>
      <LinearGradient colors={['#05CE91', '#4AF09D']} style={styles.container}>
        <Image
          style={styles.ghLogoFinal}
          source={require('../../assets/images/logos/logo_final1.png')}
        />
        <Image
          style={styles.ghLogo}
          source={require('../../assets/images/logos/GHLogo.png')}
        />
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  ghLogoFinal: {
    height: 128,
    width: 187,
    marginTop: 275,
  },
  ghLogo: {
    height: 44,
    width: 340,
    marginTop: 19,
  },
});
