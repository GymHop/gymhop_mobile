import React, { useState } from 'react';

import {View, StyleSheet} from 'react-native';
import {Map} from '../../../components/map';
import {Res} from '../../../resources';
import {Measurements} from '../../../utils';
import styled from 'styled-components/native';
import {DrawerNavHeader} from '../../../components';
import { Tabs } from '../../../components/tabs/Tabs';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  /* background-color: ${Res.colors.main}; */
  padding-horizontal: ${Res.spaces.md}px;
  padding-bottom: ${Measurements.safeAreaBottomInset}px;
  display: flex;
  z-index: 3;
`;

export const MapScreenView = props => {
  const [userRegion, setUserRegion] = useState({
    latitude: 40.709318,
    longitude: -73.990686,
    latitudeDelta: 0.068,
    longitudeDelta: 0.033,
  });


  return (
    <View style={styles.wrap}>
      <DrawerNavHeader />

      <Container style={styles.map}>
        <Map
          initialRegion={{
            latitude: 40.709318,
            longitude: -73.990686,
            latitudeDelta: 0.068,
            longitudeDelta: 0.033,
          }}
          latitude={userRegion.latitude}
          longitude={userRegion.longitude}
          latitudeDelta={userRegion.latitudeDelta}
          longitudeDelta={userRegion.longitudeDelta}
          userRegion={userRegion}
          setUserRegion={setUserRegion}></Map>
      </Container>
      
      <Tabs />
    </View>
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
    backgroundColor: '#00C29E',
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

// const Tab = createBottomTabNavigator();

// const TabRoutes = () => {
//   const [activeTab, setActiveTab] = useState('Map1');
//   const navigation = useNavigation();

//   const changeTab = name => {
//     navigation.navigate(name);
//     setActiveTab(name);
//   };
//   return (
//     <>
//       <Tab.Navigator
//         screenOptions={{tabBarVisible: false}}
//         initialRouteName="Home">
//         <Tab.Screen name="Map1" component={Map1Screen} />
//         <Tab.Screen name="CheckIn" component={CheckInMainScreen} />
//         <Tab.Screen name="UserProfile" component={UserProfileScreen} />
//       </Tab.Navigator>

//       <View
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           backgroundColor: 'transparent',
//         }}>
//         <TabsShape tabWidth={80} />
//         <View
//           style={{
//             position: 'absolute',
//             bottom: 10,
//             width: '100%',
//             display: 'flex',
//             justifyContent: 'space-around',
//             flexDirection: 'row',
//           }}>
//           <TouchableOpacity
//             onPress={() => changeTab('Map1')}
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginTop: -25,
//             }}>
//             <Image
//               source={require('../assets/icons/mapGrey.png')}
//               resizeMode="contain"
//               style={{
//                 width: 28,
//                 height: 28,
//                 tintColor: activeTab === 'Map1' ? '#00CF58' : '#454545',
//               }}
//             />
//           </TouchableOpacity>
//           <CheckInTabNavigator onPress={() => changeTab('CheckInMain')}>
//             <Image
//               source={require('../assets/icons/check.png')}
//               resizeMode="contain"
//               style={{
//                 width: 28,
//                 height: 28,
//                 tintColor: '#F5FFF9',
//               }}
//             />
//           </CheckInTabNavigator>
//           <TouchableOpacity
//             onPress={() => changeTab('UserProfile')}
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginTop: -25,
//             }}>
//             <Image
//               source={require('../assets/icons/profile.png')}
//               resizeMode="contain"
//               style={{
//                 width: 28,
//                 height: 28,
//                 tintColor: activeTab === 'UserProfile' ? '#00CF58' : '#454545',
//               }}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </>
//   );
// };

// middle check in button
// const CheckInTabNavigator = ({children, onPress}) => (
//   <TouchableOpacity
//     style={{
//       top: -16,
//       width: 54,
//       height: 54,
//       borderRadius: 27,
//       backgroundColor: '#00C288',
//       justifyContent: 'center',
//       alignItems: 'center',
//       display: 'flex',
//     }}
//     onPress={onPress}>
//     {children}
//   </TouchableOpacity>
// );