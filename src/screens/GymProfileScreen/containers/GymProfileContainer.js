import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screen} from '../../hocs/screen.js';
import {DescriptionBlock, HoursBlock} from '../components/DescriptionBlock.js';
import {GymHeader} from '../components/GymHeader.js';
import {GymNav} from '../components/GymNav.js';
import {useQuery} from 'react-query';
import axios from 'axios';
import {AuthContext} from '../../context/useAuth';
import {MiddleNavigation} from '../../UserProfileScreen/components/MiddleNavigation.js';
import {GymInfoBlock} from '../components/GymInfoBlock.js';
import {GymTile} from '../../../components/index.js';
import {ScrollView} from 'react-native-gesture-handler';

export const GymProfileContainer = ({gymData}) => {
  return (
    <ScrollView>
      <GymHeader gymData={gymData} distance={'6.7mi away'} rating={'5.0'} />
      <MiddleNavigation gymProfile={true} />
      <DescriptionBlock />
      <HoursBlock />
      <GymInfoBlock gymData={gymData} />
      <View style={{marginTop: 16}}>
        <Image
          source={require('../../../assets/images/tempMap.png')}
          style={{width: '98%', borderRadius: 18}}
        />
      </View>
    </ScrollView>
  );
};
